from rest_framework import serializers
from .models import (
    Profile, ResearchArea, Publication, Project,
    Education, Experience, Award, ContactMessage
)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class ResearchAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchArea
        fields = '__all__'


class PublicationSerializer(serializers.ModelSerializer):
    publication_type_display = serializers.CharField(
        source='get_publication_type_display', read_only=True
    )

    class Meta:
        model = Publication
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    status_display = serializers.CharField(
        source='get_status_display', read_only=True
    )
    technologies_list = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'

    def get_technologies_list(self, obj):
        if obj.technologies:
            return [t.strip() for t in obj.technologies.split(',')]
        return []


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    experience_type_display = serializers.CharField(
        source='get_experience_type_display', read_only=True
    )

    class Meta:
        model = Experience
        fields = '__all__'


class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = '__all__'


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
