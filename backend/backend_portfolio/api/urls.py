from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, ExperienceViewSet, ProjectViewSet, SkillViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'experiences', ExperienceViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
