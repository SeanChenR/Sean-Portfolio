import type {
  Word,
  NavLink,
  CounterItem,
  LogoIcon,
  Ability,
  TechStackImg,
  TechStackIcon,
  ExperienceCard,
  ExperienceLogo,
  Testimonial,
  SocialImg
} from '@/types/type'
import * as THREE from 'three'

export const words: Word[] = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
]

export const navLinks: NavLink[] = [
  {
    name: "Notes",
    link: "#hero",
  },
  {
    name: "Side Project",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
]

export const counterItems: CounterItem[] = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "AI Stacks Explored" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 10, suffix: "hours +", label: "Weekly Self-Learning" },
]

export const logoIconsList: LogoIcon[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
    name: "Shopify"
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
    name: "Microsoft"
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
    name: "Adidas"
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
    name: "Docker"
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    name: "Hostinger"
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
    name: "Adobe"
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
    name: "Appwrite"
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    name: "Nvidia"
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    name: "Vercel"
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
    name: "Linear"
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
    name: "Loom"
  },
]

export const abilities: Ability[] = [
  {
    format: "ai",
    title: "AI Solutions in Action",
    desc: "Focused on designing and implementing AI workflows and applications that deliver real business value — from ideation to deployment.",
  },
  {
    format: "ops",
    title: "Cross-Disciplinary Integration",
    desc: "Capable of integrating AI, DevOps, and Web technologies into cohesive, maintainable end-to-end systems.",
  },
  {
    format: "web",
    title: "Full-Stack in Progress",
    desc: "Actively developing full-stack expertise to build seamless user interfaces and robust backend systems for the best product delivery.",
  },
]

export const techStackImgs: TechStackImg[] = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
]

export const techStackIcons: TechStackIcon[] = [
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: new THREE.Euler(0, 0, 0),
    position: new THREE.Vector3(0, 0, 0),
    intensity: 0.3,
  },
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: new THREE.Euler(0, 0, 0),
    position: new THREE.Vector3(0, 0, 0),
    intensity: 0.3,
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: new THREE.Euler(0, -Math.PI / 2, 0),
    position: new THREE.Vector3(0, 0, 0),
    intensity: 0.3,
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: new THREE.Euler(0, -Math.PI / 4, 0),
    position: new THREE.Vector3(0, 0, 0),
    intensity: 0.3,
  },
  {
    name: "DevOps Engineer",
    modelPath: "/models/k8s.glb",
    scale: 0.055,
    rotation: new THREE.Euler(0, 0, 0),
    position: new THREE.Vector3(-2.1, -2.1, 0),
    intensity: 2,
  },
]

export const expCards: ExperienceCard[] = [
  {
    review: "Sean consistently impressed us with his deep understanding of Google Cloud services and his ability to quickly prototype impactful AI solutions.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Google Cloud AI Developer - Master Concept",
    date: "March 2025 - Present",
    responsibilities: [
      "Developed and deployed AI-powered PoC applications using Vertex AI, Google GenAI, ADK, and Dialogflow CX on Google Cloud.",
      "Built scalable web applications with Streamlit and Next.js, deployed MicroServices, and configured proper IAM/IAP permission settings.",
      "Implemented data solutions leveraging GCS, Cloud SQL, BigQuery, and Google Maps API to fulfill customer requirements.",
    ],
  },
  {
    review: "Sean demonstrated outstanding problem-solving skills. His ability to design end-to-end AI pipelines greatly enhanced our team's research efficiency and product capabilities.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Data Scientist Intern - Taiwan Economic Journal",
    date: "January 2024 - October 2024",
    responsibilities: [
      "Designed and implemented a backend RAG-based chatbot system with login-based chat history, leveraging vector databases and MySQL.",
      "Engineered a fully automated ASR transcription pipeline using LLMs and cloud deployment with fallback logic to ensure service stability.",
      "Fine-tuned NLP classification models using over 30k manually labeled disclosures, achieving >90% accuracy in financial event classification.",
      "Developed robust web crawlers to track and log structural changes on the Taiwan Stock Exchange website.",
    ],
  },
  {
    review: "Sean demonstrated exceptional analytical thinking and technical proficiency of ML/DL throughout his studies made him a standout student in our program.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Data Science Student - Soochow University",
    date: "September 2021 - June 2024",
    responsibilities: [
      "Developed machine learning models using PyTorch for various data analysis and predictive modeling projects.",
      "Created comprehensive data visualizations using Python libraries and Tableau to extract meaningful insights from complex datasets.",
      "Developed diverse projects including LineBot chatbots, web scraping technologies, and medical health analytics for stroke analysis and heart rate data.",
    ],
  },
]

export const expLogos: ExperienceLogo[] = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
]

export const testimonials: Testimonial[] = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
]

export const socialImgs: SocialImg[] = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
]