export const site = {
  title: 'Sukriti Tiwari — Research Portfolio',
  brand: 'Sukriti Tiwari',
  navLabel: 'Primary navigation',
  nav: [
    { label: 'Publications', href: '#publications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    name: 'Sukriti Tiwari',
    lede: 'Trying to figure out how brains work and whether AI can read them.',
    visualLabel: 'Abstract research network connecting geospatial AI, generative AI, and machine learning',
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

export const experience = [
  { when: 'Nov 2024 — Sept 2025', title: 'Research Intern, Lab for Spatial Informatics, IIIT Hyderabad', description: 'Automated terrace-detection pipeline in Google Earth Engine and Python for geomorphological analysis in the Western Himalayas. Hyperspectral preprocessing (PCA, radiometric/geometric/atmospheric correction). Multi-temporal Sentinel-2 lake-encroachment mapping over Hyderabad using deep-learning segmentation.' },
  { when: 'Aug 2024 — Aug 2025', title: 'Machine Learning Engineer, Magnocode Tech Pvt. Ltd.', description: 'Automated data pipelines for large-scale web crawling and domain-specific dataset preprocessing. Dataset preparation for LLM fine-tuning and inference on Runpod GPU infrastructure. Contributed to a patent-filed AI prediction system.' },
  { when: 'Jan 2024 — Aug 2024', title: 'Machine Learning Engineer Trainee, Magnocode Tech Pvt. Ltd.', description: 'Data collection, cleaning, and schema validation for downstream model development. Git-based version control and testing of end-to-end ML pipelines.' },
]

export const projects = [
  { title: 'CLIP-based reverse image search', description: 'Multimodal caption generation and reverse image search via visual-semantic similarity, with FAISS-based retrieval.', stack: 'Python · PyTorch · CLIP · FAISS' },
  { title: 'AutoGNN — neural architecture search on GNNs', description: 'Automated NAS over GCN, GAT, GraphSAGE, GIN for node classification on Cora, CiteSeer, PubMed.', stack: 'PyTorch Geometric · scikit-learn' },
  { title: 'SHAP-based model interpretability interface', description: 'Interactive dashboard for local and global interpretability in tabular ML models, with report export.', stack: 'Streamlit · SHAP · Pandas' },
]

export const contact = {
  details: 'tiwarisukriti2003@gmail.com',
  github: 'github.com/Sukt03',
  githubUrl: 'https://github.com/Sukt03',
}

export const socialLinks = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=kihFUmsAAAAJ&hl=en' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sukriti-tiwari3' },
  { label: 'Email', href: 'mailto:tiwarisukriti2003@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Sukt03' },
]

export const sectionMeta = {
  publications: { number: '01', title: 'Publications' },
  experience: { number: '02', title: 'Experience' },
  projects: { number: '03', title: 'Projects', graphLabel: 'Generative AI node graph decoration' },
  contact: { number: '04', title: 'Contact' },
}
