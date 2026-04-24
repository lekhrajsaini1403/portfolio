from django.urls import path
from . import views

urlpatterns = [
    # Portfolio summary (all data in one shot)
    path('portfolio/', views.PortfolioSummaryView.as_view(), name='portfolio-summary'),
    # Profile
    path('profile/', views.ProfileView.as_view(), name='profile'),
    # Research Areas
    path('research-areas/', views.ResearchAreaListView.as_view(), name='research-areas'),
    # Publications
    path('publications/', views.PublicationListView.as_view(), name='publications'),
    path('publications/<int:pk>/', views.PublicationDetailView.as_view(), name='publication-detail'),
    # Projects
    path('projects/', views.ProjectListView.as_view(), name='projects'),
    path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
    # Education
    path('education/', views.EducationListView.as_view(), name='education'),
    # Experience
    path('experience/', views.ExperienceListView.as_view(), name='experience'),
    # Awards
    path('awards/', views.AwardListView.as_view(), name='awards'),
    # Contact
    path('contact/', views.ContactCreateView.as_view(), name='contact'),
]
