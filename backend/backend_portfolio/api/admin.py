from django.contrib import admin
from .models import Profile, Experience, Project, Skill, Education, ContactMessage


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email', 'phone', 'image')
    search_fields = ('name', 'email', 'title')


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'organization', 'profile', 'start_date', 'end_date', 'is_current')
    list_filter = ('is_current', 'exp_type')
    search_fields = ('title', 'organization', 'description')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'profile', 'url')
    search_fields = ('title', 'description', 'technologies')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'profile', 'level')
    search_fields = ('name', 'level')


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('profile', 'primary_school_name', 'secondary_school_name', 'advanced_secondary_school_name', 'university_name')
    search_fields = ('primary_school_name', 'secondary_school_name', 'advanced_secondary_school_name', 'university_name')
    fieldsets = (
        ('Profile', {'fields': ('profile',)}),
        ('Primary School', {'fields': ('primary_school_name', 'primary_start_year', 'primary_end_year')}),
        ('Secondary School (O-Level)', {'fields': ('secondary_school_name', 'secondary_start_year', 'secondary_end_year')}),
        ('Advanced Secondary (A-Level)', {'fields': ('advanced_secondary_school_name', 'advanced_secondary_start_year', 'advanced_secondary_end_year')}),
        ('University / College', {'fields': ('university_name', 'university_degree', 'university_field', 'university_start_year', 'university_end_year', 'university_is_current')}),
    )


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    readonly_fields = ('created_at',)
    list_filter = ('created_at',)
