import os
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model


class Command(BaseCommand):
    help = 'Creates a superuser if none exists (safe to run multiple times)'

    def handle(self, *args, **options):
        User = get_user_model()

        username = os.environ.get('DJANGO_SUPERUSER_USERNAME', 'apk')
        password = os.environ.get('DJANGO_SUPERUSER_PASSWORD', 'apk')
        email = os.environ.get('DJANGO_SUPERUSER_EMAIL', 'admin@portfolio.com')

        if User.objects.filter(username=username).exists():
            self.stdout.write(f'Superuser "{username}" already exists — skipping.')
            return

        User.objects.create_superuser(username=username, password=password, email=email)
        self.stdout.write(self.style.SUCCESS(f'Superuser "{username}" created successfully.'))
