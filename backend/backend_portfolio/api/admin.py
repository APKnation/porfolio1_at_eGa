from django.contrib import admin
from .models import Profile, Experience, Project, Skill


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'email', 'phone')
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
