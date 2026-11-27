export const site = {
  title: 'Sukriti Tiwari — Research Portfolio',
  brand: 'Sukriti Tiwari',
  monogram: 'ST',
  hero: {
    name: 'Sukriti Tiwari',
    role: 'AI Researcher',
    focus: 'EEG brain decoding, generative AI & biomedical graph learning',
    lede: 'Trying to figure out how brains work and whether AI can read them.',
    portraitAlt: 'Portrait of Sukriti Tiwari',
    portraitSrc: `${import.meta.env.BASE_URL}sukriti-portrait.jpg`,
  },
  // Drop your CV into public/ (e.g. public/sukriti-tiwari-cv.pdf) and set this to
  // `${import.meta.env.BASE_URL}sukriti-tiwari-cv.pdf` to show the "CV" button.
  cvHref: null,
  footer: '© 2026 Sukriti Tiwari',
}

// The folders on the home screen. Each opens as a full-screen panel at #/<id>.
export const folders = [
  { id: 'research', label: 'Research', icon: 'brain', blurb: 'What I study and why' },
  { id: 'publications', label: 'Publications', icon: 'paper', blurb: '5 papers · 2 awards' },
  { id: 'experience', label: 'Experience', icon: 'briefcase', blurb: 'Labs, industry, leadership' },
  { id: 'blogs', label: 'Blogs', icon: 'pen', blurb: 'Three shelves of writing' },
  { id: 'contact', label: 'Contact', icon: 'mail', blurb: 'Say hello' },
]

export const publications = [
  { title: 'OMNI: Optimized Multiview Network Integration with Heterogeneous Graph Attention', description: 'Scalable multi-view heterogeneous graph attention framework for large-scale biomedical interaction prediction. AUROC 0.91 on chemical–gene interaction tasks.', status: 'Published', venue: 'ACS JCIM · Jun 2026', link: 'https://doi.org/10.1021/acs.jcim.6c00441', linkLabel: 'DOI ↗' },
  { title: 'Lost in Visual Translation: A VLM-Assisted Perceptual-Semantic Coherence Framework for EEG-to-Image Reconstruction', description: 'Shows that pixel and embedding metrics misjudge EEG-to-image reconstructions, then scores 6,855 pairs (ATM, ENIGMA, BrainVis, DreamDiffusion) with four VLMs on separate perceptual and semantic questions and distils their consensus into the BCI-Coherence Score (BCS). Human validation: κ = 0.882 on joint coherence.', status: 'Accepted', award: 'Best Poster Award', venue: 'IJCAI-ECAI 2026 HBAI', link: 'https://sukt03.github.io/BCS/', linkLabel: 'Project site ↗' },
  { title: 'Generate, Verify and Select: Evolutionary Fitness Shaping for Safe Clinical Text Generation', description: 'Inference-time generation for clinical text with medication, number, negation, and contradiction checks, and Differential Evolution-based selection of the safest output.', status: 'Published', venue: 'IEEE WCCI 2026 · CEC', link: 'https://ieeexplore.ieee.org/document/11727414', linkLabel: 'IEEE Xplore ↗' },
  { title: 'Multi-View Contrastive and Semantically-Aligned EEG Emotion Recognition with Topology and Asymmetry-Aware Adaptation', description: 'TAMA — a topology- and asymmetry-aware adapter for subject-independent EEG emotion recognition, combining focal classification, NT-Xent contrastive learning, and frozen-BERT semantic alignment. Best macro F1 (0.475) and the only positive MCC on strict leave-subjects-out DEAP.', status: 'Published', award: 'Best Presentation Award', venue: 'IEEE ICETCI 2026', link: 'https://ieeexplore.ieee.org/document/11710471', linkLabel: 'IEEE Xplore ↗' },
  { title: 'Generative AI for Non-Invasive Brain Decoding: Cross-Modal Approaches, Challenges, and Future Directions', description: 'Survey of generative AI approaches, challenges, and future directions for non-invasive brain decoding across EEG, fMRI, MEG, and hybrid systems.', status: 'Published', venue: 'IEEE ICETCI 2026', link: 'https://ieeexplore.ieee.org/document/11710746', linkLabel: 'IEEE Xplore ↗' },
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
  service: ['IEEE ICETCI 2026', 'CIKM 2026', 'ICIP 2026', 'IEEE WCCI 2026 / IJCNN', 'Volunteer · IJCAI–ECAI 2026, Bremen'],
  talksTitle: 'Talks & outreach',
  talks: [
    { title: 'Generative AI and NLP sessions', venue: 'Osmania University' },
    { title: 'PM SHRI Schools session', venue: 'ACE Engineering College' },
  ],
  skillsTitle: 'Toolkit',
  skills: [
    { group: 'ML / AI', items: ['PyTorch', 'PyTorch Geometric', 'TensorFlow', 'Hugging Face', 'vLLM', 'scikit-learn'] },
    { group: 'Science & data', items: ['MNE-Python', 'NumPy', 'pandas', 'OpenCV', 'FAISS', 'SHAP'] },
    { group: 'Engineering', items: ['Python', 'TypeScript', 'SQL', 'Linux', 'Slurm', 'Vertex AI', 'RunPod', 'LaTeX'] },
  ],
  languagesTitle: 'Languages',
  languages: ['Hindi · native', 'English · C1 (IELTS Academic 8.0)', 'German · learning'],
  openWorkTitle: 'Open work',
  openWork: [
    { label: 'Agricultural terrace mapping using ML', href: 'https://github.com/Sukt03/Agricultural-terrace-mapping-using-ML' },
    { label: 'Lab for Spatial Informatics · IIIT Hyderabad', href: 'https://lsi.iiit.ac.in/' },
  ],
}

export const experience = [
  { mark: 'IIITH', when: 'Nov 2024 — Sept 2025', title: 'Research Student, Lab for Spatial Informatics, IIIT Hyderabad', description: 'Automated terrace-detection pipeline in Google Earth Engine and Python for geomorphological analysis in the Western Himalayas. Hyperspectral preprocessing (PCA, radiometric/geometric/atmospheric correction). Multi-temporal Sentinel-2 lake-encroachment mapping over Hyderabad using deep-learning segmentation.' },
  { mark: 'M', when: 'Aug 2024 — Aug 2025', title: 'Machine Learning Engineer, Magnocode Tech Pvt. Ltd.', description: 'Automated data pipelines for large-scale web crawling and domain-specific dataset preprocessing. Dataset preparation for LLM fine-tuning and inference on Runpod GPU infrastructure. Contributed to a patent-filed AI prediction system.' },
  { mark: 'M', when: 'Jan 2024 — Aug 2024', title: 'Machine Learning Engineer Trainee, Magnocode Tech Pvt. Ltd.', description: 'Data collection, cleaning, and schema validation for downstream model development. Git-based version control and testing of end-to-end ML pipelines.' },
]

export const education = [
  { mark: 'JNTUH', school: 'Keshav Memorial Institute of Technology', affiliation: 'Affiliated to Jawaharlal Nehru Technological University Hyderabad', qualification: 'B.Tech in Computer Science and Engineering', when: 'June 2024' },
  { mark: 'FIITJEE', school: 'FIITJEE Junior College', affiliation: 'Hyderabad', qualification: 'Mathematics, Physics & Chemistry', when: 'June 2020' },
]

export const achievements = [
  { year: '2026', title: 'Best Poster Award · IJCAI–ECAI 2026 HBAI', detail: 'For EEG-to-image evaluation research (Lost in Visual Translation).' },
  { year: '2026', title: 'Best Presentation Award · IEEE ICETCI 2026', detail: 'For multi-view contrastive EEG emotion recognition research.' },
  { year: '2026', title: 'ChatGPT for Academic Researchers · OpenAI', detail: 'Selected for OpenAI’s academic research programme.' },
  { year: '2023 — 2024', title: 'Student Council, KMIT', detail: 'Head of Organizing Committee and member; led cultural and technical events with 4,000+ attendees.' },
  { year: '2024', title: 'Smart India Hackathon Runner-Up', detail: 'Internal KMIT competition — cyclone-eye detection using deep learning.' },
  { year: '2020', title: 'Vachan Speakers Club', detail: 'Core member and mentor for public speaking, stage presence, and speaker development.' },
  { year: '2020', title: 'Creative Lead, KMIT', detail: 'Created branding, posters, logos, and promotional media for college events.' },
  { year: '2024', title: 'Awarded Exceptional Work Ethic', detail: 'Certificate of appreciation awarded by KMIT.' },
]

// Blog shelves. Add a post by appending to a shelf's `posts` array.
export const blogShelves = [
  {
    id: 'human-in-the-loop',
    title: 'Human in the Loop',
    kicker: 'Machine learning',
    description: 'Machine learning worked out by a human, slowly: small numbers you can check yourself and simulations you can poke.',
    posts: [
      { title: 'Causal ML, by hand', date: 'Nov 2026', description: 'An interactive guide to causal inference: comic strips, a cheat sheet with small worked numbers, live simulation labs (confounding, colliders, inverse probability weighting, heterogeneous effects), five numericals and a quiz.', tags: 'Causal inference · Interactive', href: `${import.meta.env.BASE_URL}causal-ml/`, linkLabel: 'Read →' },
    ],
  },
  {
    id: 'lore-of-the-experiments',
    title: 'Lore of the Experiments',
    kicker: 'My work',
    description: 'The story behind my papers, told as comics: the question, the dead ends, and what finally worked.',
    posts: [
      { title: 'The Robot Who Learned to Read Moods', date: 'IEEE ICETCI 2026', description: 'A six-panel comic about my Best Presentation paper: reading emotions from EEG in people the model has never met, using two disguises, a teacher made of words, and a head map (TAMA).', tags: 'EEG emotion recognition · Comic · ★ Best Presentation', href: `${import.meta.env.BASE_URL}lore/tama/`, linkLabel: 'Read the comic →', extraLinks: [{ label: 'Paper on IEEE Xplore ↗', href: 'https://ieeexplore.ieee.org/document/11710471' }] },
      { title: 'The Blurry Cat Trial', date: 'IJCAI–ECAI 2026 HBAI', description: 'A six-panel comic about my Best Poster paper: why pixel scorecards judge brain-decoded images unfairly, how a jury of four AI judges does better, and the pocket-sized judge (BCS) that learned from them.', tags: 'EEG-to-image · Comic · ★ Best Poster', href: `${import.meta.env.BASE_URL}lore/bcs/`, linkLabel: 'Read the comic →', extraLinks: [{ label: 'BCS website ↗', href: 'https://sukt03.github.io/BCS/' }] },
      { title: 'Three Ways to Read a Mind', date: 'IEEE ICETCI 2026', description: 'A six-panel comic about my survey: a map of how generative AI decodes the brain from EEG, fMRI and MEG, the race between sharp and fast signals, the traps that inflate scores, and a five-point checklist for honest reporting.', tags: 'Brain decoding survey · Comic', href: `${import.meta.env.BASE_URL}lore/mind-map/`, linkLabel: 'Read the comic →', extraLinks: [{ label: 'Paper on IEEE Xplore ↗', href: 'https://ieeexplore.ieee.org/document/11710746' }] },
    ],
  },
  {
    id: 'active-visual-cortex',
    title: 'Active Visual Cortex',
    kicker: 'Through my eyes',
    description: 'Things I notice outside the lab: research life, people, places, and whatever my brain decides to decode.',
    posts: [],
  },
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
  blogs: { number: '04', title: 'Blogs' },
  contact: { number: '05', title: 'Contact' },
}
