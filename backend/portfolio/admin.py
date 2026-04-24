from django.contrib import admin
from .models import (
    Profile, ResearchArea, Publication, Project,
    Education, Experience, Award, ContactMessage
)


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'institution', 'email']
    fieldsets = (
        ('Basic Info', {'fields': ('name', 'title', 'institution', 'department', 'bio', 'short_bio', 'profile_image', 'cv_file')}),
        ('Contact', {'fields': ('email', 'phone', 'location')}),
        ('Social Links', {'fields': ('linkedin', 'google_scholar', 'researchgate', 'github', 'orcid')}),
    )


@admin.register(ResearchArea)
class ResearchAreaAdmin(admin.ModelAdmin):
    list_display = ['name', 'order']
    ordering = ['order']


@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ['title', 'publication_type', 'year', 'is_featured', 'citation_count']
    list_filter = ['publication_type', 'year', 'is_featured']
    search_fields = ['title', 'authors', 'journal_or_conference']
    list_editable = ['is_featured']
    ordering = ['-year']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'start_date', 'is_featured', 'order']
    list_filter = ['status', 'is_featured']
    search_fields = ['title', 'description']
    list_editable = ['is_featured', 'order']


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'institution', 'year_start', 'year_end']
    ordering = ['-year_start']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['title', 'organization', 'experience_type', 'start_date', 'is_current']
    list_filter = ['experience_type', 'is_current']


@admin.register(Award)
class AwardAdmin(admin.ModelAdmin):
    list_display = ['title', 'organization', 'year']
    ordering = ['-year']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read']
    readonly_fields = ['name', 'email', 'subject', 'message', 'created_at']
    list_editable = ['is_read']
