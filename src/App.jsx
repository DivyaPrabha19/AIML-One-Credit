import { useEffect, useMemo, useState } from "react";

const navItems = [
  ["About", "about"],
  ["Education", "education"],
  ["Internships", "internships"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Certifications", "certifications"],
  ["Contact", "contact"]
];

const roles = [
  "AI/ML Developer",
  "NLP Enthusiast",
  "Deep Learning Practitioner",
  "Cloud & Software Explorer"
];

const skillData = [
  ["Python & Java", 90],
  ["Machine Learning", 88],
  ["Deep Learning & NLP", 86],
  ["Cloud & Dev Tools", 82],
  ["Web Development", 84]
];

const projects = [
  {
    title: "AI-Enhanced EHR Imaging & Documentation System",
    stack: "Deep Learning, NLP",
    desc: "Intelligent EHR platform integrating imaging analysis and automated medical documentation using machine learning."
  },
  {
    title: "EduBot - AI-Powered Student Assistant",
    stack: "Chatbot, NLP",
    desc: "Student-support chatbot presented at the Bhumi NGO Hackathon 2025."
  },
  {
    title: "BookBot - AI Book Q&A Chatbot",
    stack: "Python, NLP, ML",
    desc: "Reads and analyzes book content, then answers user queries for efficient knowledge retrieval."
  },
  {
    title: "Brain Tumor Detection",
    stack: "Deep Learning, Computer Vision",
    desc: "Deep learning model to classify brain tumor types from MRI images."
  },
  {
    title: "IPL Statistics & Prediction Website",
    stack: "Python, ML, Web",
    desc: "Analytics platform for IPL insights and match outcome prediction with machine learning."
  }
];

const techTags = [
  "Java",
  "Python",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "MySQL",
  "JDBC",
  "Generative AI",
  "Prompt Engineering",
  "Hugging Face",
  "Groq",
  "Postman",
  "VS Code",
  "Amazon Q"
];

function useTyping(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = isDeleting ? 45 : 85;
    const doneTyping = !isDeleting && charIndex === current.length;
    const doneDeleting = isDeleting && charIndex === 0;

    const timeout = setTimeout(
      () => {
        if (doneTyping) {
          setIsDeleting(true);
          return;
        }

        if (doneDeleting) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }

        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      doneTyping ? 1200 : doneDeleting ? 280 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return words[wordIndex].slice(0, charIndex);
}

export default function App() {
  const typedRole = useTyping(roles);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    const skillsEl = document.getElementById("skills");
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (skillsEl) {
      skillObserver.observe(skillsEl);
    }

    return () => {
      revealObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      event.target.reset();
    }, 1600);
  };

  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1"></span>
        <span className="orb orb-2"></span>
        <span className="orb orb-3"></span>
      </div>

      <header className="navbar" id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top">
            Divya<span>.</span>
          </a>
          <nav>
            <ul className="nav-links">
              {navItems.map(([label, target]) => (
                <li key={target}>
                  <a href={`#${target}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section reveal" id="hero" style={{ "--delay": "0.05s" }}>
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">B.E. CSE (AI & ML) • CGPA 9.18</p>
              <h1>
                Divya Prabha Shree N S
                <span>Building intelligent products for real-world impact.</span>
              </h1>
              <p className="hero-copy">
                Motivated AI and software enthusiast transforming ideas into
                practical systems using machine learning, NLP, and modern web
                development.
              </p>
              <p className="typing-line">
                <span className="label">I am a</span>
                <span id="typing-text" aria-live="polite">
                  {typedRole}
                </span>
                <span className="cursor" aria-hidden="true">
                  |
                </span>
              </p>
              <div className="hero-cta">
                <a className="btn primary" href="#projects">
                  View Projects
                </a>
                <a className="btn ghost" href="#contact">
                  Get In Touch
                </a>
              </div>
              <div className="hero-meta">
                <a href="mailto:nsdivyaprabha19@gmail.com">
                  nsdivyaprabha19@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/divya-prabha-shree-n-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/DivyaPrabha19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="hero-card glass">
              <h3>Profile Snapshot</h3>
              <ul>
                <li>AI/ML Projects: 5+</li>
                <li>NPTEL Elite Certifications: 4</li>
                <li>Internships: Infosys + Google Cloud</li>
                <li>Campus Leadership & Hackathon Participation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section reveal" id="about" style={{ "--delay": "0.1s" }}>
          <div className="container">
            <h2>About</h2>
            <div className="glass about-box">
              <p>
                I am a Computer Science and Engineering (AI & ML) student at K S
                Rangasamy College of Technology with a strong academic
                foundation and a deep passion for Artificial Intelligence,
                Machine Learning, and impactful software systems.
              </p>
              <p>
                My work spans chatbot development, intelligent health record
                systems, and predictive analytics tools. I enjoy blending deep
                learning and NLP with clean product design to build experiences
                that are both technically strong and genuinely useful.
              </p>
            </div>
          </div>
        </section>

        <section className="section reveal" id="education" style={{ "--delay": "0.15s" }}>
          <div className="container">
            <h2>Education</h2>
            <div className="timeline">
              <article className="timeline-item glass">
                <span className="time">Sep 2023 - Present</span>
                <h3>K S Rangasamy College of Technology</h3>
                <p>B.E. Computer Science & Engineering (AI & ML)</p>
                <p>CGPA: 9.18</p>
                <p>Tiruchengode, Namakkal</p>
              </article>
              <article className="timeline-item glass">
                <span className="time">2022 - 2023</span>
                <h3>Saraswathi Vidhyashram Matric Hr. Sec. School</h3>
                <p>HSC: 87.5%</p>
                <p>Kavindapadi, Erode</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="internships" style={{ "--delay": "0.2s" }}>
          <div className="container">
            <h2>Internships</h2>
            <div className="card-grid two">
              <article className="project-card glass">
                <h3>Infosys Virtual Internship 6.0</h3>
                <p className="pill">AI & Deep Learning Intern</p>
                <p>Remote • Sep - Nov 2025</p>
                <ul>
                  <li>Built practical AI workflows with model experimentation.</li>
                  <li>Applied deep learning concepts to real-world use cases.</li>
                </ul>
              </article>
              <article className="project-card glass">
                <h3>Google Cloud Virtual Internship - Cohort 12</h3>
                <p className="pill">Cloud Intern • Grade: E (Excellent)</p>
                <p>Remote (EduSkills Foundation) • Apr - Jun 2025</p>
                <ul>
                  <li>Gained hands-on cloud deployment exposure.</li>
                  <li>Strengthened cloud-native problem-solving skills.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="projects" style={{ "--delay": "0.25s" }}>
          <div className="container">
            <h2>Projects</h2>
            <div className="card-grid three">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="project-card glass interactive"
                  style={{ animationDelay: `${index * 0.22}s` }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.stack}</p>
                  <p>{project.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="skills" style={{ "--delay": "0.3s" }}>
          <div className="container">
            <h2>Skills</h2>
            <div className="skills-wrap glass">
              {skillData.map(([name, level], index) => (
                <div className="skill-item" data-level={level} key={name}>
                  <div className="skill-head">
                    <span>{name}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="progress">
                    <span
                      style={{
                        width: skillsVisible ? `${level}%` : "0%",
                        transitionDelay: `${index * 0.12}s`
                      }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-tags">
              {techTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section reveal"
          id="certifications"
          style={{ "--delay": "0.35s" }}
        >
          <div className="container">
            <h2>Certifications & Achievements</h2>
            <div className="card-grid two">
              <article className="project-card glass">
                <h3>Certifications</h3>
                <ul>
                  <li>NPTEL Practical Cyber Security (12 weeks) - Elite</li>
                  <li>NPTEL Design Thinking (4 weeks) - Elite</li>
                  <li>NPTEL Internet of Things - Industry 4.0 (12 weeks) - Elite</li>
                  <li>NPTEL English for Competitive Exam (12 weeks) - Elite</li>
                </ul>
              </article>
              <article className="project-card glass">
                <h3>Achievements & Activities</h3>
                <ul>
                  <li>2nd Prize - Symposium Crecista '25, Kongu Engineering College</li>
                  <li>Presented projects and papers: Chatbots, BookBot, MediSync</li>
                  <li>Contributor - Anthology Hope's Tapestry</li>
                  <li>Unstop Campus Ambassador and event organizer</li>
                  <li>AEVA Association member and event coordinator</li>
                  <li>Tech Support - Design Thinking for Changemaking Bootcamp</li>
                  <li>Pragathi: Path to Future - Cohort 4 participant</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal" id="contact" style={{ "--delay": "0.4s" }}>
          <div className="container contact-wrap glass">
            <div>
              <h2>Contact</h2>
              <p>
                Let us connect for internships, collaborations, or AI-driven
                product opportunities.
              </p>
              <p>
                <strong>Email:</strong> nsdivyaprabha19@gmail.com
              </p>
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/divya-prabha-shree-n-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  divya-prabha-shree-n-s
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/DivyaPrabha19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DivyaPrabha19
                </a>
              </p>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea"
                  required
                ></textarea>
              </label>
              <button type="submit" className="btn primary" disabled={sent}>
                {sent ? "Message Sent" : "Send Message"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {year} Divya Prabha Shree N S. Crafted with precision.</p>
        </div>
      </footer>
    </>
  );
}
