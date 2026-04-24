// ─────────────────────────────────────────────────────────
//  LEKHRAJ SAINI — PORTFOLIO STATIC DATA
//  Edit this file to update anything on the website.
//  No database, no API calls needed for display.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Lekhraj Saini",
  title: "PhD Research Scholar | Machine Learning & Computational Biology",
  institution: "Indian Institute of Technology Indore",
  department: "Department of Computer Science & Engineering",
  location: "Indore, Madhya Pradesh, India",
  email: "lekhraj.saini@iiti.ac.in",
  phone: "+91 98765 43210",
  bio: `I am a passionate research scholar working at the intersection of Machine Learning, 
Artificial Intelligence, and Computational Biology. My research focuses on developing novel 
computational frameworks to solve complex biological problems using deep learning and statistical 
modeling techniques.

I believe in open science and collaborative research. My work aims to bridge the gap between 
theoretical machine learning advancements and their practical applications in life sciences 
and healthcare.`,
  shortBio: "PhD Research Scholar specializing in Machine Learning & Computational Biology at IIT Indore.",
  linkedin: "https://linkedin.com/in/lekhrajsaini",
  googleScholar: "https://scholar.google.com/citations?user=lekhrajsaini",
  researchgate: "https://www.researchgate.net/profile/Lekhraj-Saini",
  github: "https://github.com/lekhrajsaini",
  orcid: "https://orcid.org/0000-0000-0000-0000",
  cv: "", // add a link to your CV PDF here
};

export const stats = [
  { number: "5+", label: "Publications" },
  { number: "4+", label: "Projects" },
  { number: "86+", label: "Citations" },
  { number: "4+", label: "Awards" },
];

export const skills = [
  "Python", "PyTorch", "TensorFlow", "Scikit-learn",
  "R", "Bioconductor", "Deep Learning", "NLP",
  "Graph Neural Networks", "BERT", "HuggingFace",
  "SQL", "Docker", "Git", "LaTeX",
];

export const researchAreas = [
  {
    id: 1,
    icon: "🤖",
    name: "Machine Learning",
    description: "Developing novel ML algorithms and deep learning models for complex data analysis",
  },
  {
    id: 2,
    icon: "🧬",
    name: "Computational Biology",
    description: "Applying computational methods to biological and genomic data",
  },
  {
    id: 3,
    icon: "📝",
    name: "Natural Language Processing",
    description: "Text mining and NLP for biomedical literature and clinical data",
  },
  {
    id: 4,
    icon: "🔬",
    name: "Bioinformatics",
    description: "Genomic data analysis, protein structure prediction, and drug discovery",
  },
  {
    id: 5,
    icon: "📊",
    name: "Data Science",
    description: "Statistical analysis, data visualization, and big data analytics",
  },
  {
    id: 6,
    icon: "🧠",
    name: "Deep Learning",
    description: "CNN, RNN, Transformer architectures for research applications",
  },
];

export const publications = [
  {
    id: 1,
    title: "Deep Learning-Based Framework for Protein Secondary Structure Prediction Using Transformer Architecture",
    authors: "Lekhraj Saini, Rajesh Kumar, Priya Sharma, Amit Verma",
    type: "journal",
    typeLabel: "Journal Article",
    venue: "Bioinformatics (Oxford)",
    year: 2024,
    doi: "10.1093/bioinformatics/btad001",
    abstract: "We propose a novel transformer-based deep learning framework for accurate prediction of protein secondary structure from amino acid sequences. Our model achieves state-of-the-art performance on benchmark datasets.",
    link: "",
    pdfLink: "",
    featured: true,
    citations: 23,
  },
  {
    id: 2,
    title: "Graph Neural Networks for Drug-Target Interaction Prediction",
    authors: "Lekhraj Saini, Sunita Devi, Mohan Lal",
    type: "conference",
    typeLabel: "Conference Paper",
    venue: "International Conference on Machine Learning (ICML) 2024",
    year: 2024,
    doi: "",
    abstract: "A graph neural network approach for predicting drug-target interactions using molecular graph representations and protein sequence embeddings.",
    link: "",
    pdfLink: "",
    featured: true,
    citations: 15,
  },
  {
    id: 3,
    title: "BERT-Based Clinical Text Mining for Adverse Drug Event Detection",
    authors: "Lekhraj Saini, Kavita Sharma",
    type: "journal",
    typeLabel: "Journal Article",
    venue: "Journal of Biomedical Informatics",
    year: 2023,
    doi: "10.1016/j.jbi.2023.001",
    abstract: "Fine-tuning BERT models for biomedical named entity recognition and adverse drug event detection from clinical notes.",
    link: "",
    pdfLink: "",
    featured: true,
    citations: 41,
  },
  {
    id: 4,
    title: "Ensemble Methods for Gene Expression Cancer Classification",
    authors: "Lekhraj Saini, Ramesh Yadav, Pooja Gupta",
    type: "journal",
    typeLabel: "Journal Article",
    venue: "Computers in Biology and Medicine",
    year: 2023,
    doi: "",
    abstract: "Comparative study of ensemble machine learning methods for multi-class cancer classification using microarray gene expression data.",
    link: "",
    pdfLink: "",
    featured: false,
    citations: 18,
  },
  {
    id: 5,
    title: "Attention Mechanism in Genomic Sequence Analysis",
    authors: "Lekhraj Saini, Dr. Vijay Bhatt",
    type: "conference",
    typeLabel: "Conference Paper",
    venue: "IEEE International Conference on Bioinformatics and Biomedicine (BIBM) 2022",
    year: 2022,
    doi: "",
    abstract: "Exploring self-attention mechanisms for identifying functional elements in DNA sequences.",
    link: "",
    pdfLink: "",
    featured: false,
    citations: 9,
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Drug Discovery Platform",
    description: "Developing an end-to-end machine learning pipeline for accelerating drug discovery by predicting drug-target interactions, ADMET properties, and molecular toxicity using graph neural networks and molecular fingerprints.",
    shortDescription: "GNN-based drug-target interaction prediction system",
    status: "ongoing",
    statusLabel: "Ongoing",
    funding: "Department of Science & Technology (DST), India",
    technologies: ["Python", "PyTorch", "RDKit", "DGL", "GraphSAGE"],
    link: "",
    github: "",
    featured: true,
  },
  {
    id: 2,
    title: "Biomedical NLP for Clinical Decision Support",
    description: "Building a clinical NLP system that extracts medical entities, relationships, and events from unstructured clinical notes to support clinical decision-making and pharmacovigilance.",
    shortDescription: "BERT-based clinical NLP pipeline for healthcare",
    status: "ongoing",
    statusLabel: "Ongoing",
    funding: "",
    technologies: ["Python", "HuggingFace", "spaCy", "BERT", "FastAPI"],
    link: "",
    github: "",
    featured: true,
  },
  {
    id: 3,
    title: "Protein Structure Prediction using Deep Learning",
    description: "Implementation and improvement of transformer-based architectures for end-to-end protein secondary and tertiary structure prediction from raw amino acid sequences.",
    shortDescription: "Transformer model for protein structure prediction",
    status: "completed",
    statusLabel: "Completed",
    funding: "",
    technologies: ["Python", "PyTorch", "AlphaFold", "ESM", "Jupyter"],
    link: "",
    github: "",
    featured: true,
  },
  {
    id: 4,
    title: "Cancer Gene Expression Analysis",
    description: "Comparative analysis of gene expression profiles across different cancer types using machine learning classification and survival analysis.",
    shortDescription: "ML-based cancer classification from gene expression data",
    status: "completed",
    statusLabel: "Completed",
    funding: "",
    technologies: ["Python", "Scikit-learn", "R", "Bioconductor", "TCGA"],
    link: "",
    github: "",
    featured: false,
  },
];

export const education = [
  {
    id: 1,
    degree: "Doctor of Philosophy (PhD) in Computer Science",
    institution: "Indian Institute of Technology Indore",
    department: "Department of Computer Science & Engineering",
    yearStart: 2021,
    yearEnd: null, // null = Present
    grade: "",
    thesis: "Deep Learning Approaches for Computational Drug Discovery",
    description: "Focusing on machine learning methods for bioinformatics and drug discovery",
  },
  {
    id: 2,
    degree: "Master of Technology (M.Tech) in Computer Science",
    institution: "National Institute of Technology Rajasthan",
    department: "Computer Science & Engineering",
    yearStart: 2018,
    yearEnd: 2020,
    grade: "8.9/10 CGPA",
    thesis: "Ensemble Learning for Biomedical Text Classification",
    description: "",
  },
  {
    id: 3,
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Rajasthan Technical University",
    department: "Computer Science & Engineering",
    yearStart: 2014,
    yearEnd: 2018,
    grade: "8.5/10 CGPA",
    thesis: "",
    description: "",
  },
];

export const experience = [
  {
    id: 1,
    title: "Junior Research Fellow (JRF)",
    organization: "Indian Institute of Technology Indore",
    type: "Research",
    startDate: "Aug 2021",
    endDate: null, // null = Present
    isCurrent: true,
    location: "Indore, India",
    description: "Working on machine learning-based drug discovery and computational biology. Developing deep learning models for protein structure prediction and drug-target interaction prediction.",
  },
  {
    id: 2,
    title: "Research Intern",
    organization: "Centre for Cellular and Molecular Biology (CCMB)",
    type: "Research",
    startDate: "Jun 2020",
    endDate: "May 2021",
    isCurrent: false,
    location: "Hyderabad, India",
    description: "Worked on bioinformatics pipelines for genomic data analysis and variant calling.",
  },
  {
    id: 3,
    title: "Teaching Assistant",
    organization: "NIT Rajasthan",
    type: "Teaching",
    startDate: "Aug 2018",
    endDate: "May 2020",
    isCurrent: false,
    location: "Rajasthan, India",
    description: "Assisted in teaching Machine Learning, Data Structures and Algorithms courses.",
  },
];

export const awards = [
  {
    id: 1,
    title: "Best Paper Award",
    organization: "IEEE BIBM International Conference",
    year: 2022,
    description: "Awarded for the paper on Attention Mechanisms in Genomic Sequence Analysis.",
  },
  {
    id: 2,
    title: "CSIR-NET JRF Fellowship",
    organization: "Council of Scientific & Industrial Research, India",
    year: 2021,
    description: "Qualified CSIR-NET JRF with a national ranking for research fellowship.",
  },
  {
    id: 3,
    title: "DST INSPIRE Fellowship",
    organization: "Department of Science & Technology, India",
    year: 2020,
    description: "Received INSPIRE scholarship for pursuing doctoral research.",
  },
  {
    id: 4,
    title: "Gold Medal — M.Tech",
    organization: "National Institute of Technology Rajasthan",
    year: 2020,
    description: "Awarded Gold Medal for academic excellence in the M.Tech program.",
  },
];
