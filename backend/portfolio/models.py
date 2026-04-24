from django.db import models


class Profile(models.Model):
    """Main researcher profile"""
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=300)  # e.g. "PhD Researcher | ML & AI"
    institution = models.CharField(max_length=300)
    department = models.CharField(max_length=300, blank=True)
    bio = models.TextField()
    short_bio = models.CharField(max_length=500, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    location = models.CharField(max_length=200, blank=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    # Social Links
    linkedin = models.URLField(blank=True)
    google_scholar = models.URLField(blank=True)
    researchgate = models.URLField(blank=True)
    github = models.URLField(blank=True)
    orcid = models.URLField(blank=True)
    cv_file = models.FileField(upload_to='cv/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Profile"


class ResearchArea(models.Model):
    """Areas of research expertise"""
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, blank=True)  # Font Awesome icon name
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order', 'name']


class Publication(models.Model):
    """Research publications / papers"""
    PUBLICATION_TYPES = [
        ('journal', 'Journal Article'),
        ('conference', 'Conference Paper'),
        ('book_chapter', 'Book Chapter'),
        ('thesis', 'Thesis'),
        ('preprint', 'Preprint'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=500)
    authors = models.CharField(max_length=1000)  # Comma-separated authors
    publication_type = models.CharField(max_length=20, choices=PUBLICATION_TYPES, default='journal')
    journal_or_conference = models.CharField(max_length=300, blank=True)
    year = models.IntegerField()
    volume = models.CharField(max_length=50, blank=True)
    issue = models.CharField(max_length=50, blank=True)
    pages = models.CharField(max_length=50, blank=True)
    doi = models.CharField(max_length=200, blank=True)
    abstract = models.TextField(blank=True)
    pdf_link = models.URLField(blank=True)
    external_link = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    citation_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.year})"

    class Meta:
        ordering = ['-year', '-is_featured']


class Project(models.Model):
    """Research projects"""
    STATUS_CHOICES = [
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
        ('upcoming', 'Upcoming'),
    ]

    title = models.CharField(max_length=300)
    description = models.TextField()
    short_description = models.CharField(max_length=300, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='ongoing')
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    funding_agency = models.CharField(max_length=200, blank=True)
    technologies = models.CharField(max_length=500, blank=True)  # comma-separated
    project_link = models.URLField(blank=True)
    github_link = models.URLField(blank=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order', '-start_date']


class Education(models.Model):
    """Academic education history"""
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=300)
    department = models.CharField(max_length=300, blank=True)
    year_start = models.IntegerField()
    year_end = models.IntegerField(blank=True, null=True)  # None if ongoing
    cgpa_or_percentage = models.CharField(max_length=50, blank=True)
    thesis_title = models.CharField(max_length=500, blank=True)
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.degree} - {self.institution}"

    class Meta:
        ordering = ['-year_start']


class Experience(models.Model):
    """Professional / Research experience"""
    EXPERIENCE_TYPES = [
        ('research', 'Research'),
        ('teaching', 'Teaching'),
        ('industry', 'Industry'),
        ('internship', 'Internship'),
    ]

    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=300)
    experience_type = models.CharField(max_length=20, choices=EXPERIENCE_TYPES, default='research')
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)  # None if current
    is_current = models.BooleanField(default=False)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"{self.title} at {self.organization}"

    class Meta:
        ordering = ['-start_date']


class Award(models.Model):
    """Awards, honors, and achievements"""
    title = models.CharField(max_length=300)
    organization = models.CharField(max_length=300)
    year = models.IntegerField()
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} ({self.year})"

    class Meta:
        ordering = ['-year']


class ContactMessage(models.Model):
    """Contact form submissions"""
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=300)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.subject}"

    class Meta:
        ordering = ['-created_at']
