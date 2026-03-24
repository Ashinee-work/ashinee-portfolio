import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Sun, Moon, ExternalLink, Calendar, MapPin, Terminal, Code2, Trophy, BookOpen, Cpu, Zap, ChevronRight } from 'lucide-react';

// ─────────────── DATA ───────────────

const EXPERIENCES = [
  {
    title: "Software Engineer I",
    company: "Uber India",
    period: "Jun 2025 – Present",
    location: "Bangalore",
    tag: "Full-time",
    tagColor: "green",
    bullets: [
      "Developed and maintained internal ETL frameworks, optimizing data ingestion and resolving SQL anti-patterns to significantly reduce storage costs and compute overhead.",
      "Architected and deployed production-grade AI tools, including a Text-to-SQL assistant, a driver next-trip prediction model, and automated documentation agents.",
      "Engineered an AI-driven on-call automation system to streamline incident response and reduce manual developer intervention.",
      "Lead the integration of emerging AI technologies into the team's workflow, proactively identifying opportunities for LLM-based process improvements.",
    ],
    skills: ["Java (SpringBoot)", "Python", "Text-to-SQL", "LLMs", "ETL", "AI Automation"],
  },
  {
    title: "Founder & CTO",
    company: "HSpectrum",
    companyLink: "",
    period: "Sep 2024 – Present",
    location: "Remote",
    tag: "Non-profit",
    tagColor: "purple",
    bullets: [
      "Non-profit promoting AI in healthcare.",
      "Built website using Supabase, React, Postgres.",
      "Managed research activities and community outreach.",
    ],
    skills: ["React", "Supabase", "PostgreSQL", "AI in Healthcare"],
  },
  {
    title: "Research Intern",
    company: "CogAI4Sci, NUS",
    period: "Dec 2024 – Apr 2025",
    location: "Remote",
    tag: "Research",
    tagColor: "blue",
    bullets: [
      "Worked on LLM tokenization for video datasets, extracting context/content tokens from keyframes.",
    ],
    skills: ["LLMs", "Computer Vision", "Video Processing"],
  },
  {
    title: "Founder & CTO",
    company: "HSuite",
    companyLink: "https://www.hsuite.in",
    period: "Dec 2024 – Mar 2024",
    location: "Remote",
    tag: "Startup",
    tagColor: "orange",
    bullets: [
      "Developed an HIMS software that automates both administrative and clinical tasks with offline/online capabilities.",
      "Currently paused due to competition and wasn't able to acquire sufficient customers.",
      "The community currently has around 400 members from both medical and engineering backgrounds.",
    ],
    skills: ["React", "Node.js", "Healthcare IT", "HIMS"],
  },
  {
    title: "SWE Intern – Data Backend",
    company: "Uber India",
    period: "May 2024 – Jul 2024",
    location: "Bangalore",
    tag: "Internship",
    tagColor: "green",
    bullets: [
      "Built Tableau dashboards, automated failure alerts, migrated MySQL DB, designed dynamic data pipelines.",
    ],
    skills: ["Java (SpringBoot)", "Python", "Tableau", "MySQL", "API Development"],
  },
  {
    title: "ML Research Intern",
    company: "GKN Aerospace",
    period: "Dec 2023 – Jan 2024",
    location: "Bangalore",
    tag: "Internship",
    tagColor: "cyan",
    bullets: [
      "Created dataset for aviation wire character recognition, used YOLOv8 (Precision: 0.878, Recall: 0.885).",
    ],
    skills: ["Dataset Creation", "YOLOv8", "OCR", "Computer Vision"],
  },
  {
    title: "UberSTAR Intern",
    company: "Uber India",
    period: "Jun 2023 – Aug 2023",
    location: "Bangalore",
    tag: "Internship",
    tagColor: "green",
    bullets: [
      "Developed data quality reporting tool with visualizations, integrated Google Drive APIs.",
    ],
    skills: ["SQL", "Data Visualization", "Google APIs", "IPyWidgets", "JSON"],
  },
  {
    title: "Web Admin & Member",
    company: "Scalar Team, NITK",
    period: "Sep 2023 – Ongoing",
    location: "NITK",
    tag: "Club",
    tagColor: "pink",
    bullets: [
      "Built static website for SCaLAR Lab NITK, working on H-Suite capstone.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Deep Learning"],
  },
];

const MAJOR_PROJECT = {
  title: "VITAL App",
  period: "Jul 2024 – May 2025",
  description: "AI virtual mental health counselor using Hugging Face models, with journaling, tests, podcasts, and meditation features.",
  skills: ["React", "Supabase", "LLMs", "Mental Health AI"],
  links: [],
};

const CAPSTONE_PROJECT = {
  title: "NITK Health Care Automation",
  period: "Jul 2023 – Nov 2024",
  description: "Online health check-up tools including fracture detection, eye/heart disease prediction, and diet recommendation systems.",
  skills: ["Express", "React", "Node.js", "REST API", "MySQL", "Machine Learning"],
  links: [],
};

const OTHER_PROJECTS = [
  {
    title: "MRI Annotator",
    description: "RESTful app for MRI annotation with auth, editing tools, storage. 83% accuracy brain tumor segmentation. Under Guidance of Dr. Sowmya Kamath S.",
    skills: ["MySQL", "React", "Express", "Node.js", "Deep Learning", "Flask"],
    links: [{ label: "Web App", url: "https://brain-tumor-segmentation-hwng.vercel.app/" }],
  },
  {
    title: "Lumbar Degenerative Disease Detection",
    description: "RSNA 2024 dataset. Applied DenseNet, YOLO, and Custom 3D CNN for degenerative condition classification. Under Dr. Shruthilipi Bhattacharjee.",
    skills: ["Data Analytics", "CV", "NLP"],
    links: [],
  },
  {
    title: "Human or AI Text Classification",
    description: "SEM EVAL 2024 Task 8. Three approaches: ANN, BERT, RoBERTa. RoBERTa testing accuracy: 0.86. Under Dr. Sowmya Kamath S.",
    skills: ["NLP", "DL"],
    links: [{ label: "GitHub", url: "https://github.com/Ashinee-20/SemEval-2024-Task-8-Unraveling-AI-vs.-Human-Text" }],
  },
  {
    title: "Face Mask Recognition",
    description: "CNN architecture with PyTorch, trained on CUDA with Data Parallelism. Accuracy: 90.31%. Under Dr. Geetha V.",
    skills: ["Deep Learning", "PyTorch", "Data Parallelism"],
    links: [{ label: "GitHub", url: "https://github.com/Ashinee-20/Face-Mask-Recognition-using-Data-Parallelism" }],
  },
  {
    title: "Unsupervised Text Classification",
    description: "Multinomial Naive Bayes on BBC Dataset. Overall accuracy: 97%. Under Dr. Jaidhar C D.",
    skills: ["ML", "Feature Extraction", "Sklearn"],
    links: [{ label: "GitHub", url: "https://github.com/Ashinee-20/Supervised-Text-Classification" }],
  },
  {
    title: "Citation Link Prediction",
    description: "Graph-based features, centrality measures, XGBoost & Random Forest. Accuracy: 48.62%. Under Dr. Sowmya Kamath S.",
    skills: ["ML", "NetworkX"],
    links: [{ label: "GitHub", url: "https://github.com/Ashinee-20/Citation-Link-Prediction-and-influential-Paper-detection" }],
  },
  {
    title: "Happy Health – Prescription Translator",
    description: "EasyOCR for prescription text, medicine image display, and nearby hospital listing. Under Dr. Anand Kumar M.",
    skills: ["EasyOCR", "OpenCV", "Matplotlib", "Pandas", "PIL"],
    links: [{ label: "GitHub", url: "https://github.com/Ashinee-20/Happy-Health" }],
  },
  {
    title: "Vehicle Traffic Violation Detection",
    description: "YOLOv3 for vehicle detection, Hopcroft-Karp for matching. Accuracy: 75%. Under Dr. Ram Mohana Reddy Guddeti.",
    skills: ["OpenCV", "YOLOv3", "Matplotlib"],
    links: [{ label: "GitHub", url: "https://github.com/Ashinee-20/Traffic-Signal-Violation-Detection" }],
  },
  {
    title: "NLP Based Disaster Tweets",
    description: "Logistic regression classifier. Accuracy: 80%, F1 score: 74%. Kaggle competition.",
    skills: ["NLP", "Sklearn", "Machine Learning"],
    links: [
      { label: "Kaggle", url: "https://www.kaggle.com/kesanamashinee/nlp-tweets" },
      { label: "GitHub", url: "https://github.com/Ashinee-20/Personalized-Product-Recommendation" },
    ],
  },
  {
    title: "Handwritten Digit Recognizer",
    description: "ANN with TensorFlow and Keras, PCA techniques. Accuracy: 95%. Kaggle competition.",
    skills: ["TensorFlow", "Keras", "Pandas"],
    links: [
      { label: "Kaggle", url: "https://www.kaggle.com/code/kesanamashinee/digit-recognizer-using-tensorflow-and-keras" },
      { label: "GitHub", url: "https://github.com/Ashinee-20/Spelling-corrector" },
    ],
  },
  {
    title: "Energy Efficiency Prediction",
    description: "6 models (XGBoost, Linear Regression, Random Forest, Decision Tree, Elastic NET, ANN). Compared RMSE before/after tuning. Under Dr. Sowmya Kamath S.",
    skills: ["Data Analysis", "Data Visualization", "Sklearn", "ML"],
    links: [{ label: "GitHub", url: "https://github.com/Ashinee-20/Spelling-corrector" }],
  },
];

const PUBLICATIONS = [
  {
    title: "Focal-RoBERTa: Addressing Class Imbalance in Multi-Label Emotion Classification",
    description: "Multi-head attention RoBERTa with focal loss for multi-label emotion classification. SEM Eval 2025, Rank 13/80.",
    venue: "ACL Anthology · SEM Eval 2025",
    links: [{ label: "Paper", url: "https://aclanthology.org/2025.semeval-1.142/" }],
  },
  {
    title: "LIGHT-ME: Lightweight Attention-Based Multimodal Emotion Detection",
    description: "Lightweight attention-based multimodal emotion detection on Friends dataset. Comparable results to benchmark models.",
    venue: "MIND Conference 2024 · Springer",
    links: [{ label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-3-032-14531-4_17" }],
  },
  {
    title: "Leveraging LLMs for Zero-Shot Feature Selection in Cardiometabolic Disease Prediction",
    description: "Fine-tuned LLM for zero-shot feature selection. Experiments on heart disease and diabetes prediction datasets.",
    venue: "MIND Conference 2024 · Springer",
    links: [{ label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-3-032-14531-4_15" }],
  },
  {
    title: "Leveraging Physical and Semantic Features for Difficulty and Response Time Prediction of USMLE Questions",
    description: "Sig Edu Shared Task 2024. Bio-BERT embeddings + LLM augmentation. Global Ranks 19 (difficulty) and 12 (response time).",
    venue: "ACL Anthology · Sig Edu Shared Task 2024",
    links: [{ label: "Paper", url: "https://aclanthology.org/2024.bea-1.46/" }],
  },
  {
    title: "End-to-End Pipeline for NL Query based Spacecraft Health Data Analytics",
    description: "NLP-driven system for querying spacecraft health data. Fine-tuned BERT for NER, PandasAI for visual analytics. Accepted at ICITIIT 2024.",
    venue: "ICITIIT 2024 · IEEE",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10580129/" },
      { label: "GitHub", url: "https://github.com/Ashinee-20/NLP-solutions-for-spacecraft-health-and-mission-control-system" },
    ],
  },
  {
    title: "Comprehensive Multi-Modal Analysis for Enhanced Road Safety and Traffic Law Enforcement",
    description: "System for vehicle violation detection, owner recognition via face/license plate, and real-time pedestrian count. Accepted at ICISPD 2023.",
    venue: "ICISPD 2023 · Springer",
    links: [
      { label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-981-96-9443-3_14" },
      { label: "GitHub", url: "https://github.com/Ashinee-20/Traffic-Signal-Violation-Detection" },
    ],
  },
];

const ACHIEVEMENTS = [
  { text: "Efficiency Award – Uber Platform Year-End Award within 6 months of joining for a project that led to $46K cost savings and other compute savings", tag: "🏆 Uber" },
  { text: "1st Place, Claude Code Demos for a data inefficiency project during Uber Tech Week 2025", tag: "🏆 Uber" },
  { text: "Breakthrough Concept Award with ₹50K cash prize – Google Agentic AI Day Hackathon, Bangalore (Jul 2025), among 9100 teams", tag: "🏆 Google" },
  { text: "IndiaAI Fellowship 2025", tag: "🎓" },
  { text: "1st Place, Campus Innovation Challenge, Incub8 Event 2025, E-Cell NITK", tag: "🏆" },
  { text: "Grace Hopper Celebration Advancing Inclusion Scholarship, AnitaB.org", tag: "🎓" },
  { text: "Amazon ML Summer School 2024 Winner", tag: "🏆" },
  { text: "Qualified Level 1, Flipkart Grid 5.0 (SDE and Robotics)", tag: "✅" },
  { text: "Volunteer, NAACL Conference 2024", tag: "🌐" },
  { text: "Uber She++ 2023 Winner", tag: "🏆" },
  { text: "CWiCS (Cisco Women in Cybersecurity) Boost Program'23 Winner", tag: "🏆" },
  { text: "Google Kickstart Farewell Round A, Rank 5432", tag: "💻" },
  { text: "KCET Rank 776/201,834 · COMEDK Rank 89/66,304 (2021)", tag: "🎓" },
  { text: "Best Student Award, 12th Grade", tag: "⭐" },
  { text: "Felicitated by Ex-Chief Minister of Karnataka for 100% in PUC", tag: "🎖️" },
  { text: "Karnataka State Rank 6, Bangalore Urban Rank 1, NMMS Exam 2016", tag: "🥇" },
];

const HACKATHONS = [
  {
    name: "Google Agentic AI Day Hackathon",
    project: "SahayakAI",
    description: "AI tool for teachers to save time creating notes and sharing with students. Won the Breakthrough Concept Award among 9100 teams.",
    prize: "₹50K Prize · Breakthrough Concept Award",
    links: [
      { label: "Demo", url: "https://www.canva.com/design/DAGuVtwA8jI/fEX9UQKzTj9M7x6OvQNl-Q/watch?utlId=h629ffd9674" },
      { label: "GitHub", url: "https://github.com/Ashinee-20/SahayakAI" },
      { label: "Winner Page", url: "https://vision.hack2skill.com/event/googlecloudagenticaiday2025" },
      { label: "PPT", url: "https://drive.google.com/file/d/1bAB4aty88kBqd4xPM_tS6kbl4YmHRGdE/view?usp=sharing" },
    ],
    team: "Team: CodeAshRam",
  },
  {
    name: "Uber Michelangelo Hackathon (Internal)",
    project: "No-Code Text-to-SQL Assistant",
    description: "Built a no-code Text-to-SQL assistant during Uber's internal Michelangelo Hackathon.",
    prize: "Internal Hackathon",
    links: [],
  },
  {
    name: "Uber AITHON (Internal)",
    project: "Driver Next-Trip Prediction & Sentiment Analysis",
    description: "Participated in 2 teams: Driver's next-trip prediction model and Uber's social media sentiment analysis.",
    prize: "Internal Hackathon",
    links: [],
  },
  {
    name: "Bolt Hackathon",
    project: "NoteMyVideo",
    description: "Web app that turns YouTube videos or topic keywords into study materials — in just a few seconds.",
    prize: "",
    links: [
      { label: "Devpost", url: "https://devpost.com/software/notemyvideo" },
    ],
  },
  {
    name: "AWS AI for Bharat by Hack2Skill",
    project: "FarmIntel",
    description: "Provides real-time crop prices and market intelligence to rural farmers in remotest areas with no internet access.",
    prize: "",
    links: [
      { label: "Prototype", url: "https://d1ktbyzym5umyt.cloudfront.net/" },
      { label: "Video", url: "https://youtu.be/EZOXMw8PY6k" },
      { label: "PPT", url: "https://drive.google.com/file/d/1MTXYFIM8MuxcJsweiastdAdBs4_FLv5C/view?usp=sharing" },
    ],
  },
];

const MENTORING = [
  {
    title: "Handwritten Character Recognition",
    org: "IEEE-NITK",
    period: "Feb 2023 – May 2023",
    description: "Mentored CNN model achieving 92% accuracy.",
    skills: ["DL", "CV", "TensorFlow", "Keras"],
  },
  {
    title: "Virtual Fashion Try On",
    org: "IEEE-NITK",
    period: "Sep 2023 – Mar 2024",
    description: "Mentored GAN-based virtual fashion try-on model.",
    skills: ["GAN", "DL", "Segmentation"],
  },
  {
    title: "Mess Complaint Registration",
    org: "NITK",
    period: "Jan 2025 – Apr 2025",
    description: "Mentored synthetic dataset creation and built dashboards.",
    skills: ["ML", "React", "Node.js"],
  },
  {
    title: "AI Based Smart Kitchen",
    org: "NITK",
    period: "Jan 2025 – Apr 2025",
    description: "Mentored RAG-based LLM for recipe generation.",
    skills: ["LLM", "NLP", "CV"],
  },
];

const SKILLS = {
  Languages: ["Python", "C", "C++", "SQL", "Java", "R"],
  Frameworks: ["Git", "Linux", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "React", "Node.js", "SpringBoot"],
  "AI / ML": ["Computer Vision", "NLP", "Pattern Recognition", "LLMs", "Deep Learning", "RAG", "Object Detection"],
  Tools: ["NumPy", "Pandas", "Matplotlib", "Docker", "Supabase", "Tableau", "YOLOv8"],
};

// ─────────────── TAG COLORS ───────────────
const TAG_CLASSES: Record<string, string> = {
  green: "border-[hsl(142,71%,45%)] text-[hsl(142,71%,45%)]",
  purple: "border-[hsl(270,70%,65%)] text-[hsl(270,70%,65%)]",
  blue: "border-[hsl(210,100%,60%)] text-[hsl(210,100%,60%)]",
  cyan: "border-[hsl(185,80%,55%)] text-[hsl(185,80%,55%)]",
  orange: "border-[hsl(30,90%,55%)] text-[hsl(30,90%,55%)]",
  pink: "border-[hsl(330,80%,65%)] text-[hsl(330,80%,65%)]",
};

// ─────────────── COMPONENT ───────────────
const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [result, setResult] = useState("");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme !== 'light';
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending…");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "283fdc6d-b984-4df6-84b7-af779fbaf4c4");
    const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await response.json();
    if (data.success) {
      setResult("Message sent ✓");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult(data.message);
    }
  };

  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Publications', 'Hackathons', 'Skills', 'Achievements', 'Contact'];
  const visibleProjects = showAllProjects ? OTHER_PROJECTS : OTHER_PROJECTS.slice(0, 6);

  // ── Shared style primitives ──
  const card = "rounded-md border border-border bg-card text-card-foreground p-5 hover:border-primary/50 transition-colors duration-200";
  const tag = (color: string) => `border text-[10px] font-mono px-1.5 py-0.5 rounded ${TAG_CLASSES[color] ?? "border-primary text-primary"}`;
  const skillPill = "font-mono text-xs px-2 py-0.5 rounded border border-primary/30 bg-primary/5 text-primary";
  const sectionHeading = "font-mono text-2xl font-bold text-foreground mb-2";
  const sectionSubline = "font-mono text-xs text-muted-foreground mb-10";

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <span className="font-mono font-bold text-primary text-sm tracking-tight">
              ~/ashinee<span className="animate-pulse">_</span>
            </span>
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-150"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-150"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={14} /> : <Moon size={14} />}
              </button>
              <button
                className="lg:hidden p-1.5 rounded border border-border text-muted-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Terminal size={14} />
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-mono text-xs text-muted-foreground hover:text-primary text-left transition-colors"
              >
                <ChevronRight size={12} className="inline mr-1" />{item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="pt-14 min-h-screen flex items-center bg-background relative overflow-hidden">
        {/* grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 text-primary font-mono text-xs px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[hsl(142,71%,45%)] animate-pulse" />
            Open to collaborate · SWE I @ Uber · Bangalore
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            <img
              src="https://raw.githubusercontent.com/Ashinee-work/ashinee-portfolio/main/src/assets/ash_formal.jpg"
              alt="Ashinee Kesanam"
              className="w-24 h-24 rounded-full border-2 border-primary/40 shadow-lg object-cover flex-shrink-0"
            />
            <div>
              <h1 className="font-mono text-4xl md:text-5xl font-bold text-foreground mb-2">
                Ashinee Kesanam
              </h1>
              <p className="font-mono text-primary text-lg mb-1">Software Engineer I @ Uber · AI/ML Engineer</p>
              <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
                BTech in Artificial Intelligence from NITK (CGPA: 8.52). Building production-grade AI tools at Uber. 
                Founder of HSpectrum. Published researcher in NLP & CV. IndiaAI Fellow 2025.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="font-mono text-sm px-5 py-2.5 rounded border border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              $ get_in_touch()
            </button>
            <a
              href="https://github.com/Ashinee-20"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-5 py-2.5 rounded border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/ashinee-kesanam"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-5 py-2.5 rounded border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="mt-16 text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={24} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// about.ts</p>
          <h2 className={sectionHeading}>About Me</h2>
          <p className={sectionSubline}>Background, education & what drives me</p>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                I'm a Software Engineer I at <span className="text-foreground font-medium">Uber India</span>, working on the Data Platform team in Bangalore. I graduated with a BTech in Artificial Intelligence from <span className="text-foreground font-medium">NITK Surathkal</span> (CGPA: 8.52) in 2025.
              </p>
              <p>
                At Uber, I build production-grade AI tools — including a Text-to-SQL assistant, driver next-trip prediction models, and AI-driven on-call automation. I'm passionate about applying LLMs to real engineering workflows and reducing toil through intelligent automation.
              </p>
              <p>
                Outside work, I'm the Founder & CTO of <span className="text-foreground font-medium">HSpectrum</span>, a non-profit promoting AI in healthcare, and a published researcher with papers in NLP, CV, and multimodal systems. I was selected as an <span className="text-foreground font-medium">IndiaAI Fellow 2025</span>.
              </p>
              <p>
                I've interned twice at Uber, did research at NUS (CogAI4Sci), and worked on ML at GKN Aerospace. I care deeply about building impactful technology — especially at the intersection of AI and healthcare.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-3">
                {[
                  { degree: "BTech in Artificial Intelligence", inst: "NITK", period: "2021–2025", grade: "CGPA: 8.52" },
                  { degree: "Minor in Management", inst: "NITK", period: "2022–2025", grade: "CGPA: 8.2" },
                  { degree: "Grade 12 – PCME", inst: "Sri Chaitanya PU College", period: "2019–2021", grade: "100%" },
                  { degree: "Grade 10", inst: "Stella Maris High School", period: "2018–2019", grade: "98.08%" },
                ].map((edu, i) => (
                  <div key={i} className={card}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-mono text-xs font-semibold text-foreground">{edu.degree}</p>
                        <p className="font-mono text-xs text-primary mt-0.5">{edu.inst}</p>
                      </div>
                      <div className="text-right font-mono text-[11px] text-muted-foreground">
                        <p>{edu.period}</p>
                        <p className="text-foreground font-semibold mt-0.5">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// experience.ts</p>
          <h2 className={sectionHeading}>Work Experience</h2>
          <p className={sectionSubline}>Where I've shipped code</p>
          <div className="space-y-4">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className={card}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-mono text-sm font-bold text-foreground">{exp.title}</h3>
                      <span className={tag(exp.tagColor)}>{exp.tag}</span>
                    </div>
                    <p className="font-mono text-xs text-primary mt-1">
                      {exp.companyLink
                        ? <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{exp.company} ↗</a>
                        : exp.company}
                    </p>
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground shrink-0 flex flex-col sm:items-end gap-0.5">
                    <span className="flex items-center gap-1"><Calendar size={10} />{exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={10} />{exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-3">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="text-xs text-muted-foreground flex items-start gap-2">
                      <ChevronRight size={10} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s, si) => <span key={si} className={skillPill}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// projects.ts</p>
          <h2 className={sectionHeading}>Projects</h2>
          <p className={sectionSubline}>Things I've built</p>

          {/* Major */}
          <h3 className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-widest">Major Project</h3>
          <div className={`${card} mb-6 border-primary/40`}>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h4 className="font-mono text-sm font-bold text-foreground">{MAJOR_PROJECT.title}</h4>
              <span className="font-mono text-[11px] text-muted-foreground">{MAJOR_PROJECT.period}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{MAJOR_PROJECT.description}</p>
            <div className="flex flex-wrap gap-1.5">{MAJOR_PROJECT.skills.map((s, i) => <span key={i} className={skillPill}>{s}</span>)}</div>
          </div>

          {/* Capstone */}
          <h3 className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-widest">Capstone Project</h3>
          <div className={`${card} mb-10 border-primary/40`}>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h4 className="font-mono text-sm font-bold text-foreground">{CAPSTONE_PROJECT.title}</h4>
              <span className="font-mono text-[11px] text-muted-foreground">{CAPSTONE_PROJECT.period}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{CAPSTONE_PROJECT.description}</p>
            <div className="flex flex-wrap gap-1.5">{CAPSTONE_PROJECT.skills.map((s, i) => <span key={i} className={skillPill}>{s}</span>)}</div>
          </div>

          {/* Other */}
          <h3 className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-widest">Other Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleProjects.map((proj, i) => (
              <div key={i} className={`${card} flex flex-col`}>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-mono text-xs font-bold text-foreground leading-snug">{proj.title}</h4>
                    {proj.links.length > 0 && (
                      <div className="flex gap-1.5 shrink-0">
                        {proj.links.map((l, li) => (
                          <a key={li} href={l.url} target="_blank" rel="noopener noreferrer"
                            className="text-[10px] font-mono border border-primary/40 text-primary px-1.5 py-0.5 rounded hover:bg-primary/10 transition-colors flex items-center gap-0.5">
                            {l.label === "GitHub" ? <Github size={9} /> : <ExternalLink size={9} />}
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">{proj.description}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {proj.skills.map((s, si) => <span key={si} className={skillPill}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
          {OTHER_PROJECTS.length > 6 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="font-mono text-xs px-4 py-2 border border-border text-muted-foreground rounded hover:border-primary hover:text-primary transition-colors"
              >
                {showAllProjects ? '— show less' : `+ show ${OTHER_PROJECTS.length - 6} more projects`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── PUBLICATIONS ── */}
      <section id="publications" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// publications.ts</p>
          <h2 className={sectionHeading}>Publications</h2>
          <p className={sectionSubline}>Peer-reviewed research</p>
          <div className="space-y-4">
            {PUBLICATIONS.map((pub, i) => (
              <div key={i} className={card}>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-xs font-bold text-foreground mb-1">{pub.title}</h3>
                    <p className="text-[11px] text-muted-foreground mb-2">{pub.description}</p>
                    <span className="font-mono text-[10px] text-primary">{pub.venue}</span>
                  </div>
                  <div className="flex gap-2 shrink-0 flex-wrap">
                    {pub.links.map((l, li) => (
                      <a key={li} href={l.url} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-[10px] border border-primary/40 text-primary px-2 py-1 rounded hover:bg-primary/10 transition-colors flex items-center gap-1">
                        {l.label === "GitHub" ? <Github size={9} /> : <BookOpen size={9} />}
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HACKATHONS ── */}
      <section id="hackathons" className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// hackathons.ts</p>
          <h2 className={sectionHeading}>Hackathons</h2>
          <p className={sectionSubline}>Building fast under pressure</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HACKATHONS.map((h, i) => (
              <div key={i} className={`${card} flex flex-col`}>
                <div className="flex-1">
                  {h.prize && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <Trophy size={11} className="text-yellow-400" />
                      <span className="font-mono text-[10px] text-yellow-400">{h.prize}</span>
                    </div>
                  )}
                  <h3 className="font-mono text-xs font-bold text-foreground mb-0.5">{h.name}</h3>
                  <p className="font-mono text-xs text-primary mb-2">{h.project}</p>
                  <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">{h.description}</p>
                  {h.team && <p className="font-mono text-[10px] text-muted-foreground mb-2">{h.team}</p>}
                </div>
                {h.links.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {h.links.map((l, li) => (
                      <a key={li} href={l.url} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-[10px] border border-primary/40 text-primary px-1.5 py-0.5 rounded hover:bg-primary/10 transition-colors flex items-center gap-0.5">
                        <ExternalLink size={9} />{l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTORING ── */}
      <section id="mentoring" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// mentoring.ts</p>
          <h2 className={sectionHeading}>Mentoring</h2>
          <p className={sectionSubline}>Giving back to the community</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MENTORING.map((m, i) => (
              <div key={i} className={card}>
                <h3 className="font-mono text-xs font-bold text-foreground mb-0.5">{m.title}</h3>
                <p className="font-mono text-xs text-primary mb-1">{m.org}</p>
                <p className="font-mono text-[10px] text-muted-foreground mb-2">{m.period}</p>
                <p className="text-[11px] text-muted-foreground mb-3">{m.description}</p>
                <div className="flex flex-wrap gap-1">{m.skills.map((s, si) => <span key={si} className={skillPill}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// skills.ts</p>
          <h2 className={sectionHeading}>Skills</h2>
          <p className={sectionSubline}>Technologies I work with</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className={card}>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={12} className="text-primary" />
                  <h3 className="font-mono text-xs font-semibold text-foreground">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s, i) => <span key={i} className={skillPill}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// achievements.ts</p>
          <h2 className={sectionHeading}>Achievements</h2>
          <p className={sectionSubline}>Milestones & recognition</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className={`${card} flex items-start gap-3`}>
                <span className="text-base leading-none mt-0.5 shrink-0">{a.tag.split(' ')[0]}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-muted/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-primary mb-1">// contact.ts</p>
          <h2 className={sectionHeading}>Get In Touch</h2>
          <p className={sectionSubline}>I'm always open to interesting conversations</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className={`${card} mb-4 font-mono text-xs`}>
                <p className="text-muted-foreground mb-3 text-sm">$ whoami</p>
                <p className="text-foreground">Ashinee Kesanam</p>
                <p className="text-primary">Software Engineer I @ Uber</p>
                <p className="text-muted-foreground mt-3 mb-1 text-[11px]">// reach me at</p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: "ashineekesanam@gmail.com", href: "mailto:ashineekesanam@gmail.com" },
                  { icon: Linkedin, label: "linkedin.com/in/ashinee-kesanam", href: "https://linkedin.com/in/ashinee-kesanam" },
                  { icon: Github, label: "github.com/Ashinee-20", href: "https://github.com/Ashinee-20" },
                ].map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 font-mono text-xs text-muted-foreground hover:text-primary transition-colors group">
                    <Icon size={14} className="group-hover:text-primary" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <form className="space-y-4" onSubmit={onSubmit}>
              {[
                { id: "name", label: "name", type: "text", placeholder: "your_name" },
                { id: "email", label: "email", type: "email", placeholder: "your@email.com" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block font-mono text-[11px] text-muted-foreground mb-1">
                    const {f.label} =
                  </label>
                  <input
                    type={f.type} id={f.id} name={f.id} required
                    placeholder={f.placeholder}
                    className="w-full font-mono text-xs px-3 py-2 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block font-mono text-[11px] text-muted-foreground mb-1">const message =</label>
                <textarea id="message" name="message" required rows={4}
                  placeholder="your message here…"
                  className="w-full font-mono text-xs px-3 py-2 border border-border rounded bg-background text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none resize-none"
                />
              </div>
              <button type="submit"
                className="w-full font-mono text-xs py-2.5 border border-primary bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                $ send_message()
              </button>
              {result && <p className="font-mono text-[11px] text-primary text-center">{result}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-6 bg-background">
        <div className="max-w-6xl mx-auto px-4 text-center font-mono text-[11px] text-muted-foreground">
          <span className="text-primary">ashinee@portfolio</span>:~$ echo "© 2025 Ashinee Kesanam · Built with React + Tailwind"
        </div>
      </footer>
    </div>
  );
};

export default Index;
