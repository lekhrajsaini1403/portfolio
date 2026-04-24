from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .models import (
    Profile, ResearchArea, Publication, Project,
    Education, Experience, Award, ContactMessage
)
from .serializers import (
    ProfileSerializer, ResearchAreaSerializer, PublicationSerializer,
    ProjectSerializer, EducationSerializer, ExperienceSerializer,
    AwardSerializer, ContactMessageSerializer
)


class ProfileView(APIView):
    """Get the main researcher profile"""
    def get(self, request):
        profile = Profile.objects.first()
        if not profile:
            return Response({'error': 'Profile not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProfileSerializer(profile, context={'request': request})
        return Response(serializer.data)


class ResearchAreaListView(generics.ListAPIView):
    queryset = ResearchArea.objects.all()
    serializer_class = ResearchAreaSerializer


class PublicationListView(generics.ListAPIView):
    serializer_class = PublicationSerializer

    def get_queryset(self):
        queryset = Publication.objects.all()
        pub_type = self.request.query_params.get('type', None)
        year = self.request.query_params.get('year', None)
        featured = self.request.query_params.get('featured', None)

        if pub_type:
            queryset = queryset.filter(publication_type=pub_type)
        if year:
            queryset = queryset.filter(year=year)
        if featured:
            queryset = queryset.filter(is_featured=True)
        return queryset


class PublicationDetailView(generics.RetrieveAPIView):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer


class ProjectListView(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.all()
        status_filter = self.request.query_params.get('status', None)
        featured = self.request.query_params.get('featured', None)

        if status_filter:
            queryset = queryset.filter(status=status_filter)
        if featured:
            queryset = queryset.filter(is_featured=True)
        return queryset


class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class EducationListView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class ExperienceListView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class AwardListView(generics.ListAPIView):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer


class ContactCreateView(generics.CreateAPIView):
    """Handle contact form submissions"""
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Your message has been sent successfully! I will get back to you shortly.'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PortfolioSummaryView(APIView):
    """Single endpoint returning all portfolio data"""
    def get(self, request):
        profile = Profile.objects.first()
        data = {
            'profile': ProfileSerializer(profile, context={'request': request}).data if profile else None,
            'research_areas': ResearchAreaSerializer(ResearchArea.objects.all(), many=True).data,
            'featured_publications': PublicationSerializer(
                Publication.objects.filter(is_featured=True)[:5], many=True
            ).data,
            'all_publications': PublicationSerializer(Publication.objects.all(), many=True).data,
            'featured_projects': ProjectSerializer(
                Project.objects.filter(is_featured=True), many=True, context={'request': request}
            ).data,
            'all_projects': ProjectSerializer(
                Project.objects.all(), many=True, context={'request': request}
            ).data,
            'education': EducationSerializer(Education.objects.all(), many=True).data,
            'experience': ExperienceSerializer(Experience.objects.all(), many=True).data,
            'awards': AwardSerializer(Award.objects.all(), many=True).data,
        }
        return Response(data)
