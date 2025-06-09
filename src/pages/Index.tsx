import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Sun, Moon, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900 dark:text-white">
              Ashinee Kesanam
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Publications', 'Skills', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b515?w=200&h=200&fit=crop&crop=face"
              alt="Ashinee Kesanam"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-700 shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Ashinee Kesanam
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6 font-semibold">
            AI & Software Engineering Enthusiast
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            BTech in Artificial Intelligence from NITK (CGPA: 8.48), with expertise in AI, ML, NLP, and software development. 
            Founder of HSpectrum and HSuite, with internships at Uber India and research experience at NUS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="mt-12 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
          >
            <ChevronDown size={32} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I am a passionate AI and software engineering enthusiast currently pursuing my BTech in Artificial Intelligence 
                at NITK with a strong focus on healthcare applications and innovative technology solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                As the founder of HSpectrum, a non-profit promoting AI in healthcare, and HSuite, a healthcare management platform, 
                I am dedicated to leveraging technology to solve real-world problems and make a positive impact on society.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My experience spans research internships at prestigious institutions like NUS, engineering roles at Uber India, 
                and multiple published research papers in AI and NLP domains.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
              {[
                {
                  degree: "BTech in Artificial Intelligence",
                  institution: "NITK",
                  period: "2021-2025",
                  grade: "CGPA: 8.48"
                },
                {
                  degree: "Minor in Management",
                  institution: "NITK",
                  period: "2022-2025",
                  grade: "CGPA: 8.2"
                },
                {
                  degree: "Grade 12 - PCME",
                  institution: "Sri Chaitanya PU College",
                  period: "2019-2021",
                  grade: "100%"
                },
                {
                  degree: "Grade 10",
                  institution: "Stella Maris High School",
                  period: "2018-2019",
                  grade: "98.08%"
                }
              ].map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
                  <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>{edu.period}</span>
                    <span className="font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Work Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Founder & CTO",
                company: "HSpectrum",
                period: "Sep 2024 - Present",
                location: "Remote",
                description: "Non-profit promoting AI in healthcare. Built website using Supabase, React, Postgres. Managed research activities.",
                skills: ["React", "Supabase", "PostgreSQL", "AI in Healthcare"]
              },
              {
                title: "Research Intern",
                company: "CogAI4Sci, NUS",
                period: "Dec 2024 - Apr 2025",
                location: "Remote",
                description: "Worked on LLM tokenization for video datasets, extracting context/content tokens from keyframes.",
                skills: ["LLMs", "Computer Vision", "Video Processing"]
              },
              {
                title: "Founder & CTO",
                company: "HSuite",
                period: "Dec 2023 - Mar 2024",
                location: "Remote",
                description: "Developed HIMS software for administrative/clinical tasks. Built community of 400 members.",
                skills: ["Healthcare Management", "Full-Stack Development", "Community Building"]
              },
              {
                title: "SWE Intern (Data Backend)",
                company: "Uber India",
                period: "May 2024 - Jul 2024",
                location: "Bangalore",
                description: "Built Tableau dashboards, automated failure alerts, migrated MySQL DB, designed dynamic data pipelines.",
                skills: ["Java (SpringBoot)", "Python", "Tableau", "MySQL", "API Development"]
              },
              {
                title: "UberSTAR Intern",
                company: "Uber India",
                period: "Jun 2023 - Aug 2023",
                location: "Bangalore",
                description: "Developed data quality reporting tool with visualizations, integrated Google Drive APIs.",
                skills: ["SQL", "Data Visualization", "Google APIs", "IPyWidgets", "JSON"]
              },
              {
                title: "ML Research Intern",
                company: "GKN Aerospace",
                period: "Dec 2023 - Jan 2024",
                location: "Bangalore",
                description: "Created dataset for aviation wire character recognition, used YOLOv8 (Precision: 0.878, Recall: 0.885).",
                skills: ["Dataset Creation", "YOLOv8", "OCR", "Computer Vision"]
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Projects</h2>
          
          {/* Major Project */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Major Project</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">VITAL App</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Jul 2024 - May 2025</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI virtual mental health counselor using Hugging Face models, with journaling, tests, podcasts, meditation features.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Supabase", "LLMs", "Mental Health AI"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Capstone Project */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Capstone Project</h3>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">NITK Health Care Automation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Jul 2023 - Nov 2024</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Online health check-up tools including fracture detection, eye/heart disease prediction, and diet recommendation systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Express", "React", "Node.js", "REST API", "MySQL", "Machine Learning"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "MRI Annotator",
                  description: "RESTful app for MRI annotation with 83% accuracy brain tumor segmentation.",
                  skills: ["MySQL", "React", "Express", "Deep Learning", "Flask"]
                },
                {
                  title: "Lumbar Degenerative Disease Detection",
                  description: "Used DenseNet, YOLO, Custom 3D CNN on RSNA 2024 dataset.",
                  skills: ["Data Analytics", "Computer Vision", "NLP"]
                },
                {
                  title: "Human or AI Text Classification",
                  description: "SEM EVAL 2024 submission with RoBERTa-based model achieving 86% accuracy.",
                  skills: ["NLP", "Deep Learning", "RoBERTa"]
                },
                {
                  title: "Face Mask Recognition",
                  description: "CNN implementation with PyTorch achieving 90.31% accuracy.",
                  skills: ["Deep Learning", "PyTorch", "Data Parallelism"]
                },
                {
                  title: "Happy Health - Prescription Translator",
                  description: "Uses EasyOCR for prescription text extraction and displays medicine information.",
                  skills: ["EasyOCR", "OpenCV", "Matplotlib", "Pandas"]
                },
                {
                  title: "Vehicle Traffic Violation Detection",
                  description: "YOLOv3-based system with Hopcroft-Karp algorithm achieving 75% accuracy.",
                  skills: ["OpenCV", "YOLOv3", "Object Detection"]
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Publications</h2>
          <div className="space-y-6">
            {[
              {
                title: "Focal-RoBERTa: Multi-head attention RoBERTa with focal loss for emotion classification",
                description: "SEM Eval 2025, Rank 13/80",
                status: "Published"
              },
              {
                title: "LIGHT-ME: Lightweight attention-based multimodal emotion detection",
                description: "Submitted to MIND Conference 2024",
                status: "Under Review"
              },
              {
                title: "Leveraging LLMs for Zero-Shot Feature Selection",
                description: "Fine-tuned LLM for heart disease/diabetes prediction, submitted to MIND Conference 2024",
                status: "Under Review"
              },
              {
                title: "End-to-End Pipeline for NL Query",
                description: "NLP-driven spacecraft health data analytics, ICITIIT 2024, IEEE",
                status: "Published"
              },
              {
                title: "Comprehensive Multi-Modal Analysis",
                description: "Vehicle violation detection, ICISPD 2023, Springer",
                status: "Published"
              }
            ].map((pub, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{pub.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{pub.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      pub.status === 'Published' 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 dark:text-gray-500 ml-4 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <div className="space-y-2">
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Adept</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Python, C, C++, SQL</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Familiar</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Java, R</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Git", "Linux", "Scikit-learn", "TensorFlow", "Keras"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Computer Vision", "Pattern Recognition", "NumPy", "Pandas", "Matplotlib", "HTML", "CSS"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Courses</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["DSA", "AI", "ML", "NLP", "Data Science", "Linear Algebra"].map((course, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "IndiaAI Fellowship 2025",
              "1st Place, Campus Innovation Change, Incub8 Event 2025, E-Cell NITK",
              "Grace Hopper Celebration Advancing Inclusion Scholarship, AnitaB.org",
              "Amazon ML Summer School 2024 Winner",
              "Qualified Level 1, Flipkart Grid 5.0 (SDE and Robotics)",
              "Volunteer, NAACL Conference 2024",
              "Uber She++ 2023 Winner",
              "CWiCS (Cisco Women in Cybersecurity) Boost Program'23 Winner",
              "Google Kickstart Farewell Round A, Rank 5432",
              "KCET Rank 776/201,834, COMEDK Rank 89/66,304 (2021)",
              "Best Student Award, 12th Grade",
              "Karnataka State Rank 6, Bangalore Urban Rank 1, NMMS Exam 2016"
            ].map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:ashineekesanam@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail size={20} />
                  ashineekesanam@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/ashinee-kesanam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  linkedin.com/in/ashinee-kesanam
                </a>
                <a
                  href="https://github.com/Ashinee-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <Github size={20} />
                  github.com/Ashinee-20
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Ashinee Kesanam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
