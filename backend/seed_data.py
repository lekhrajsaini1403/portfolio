import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import (
    Profile, ResearchArea, Publication, Project,
    Education, Experience, Award
)

def seed():
    Profile.objects.all().delete()
    ResearchArea.objects.all().delete()
    Publication.objects.all().delete()
    Project.objects.all().delete()
    Education.objects.all().delete()
    Experience.objects.all().delete()
    Award.objects.all().delete()

    profile = Profile.objects.create(
        name="Lekhraj Saini",
        title="PhD Scholar | Atmospheric Science & Polar Meteorology",
        institution="Indian Institute of Technology Indore",
        department="Astronomy, Astrophysics and Space Engineering",
        bio="""Researcher specializing in polar meteorology, Arctic precipitation, and atmospheric microphysics. Experienced in operating atmospheric instruments and analyzing large-scale observational datasets from polar and tropical environments. Field experience at Himadri Arctic Research Station, Svalbard (2024). Skilled in Python, MATLAB, and scientific data processing.""",
        short_bio="PhD Scholar working on Arctic precipitation and atmospheric science",
        email="lekhrajsaini1403@gmail.com",
        phone="+91 8955950049",
        location="India",
        linkedin="",
        google_scholar="",
        researchgate="",
        github="",
        orcid="",
    )

    areas = [
        ("Atmospheric Science", "Study of atmospheric processes and precipitation systems", "🌦️", 1),
        ("Polar Meteorology", "Research on Arctic weather and precipitation dynamics", "❄️", 2),
        ("Remote Sensing", "Satellite and ground-based atmospheric observations", "🛰️", 3),
        ("Data Analysis", "Scientific data processing and visualization", "📊", 4),
        ("Instrumentation", "Handling meteorological instruments and sensors", "🔧", 5),
    ]
    for name, desc, icon, order in areas:
        ResearchArea.objects.create(name=name, description=desc, icon=icon, order=order)

    pubs = [
        {
            "title": "Case studies of different types of precipitation at Ny-Ålesund, Arctic",
            "authors": "Saini, L., Das, S., Murukesh, N.",
            "publication_type": "journal",
            "journal_or_conference": "Scientific Reports",
            "year": 2025,
            "doi": "10.1038/s41598-025-85833-2",
            "is_featured": True,
        },
        {
            "title": "Vertical evolution of precipitation at Ny-Ålesund",
            "authors": "Saini, L., Das, S., Murukesh, N.",
            "publication_type": "journal",
            "journal_or_conference": "Atmospheric Research",
            "year": 2025,
            "is_featured": True,
        },
        {
            "title": "Micro Rain Radar based Virga Detection Algorithm",
            "authors": "Saini, L., Das, S., Murukesh, N.",
            "publication_type": "conference",
            "journal_or_conference": "IGARSS 2025",
            "year": 2025,
            "is_featured": False,
        },
    ]
    for pub_data in pubs:
        Publication.objects.create(**pub_data)

    projects = [
        {
            "title": "Arctic Precipitation Microphysics Study",
            "description": "Analysis of precipitation processes using ground-based instruments and radar data in Arctic conditions.",
            "short_description": "Arctic precipitation analysis",
            "status": "ongoing",
            "technologies": "Python, MATLAB, NetCDF",
            "is_featured": True,
            "order": 1,
        },
        {
            "title": "Virga Detection Algorithm",
            "description": "Developed a Micro Rain Radar-based algorithm for detecting virga and precipitation events.",
            "short_description": "Radar-based virga detection",
            "status": "completed",
            "technologies": "Python, MATLAB",
            "is_featured": True,
            "order": 2,
        },
    ]
    for proj_data in projects:
        Project.objects.create(**proj_data)

    edu = [
        {
            "degree": "PhD in Astronomy, Astrophysics and Space Engineering",
            "institution": "Indian Institute of Technology Indore",
            "year_start": 2021,
            "year_end": 2026,
            "cgpa_or_percentage": "8.25 CGPA",
            "order": 1,
        },
        {
            "degree": "M.Sc. Physics",
            "institution": "University of Delhi",
            "year_start": 2019,
            "year_end": 2021,
            "cgpa_or_percentage": "6.9 CGPA",
            "order": 2,
        },
        {
            "degree": "B.Sc. Mathematical Sciences",
            "institution": "University of Rajasthan",
            "year_start": 2016,
            "year_end": 2019,
            "cgpa_or_percentage": "65.11%",
            "order": 3,
        },
    ]
    for edu_data in edu:
        Education.objects.create(**edu_data)

    from datetime import date

    exps = [
        {
            "title": "Doctoral Researcher (CSIR Fellow)",
            "organization": "IIT Indore",
            "experience_type": "research",
            "start_date": date(2021, 1, 1),
            "is_current": True,
            "description": "Working on Arctic precipitation microphysics and atmospheric data analysis.",
            "location": "India",
        },
        {
            "title": "Teaching Assistant",
            "organization": "IIT Indore",
            "experience_type": "teaching",
            "start_date": date(2022, 1, 1),
            "is_current": True,
            "description": "Assisting courses in remote sensing and GNSS.",
            "location": "India",
        },
        {
            "title": "Online Educator",
            "organization": "Chegg / CourseHero / Bartleby",
            "experience_type": "teaching",
            "start_date": date(2020, 1, 1),
            "end_date": date(2023, 1, 1),
            "is_current": False,
            "description": "Provided solutions and teaching in geoscience and physics.",
            "location": "Remote",
        },
    ]
    for exp_data in exps:
        Experience.objects.create(**exp_data)

    awards = [
        {
            "title": "IEEE GRSS Student Grand Challenge Winner",
            "organization": "IEEE",
            "year": 2025,
        },
        {
            "title": "International Travel Grant (IGARSS)",
            "organization": "IEEE GRSS",
            "year": 2025,
        },
        {
            "title": "Bharatiya Antariksh Hackathon Winner",
            "organization": "ISRO",
            "year": 2024,
        },
        {
            "title": "CSIR-NET JRF",
            "organization": "CSIR India",
            "year": 2019,
        },
    ]
    for award_data in awards:
        Award.objects.create(**award_data)

if __name__ == '__main__':
    seed()