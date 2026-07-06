export const site = {
  title: 'Sukriti Tiwari — Research Portfolio',
  brand: 'Sukriti Tiwari',
  navLabel: 'Primary navigation',
  nav: [
    { label: 'Research', href: '#research' },
    { label: 'Publications', href: '#publications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Sukriti Tiwari',
    lede: 'Trying to figure out how brains work and whether AI can read them.',
    visualLabel: 'Abstract research network connecting geospatial AI, generative AI, and machine learning',
    ambientLabel: 'Decorative floating research particles',
    portraitAlt: 'Sukriti Tiwari',
    portraitSrc: `${import.meta.env.BASE_URL}sukriti-linkedin-portrait.png`,
  },
  footer: '© 2026 Sukriti Tiwari',
}

export const publications = [
  { title: 'OMNI: Optimized Multiview Network Integration with Heterogeneous Graph Attention', description: 'Scalable multi-view heterogeneous graph attention framework for large-scale biomedical interaction prediction. AUROC 0.91 on chemical–gene interaction tasks.', status: 'Published', venue: 'ACS JCIM · Jun 2026', link: 'https://doi.org/10.1021/acs.jcim.6c00441', linkLabel: 'DOI ↗' },
  { title: 'Lost in Visual Translation: VLM-Assisted EEG-to-Image Evaluation', description: 'BCI-aware perceptual–semantic coherence framework for EEG-to-image reconstruction evaluation using VLM-routed annotations and human validation across 6,885 image pairs from ATM, ENIGMA, BrainVis, and DreamDiffusion.', status: 'Accepted', venue: 'IJCAI-ECAI 2026 HBAI' },
  { title: 'Evolutionary Fitness Shaping for Safe Clinical Text Generation', description: 'Evolutionary algorithms applied to safe clinical text generation with large language models.', status: 'Accepted', venue: 'IEEE WCCI 2026 · CEC SS03' },
  { title: 'Multi-View Contrastive and Semantically-Aligned EEG Emotion Recognition', description: 'TAMA — a topology- and asymmetry-aware adapter for subject-independent EEG emotion recognition using focal classification, NT-Xent contrastive learning, and BERT-based semantic alignment.', status: 'Accepted', venue: 'IEEE ICETCI 2026' },
  { title: 'Generative AI for Non-Invasive Brain Decoding', description: 'Survey of generative AI approaches, challenges, and future directions for non-invasive brain decoding across EEG, fMRI, MEG, and hybrid systems.', status: 'Accepted', venue: 'IEEE ICETCI 2026' },
]

export const research = {
  supervision: {
    prefix: 'I am a JRF at Mahindra University, and I work under the supervision of',
    name: 'Dr. Nidhi Goyal',
    suffix: 'Assistant Professor in the Department of CSE at École Centrale School of Engineering, Mahindra University.',
    href: 'https://www.linkedin.com/in/nidhigoyalgoyal/',
  },
  intro: [
    'I work at the intersection of non-invasive brain decoding and generative AI, with a focus on understanding what EEG-to-image systems preserve, distort, or lose when brain activity is translated into visual content.',
    'My research also spans BCI and cross-modality, biomedical graph learning, NLP, and GeoAI. Previously, I worked with the Lab for Spatial Informatics at IIIT Hyderabad on remote sensing and geospatial machine learning.',
  ],
  focusTitle: 'Research focus',
  focus: [
    { title: 'Brain decoding evaluation', description: 'Perceptual-semantic evaluation of EEG-to-image reconstruction using VLM-routed annotations and human validation.' },
    { title: 'EEG representation learning', description: 'Topology-, asymmetry-, contrastive-, and language-aligned methods for subject-independent emotion recognition.' },
    { title: 'Generative and biomedical AI', description: 'Safe clinical generation, heterogeneous biomedical graphs, and reproducible evaluation workflows.' },
    { title: 'GeoAI and remote sensing', description: 'Terrace detection, hyperspectral preprocessing, and multi-temporal satellite-image segmentation.' },
  ],
  serviceTitle: 'Reviewing & service',
  service: ['IEEE ICETCI 2026', 'CIKM 2026', 'ICIP 2026', 'IEEE WCCI 2026 / IJCNN'],
  talksTitle: 'Talks & outreach',
  talks: [
    { title: 'Generative AI and NLP sessions', venue: 'Osmania University' },
    { title: 'PM SHRI Schools session', venue: 'ACE Engineering College' },
  ],
  openWorkTitle: 'Open work',
  openWork: [
    { label: 'Agricultural terrace mapping using ML', href: 'https://github.com/Sukt03/Agricultural-terrace-mapping-using-ML' },
    { label: 'Lab for Spatial Informatics · IIIT Hyderabad', href: 'https://lsi.iiit.ac.in/' },
  ],
}

export const experience = [
  { when: 'Nov 2024 — Sept 2025', title: 'Research Intern, Lab for Spatial Informatics, IIIT Hyderabad', description: 'Automated terrace-detection pipeline in Google Earth Engine and Python for geomorphological analysis in the Western Himalayas. Hyperspectral preprocessing (PCA, radiometric/geometric/atmospheric correction). Multi-temporal Sentinel-2 lake-encroachment mapping over Hyderabad using deep-learning segmentation.' },
  { when: 'Aug 2024 — Aug 2025', title: 'Machine Learning Engineer, Magnocode Tech Pvt. Ltd.', description: 'Automated data pipelines for large-scale web crawling and domain-specific dataset preprocessing. Dataset preparation for LLM fine-tuning and inference on Runpod GPU infrastructure. Contributed to a patent-filed AI prediction system.' },
  { when: 'Jan 2024 — Aug 2024', title: 'Machine Learning Engineer Trainee, Magnocode Tech Pvt. Ltd.', description: 'Data collection, cleaning, and schema validation for downstream model development. Git-based version control and testing of end-to-end ML pipelines.' },
]

export const education = [
  { mark: 'KMIT', school: 'Keshav Memorial Institute of Technology', qualification: 'B.Tech in Computer Science', when: 'June 2024', detail: 'GPA: 7.01' },
  { mark: 'FIITJEE', school: 'FIITJEE Junior College', qualification: 'Mathematics, Physics and Chemistry', when: 'June 2020', detail: 'GPA: 8.3/10' },
]

export const achievements = [
  { year: '2023 — 2024', title: 'Student Council, KMIT', detail: 'Head of Organizing Committee and member; led cultural and technical events with 4,000+ attendees.' },
  { year: '2024', title: 'Smart India Hackathon Runner-Up', detail: 'Internal KMIT competition — cyclone-eye detection using deep learning.' },
  { year: '2020', title: 'Vachan Speakers Club', detail: 'Core member and mentor for public speaking, stage presence, and speaker development.' },
  { year: '2018', title: 'CBSE Computer Science Centum', detail: 'Scored 100/100 in the Class X board examination.' },
  { year: '2020', title: 'Creative Lead, KMIT', detail: 'Created branding, posters, logos, and promotional media for college events.' },
  { year: '2024', title: 'Class Representative, KMIT', detail: 'Coordinated academic communication and feedback for 80+ students.' },
]

export const projects = [
  { title: 'CLIP-based reverse image search', description: 'Multimodal caption generation and reverse image search via visual-semantic similarity, with FAISS-based retrieval.', stack: 'Python · PyTorch · CLIP · FAISS', href: 'https://github.com/Sukt03/CLIP-reverse-image-search', linkLabel: 'Code ↗' },
  { title: 'AutoGNN — neural architecture search on GNNs', description: 'Automated NAS over GCN, GAT, GraphSAGE, GIN for node classification on Cora, CiteSeer, PubMed.', stack: 'PyTorch Geometric · scikit-learn', href: 'https://github.com/Sukt03/AutoGNN', linkLabel: 'Code ↗' },
  { title: 'SHAP-based model interpretability interface', description: 'Interactive dashboard for local and global interpretability in tabular ML models, with report export.', stack: 'Streamlit · SHAP · Pandas', href: 'https://github.com/Sukt03/Explainable-AI-Dashboard', linkLabel: 'Code ↗' },
]

export const contact = {
  details: 'tiwarisukriti2003@gmail.com',
  github: 'github.com/Sukt03',
  githubUrl: 'https://github.com/Sukt03',
}

export const socialLinks = [
  { label: 'Google Scholar', icon: 'scholar', href: 'https://scholar.google.com/citations?user=kihFUmsAAAAJ&hl=en' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/sukriti-tiwari3' },
  { label: 'GitHub', icon: 'github', href: 'https://github.com/Sukt03' },
  { label: 'Email', icon: 'email', href: 'mailto:tiwarisukriti2003@gmail.com' },
]

export const sectionMeta = {
  research: { number: '01', title: 'Research' },
  publications: { number: '02', title: 'Publications' },
  experience: { number: '03', title: 'Experience' },
  projects: { number: '04', title: 'Projects', graphLabel: 'Generative AI node graph decoration' },
  contact: { number: '05', title: 'Contact' },
}
