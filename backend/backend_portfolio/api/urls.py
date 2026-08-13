from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, ExperienceViewSet, ProjectViewSet, SkillViewSet, EducationViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'experiences', ExperienceViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'educations', EducationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
