from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=150)
    image = models.ImageField(upload_to='profile-images/', blank=True, null=True)
    title = models.CharField(max_length=200, blank=True)
    bio = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=40, blank=True)
    location = models.CharField(max_length=150, blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    website = models.URLField(blank=True)

    def __str__(self):
        return self.name


class Experience(models.Model):
    profile = models.ForeignKey(Profile, related_name='experiences', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    exp_type = models.CharField(max_length=50, blank=True)
    start_date = models.CharField(max_length=50, blank=True)
    end_date = models.CharField(max_length=50, blank=True)
    is_current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} @ {self.organization}"


class Project(models.Model):
    profile = models.ForeignKey(Profile, related_name='projects', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    url = models.URLField(blank=True)
    technologies = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.title


class Skill(models.Model):
    profile = models.ForeignKey(Profile, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    level = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class Education(models.Model):
    profile = models.ForeignKey(Profile, related_name='educations', on_delete=models.CASCADE)

    # ── Primary School ────────────────────────────────
    primary_school_name = models.CharField(max_length=200, blank=True)
    primary_start_year  = models.CharField(max_length=10,  blank=True)
    primary_end_year    = models.CharField(max_length=10,  blank=True)

    # ── Secondary School (O-Level / Form 1-4) ─────────
    secondary_school_name = models.CharField(max_length=200, blank=True)
    secondary_start_year  = models.CharField(max_length=10,  blank=True)
    secondary_end_year    = models.CharField(max_length=10,  blank=True)

    # ── Advanced Secondary (A-Level / Form 5-6) ───────
    advanced_secondary_school_name = models.CharField(max_length=200, blank=True)
    advanced_secondary_start_year  = models.CharField(max_length=10,  blank=True)
    advanced_secondary_end_year    = models.CharField(max_length=10,  blank=True)

    # ── University / College ──────────────────────────
    university_name       = models.CharField(max_length=200, blank=True)
    university_degree     = models.CharField(max_length=200, blank=True)
    university_field      = models.CharField(max_length=200, blank=True)
    university_start_year = models.CharField(max_length=10,  blank=True)
    university_end_year   = models.CharField(max_length=10,  blank=True)
    university_is_current = models.BooleanField(default=False)

    def __str__(self):
        return f"Education of {self.profile.name}"


class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=250, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.subject or 'No Subject'}"
