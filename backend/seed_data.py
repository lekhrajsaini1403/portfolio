"""
Management command to seed initial data for Lekhraj Saini's portfolio.
Run: python manage.py seed_data
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import (
    Profile, ResearchArea, Publication, Project,
    Education, Experience, Award
)


def seed():
    print("[*] Seeding portfolio data for Lekhraj Saini...")

    # Clear existing data
    Profile.objects.all().delete()
    ResearchArea.objects.all().delete()
    Publication.objects.all().delete()
    Project.objects.all().delete()
    Education.objects.all().delete()
    Experience.objects.all().delete()
    Award.objects.all().delete()

    # --- Profile ---
    profile = Profile.objects.create(
        name="Lekhraj Saini",
        title="Research Scientest | Radar Meteorology",
        institution="NESAC, DOS, GOI",
        department="Department of Computer Science & Engineering",
        bio="""ng at the intersection of Machine Learning, 
Artificial Intelligence, and Computational Biology. My research focuses on developing novel 
computational frameworks to solve complex biological problems using deep learning and statistical 
modeling techniques.

I believe in open science and collaborative research. My work aims to bridge the gap between 
theoretical machine learning advancements and their practical applications in life sciences 
and healthcare.""",
        short_bio="PhD Research Scholar specializing in Machine Learning & Computational Biology",
        email="lekhraj.saini@research.edu",
        phone="+91 98765 43210",
        location="Rajasthan, India",
        linkedin="https://linkedin.com/in/lekhrajsaini",
        google_scholar="https://scholar.google.com/citations?user=lekhrajsaini",
        researchgate="https://www.researchgate.net/profile/Lekhraj-Saini",
        github="https://github.com/lekhrajsaini",
        orcid="https://orcid.org/0000-0000-0000-0000",
    )
    print("  [OK] Profile created")

    # --- Research Areas ---
    areas = [
        ("Machine Learning", "Developing novel ML algorithms and deep learning models for complex data analysis", "🤖", 1),
        ("Computational Biology", "Applying computational methods to biological and genomic data", "🧬", 2),
        ("Natural Language Processing", "Text mining and NLP for biomedical literature and clinical data", "📝", 3),
        ("Bioinformatics", "Genomic data analysis, protein structure prediction, and drug discovery", "🔬", 4),
        ("Data Science", "Statistical analysis, data visualization, and big data analytics", "📊", 5),
        ("Deep Learning", "CNN, RNN, Transformer architectures for research applications", "🧠", 6),
    ]
    for name, desc, icon, order in areas:
        ResearchArea.objects.create(name=name, description=desc, icon=icon, order=order)
    print("  [OK] Research areas created")

    # --- Publications ---
    pubs = [
        {
            "title": "Deep Learning-Based Framework for Protein Secondary Structure Prediction Using Transformer Architecture",
            "authors": "Lekhraj Saini, Rajesh Kumar, Priya Sharma, Amit Verma",
            "publication_type": "journal",
            "journal_or_conference": "Bioinformatics (Oxford)",
            "year": 2024,
            "abstract": "We propose a novel transformer-based deep learning framework for accurate prediction of protein secondary structure from amino acid sequences. Our model achieves state-of-the-art performance on benchmark datasets.",
            "doi": "10.1093/bioinformatics/btad001",
            "is_featured": True,
            "citation_count": 23,
        },
        {
            "title": "Graph Neural Networks for Drug-Target Interaction Prediction",
            "authors": "Lekhraj Saini, Sunita Devi, Mohan Lal",
            "publication_type": "conference",
            "journal_or_conference": "International Conference on Machine Learning (ICML) 2024",
            "year": 2024,
            "abstract": "A graph neural network approach for predicting drug-target interactions using molecular graph representations and protein sequence embeddings.",
            "is_featured": True,
            "citation_count": 15,
        },
        {
            "title": "BERT-Based Clinical Text Mining for Adverse Drug Event Detection",
            "authors": "Lekhraj Saini, Kavita Sharma",
            "publication_type": "journal",
            "journal_or_conference": "Journal of Biomedical Informatics",
            "year": 2023,
            "abstract": "Fine-tuning BERT models for biomedical named entity recognition and adverse drug event detection from clinical notes.",
            "doi": "10.1016/j.jbi.2023.001",
            "is_featured": True,
            "citation_count": 41,
        },
        {
            "title": "Ensemble Methods for Gene Expression Cancer Classification",
            "authors": "Lekhraj Saini, Ramesh Yadav, Pooja Gupta",
            "publication_type": "journal",
            "journal_or_conference": "Computers in Biology and Medicine",
            "year": 2023,
            "abstract": "Comparative study of ensemble machine learning methods for multi-class cancer classification using microarray gene expression data.",
            "is_featured": False,
            "citation_count": 18,
        },
        {
            "title": "Attention Mechanism in Genomic Sequence Analysis",
            "authors": "Lekhraj Saini, Dr. Vijay Bhatt",
            "publication_type": "conference",
            "journal_or_conference": "IEEE International Conference on Bioinformatics and Biomedicine (BIBM) 2022",
            "year": 2022,
            "abstract": "Exploring self-attention mechanisms for identifying functional elements in DNA sequences.",
            "is_featured": False,
            "citation_count": 9,
        },
    ]
    for pub_data in pubs:
        Publication.objects.create(**pub_data)
    print(f"  [OK] {len(pubs)} Publications created")

    # --- Projects ---
    projects = [
        {
            "title": "AI-Powered Drug Discovery Platform",
            "description": "Developing an end-to-end machine learning pipeline for accelerating drug discovery by predicting drug-target interactions, ADMET properties, and molecular toxicity using graph neural networks and molecular fingerprints.",
            "short_description": "GNN-based drug-target interaction prediction system",
            "status": "ongoing",
            "funding_agency": "Department of Science & Technology (DST), India",
            "technologies": "Python, PyTorch, RDKit, DGL, Pandas, GraphSAGE",
            "is_featured": True,
            "order": 1,
        },
        {
            "title": "Biomedical NLP for Clinical Decision Support",
            "description": "Building a clinical NLP system that extracts medical entities, relationships, and events from unstructured clinical notes to support clinical decision-making and pharmacovigilance.",
            "short_description": "BERT-based clinical NLP pipeline for healthcare",
            "status": "ongoing",
            "technologies": "Python, HuggingFace Transformers, spaCy, BERT, FastAPI",
            "is_featured": True,
            "order": 2,
        },
        {
            "title": "Protein Structure Prediction using Deep Learning",
            "description": "Implementation and improvement of transformer-based architectures for end-to-end protein secondary and tertiary structure prediction from raw amino acid sequences.",
            "short_description": "Transformer model for protein structure prediction",
            "status": "completed",
            "technologies": "Python, PyTorch, AlphaFold, ESM, Jupyter",
            "is_featured": True,
            "order": 3,
        },
        {
            "title": "Cancer Gene Expression Analysis",
            "description": "Comparative analysis of gene expression profiles across different cancer types using machine learning classification and survival analysis.",
            "short_description": "ML-based cancer classification from gene expression",
            "status": "completed",
            "technologies": "Python, Scikit-learn, R, Bioconductor, TCGA",
            "is_featured": False,
            "order": 4,
        },
    ]
    for proj_data in projects:
        Project.objects.create(**proj_data)
    print(f"  [OK] {len(projects)} Projects created")

    # --- Education ---
    edu = [
        {
            "degree": "Doctor of Philosophy (PhD) in Computer Science",
            "institution": "Indian Institute of Technology Indore",
            "department": "Department of Computer Science & Engineering",
            "year_start": 2021,
            "year_end": None,
            "thesis_title": "Deep Learning Approaches for Computational Drug Discovery",
            "description": "Focusing on machine learning methods for bioinformatics and drug discovery",
            "order": 1,
        },
        {
            "degree": "Master of Technology (M.Tech) in Computer Science",
            "institution": "National Institute of Technology",
            "department": "Computer Science & Engineering",
            "year_start": 2018,
            "year_end": 2020,
            "cgpa_or_percentage": "8.9/10 CGPA",
            "thesis_title": "Ensemble Learning for Biomedical Text Classification",
            "order": 2,
        },
        {
            "degree": "Bachelor of Technology (B.Tech) in Computer Science",
            "institution": "Rajasthan Technical University",
            "department": "Computer Science & Engineering",
            "year_start": 2014,
            "year_end": 2018,
            "cgpa_or_percentage": "8.5/10 CGPA",
            "order": 3,
        },
    ]
    for edu_data in edu:
        Education.objects.create(**edu_data)
    print(f"  [OK] {len(edu)} Education records created")

    # --- Experience ---
    from datetime import date
    exps = [
        {
            "title": "Junior Research Fellow (JRF)",
            "organization": "Indian Institute of Technology Indore",
            "experience_type": "research",
            "start_date": date(2021, 8, 1),
            "is_current": True,
            "description": "Working on machine learning-based Drug discovery and computational biology. Developing deep learning models for protein structure prediction and drug-target interaction prediction.",
            "location": "India",
        },
        {
            "title": "Research Intern",
            "organization": "Centre for Cellular and Molecular Biology (CCMB)",
            "experience_type": "research",
            "start_date": date(2020, 6, 1),
            "end_date": date(2021, 5, 31),
            "is_current": False,
            "description": "Worked on bioinformatics pipelines for genomic data analysis and variant calling.",
            "location": "Hyderabad, India",
        },
        {
            "title": "Teaching Assistant",
            "organization": "NIT Rajasthan",
            "experience_type": "teaching",
            "start_date": date(2018, 8, 1),
            "end_date": date(2020, 5, 31),
            "is_current": False,
            "description": "Assisted in teaching Machine Learning, Data Structures and Algorithms courses.",
            "location": "Rajasthan, India",
        },
    ]
    for exp_data in exps:
        Experience.objects.create(**exp_data)
    print(f"  [OK] {len(exps)} Experience records created")

    # --- Awards ---
    awards = [
        {
            "title": "Best Paper Award",
            "organization": "IEEE BIBM International Conference",
            "year": 2022,
            "description": "Awarded for the paper on Attention Mechanisms in Genomic Sequence Analysis",
        },
        {
            "title": "CSIR-NET JRF Fellowship",
            "organization": "Council of Scientific & Industrial Research, India",
            "year": 2021,
            "description": "Qualified CSIR-NET JRF with a national ranking for research fellowship",
        },
        {
            "title": "DST INSPIRE Fellowship",
            "organization": "Department of Science & Technology, India",
            "year": 2020,
            "description": "Received INSPIRE scholarship for pursuing doctoral research",
        },
        {
            "title": "Gold Medal - M.Tech",
            "organization": "National Institute of Technology",
            "year": 2020,
            "description": "Awarded Gold Medal for academic excellence in M.Tech program",
        },
    ]
    for award_data in awards:
        Award.objects.create(**award_data)
    print(f"  [OK] {len(awards)} Awards created")

    print("\n[DONE] Seeding complete! Portfolio data is ready.")
    print(f"   Profile: {profile.name}")
    print(f"   Publications: {Publication.objects.count()}")
    print(f"   Projects: {Project.objects.count()}")


if __name__ == '__main__':
    seed()
