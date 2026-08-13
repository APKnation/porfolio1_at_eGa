from rest_framework import serializers
from .models import Profile, Experience, Project, Skill, Education


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'profile', 'title', 'organization', 'description', 'exp_type', 'start_date', 'end_date', 'is_current']
        extra_kwargs = {'profile': {'write_only': True}}


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'profile', 'title', 'description', 'url', 'technologies']
        extra_kwargs = {'profile': {'write_only': True}}


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'profile', 'name', 'level']
        extra_kwargs = {'profile': {'write_only': True}}


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = [
            'id', 'profile',
            # Primary
            'primary_school_name', 'primary_start_year', 'primary_end_year',
            # Secondary
            'secondary_school_name', 'secondary_start_year', 'secondary_end_year',
            # Advanced Secondary
            'advanced_secondary_school_name', 'advanced_secondary_start_year', 'advanced_secondary_end_year',
            # University
            'university_name', 'university_degree', 'university_field',
            'university_start_year', 'university_end_year', 'university_is_current',
        ]
        extra_kwargs = {'profile': {'write_only': True}}


class ProfileSerializer(serializers.ModelSerializer):
    experiences = ExperienceSerializer(many=True, read_only=True)
    projects = ProjectSerializer(many=True, read_only=True)
    skills = SkillSerializer(many=True, read_only=True)
    educations = EducationSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['id', 'name', 'image', 'title', 'bio', 'email', 'phone', 'location', 'linkedin', 'github', 'website', 'experiences', 'projects', 'skills', 'educations']
