import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  studentApi,
  docusense,
  healthcare,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "REST API Design",
    icon: web,
  },
  {
    title: "AI Integration",
    icon: web,
  },
  {
    title: "DevOps & CI/CD",
    icon: docker,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Java",
    icon: javascript, // swap for a real Java icon — see note below
  },
  {
    name: "Spring Boot",
    icon: backend, // swap for a real Spring icon — see note below
  },
  {
    name: "Python",
    icon: javascript, // swap for a real Python icon — see note below
  },
  {
    name: "MySQL",
    icon: mongodb, // swap for a real MySQL icon — see note below
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "REST APIs",
    icon: web,
  },
  {
    name: "JWT / OAuth 2.0",
    icon: backend,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Spring Boot Intern",
    companyName: "Systems Limited",
    icon: backend, // swap for a real company logo — see note below
    iconBg: "#383E56",
    date: "March 2026 - April 2026",
    points: [
      "Built a Student Management REST API using Spring Boot, implementing full CRUD operations with Spring Data JPA and Hibernate for entity mapping.",
      "Integrated H2 (testing) and MySQL (production) databases; configured data sources and managed schema via JPA annotations.",
      "Improved API reliability and debuggability by implementing global exception handling, bean validation, and structured logging.",
      "Applied layered MVC architecture separating Controller, Service, and Repository layers; wrote unit tests across all three layers.",
      "Collaborated in an agile environment, following best practices for code structure and dependency injection.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Student Management API",
    description:
      "A full-featured Spring Boot REST API with a six-entity JPA schema, JWT + OAuth 2.0/OIDC security, three-layer testing (JUnit, Mockito), and a full CI/CD pipeline — Dockerized, published to Docker Hub, and deployed via GitHub Actions to Railway with managed MySQL.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: studentApi,
    sourceCodeLink: "https://github.com/poojadeep45/StudentManagementAPI",
  },
  {
    name: "DocuSense",
    description:
      "An AI-powered document summarization API. Upload a PDF, DOCX, or TXT file and it extracts the text and generates a summary via Google Gemini, processed asynchronously behind JWT-secured, per-user access. Dockerized and deployed live, with CI running the test suite on every push.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: docusense,
    sourceCodeLink: "https://github.com/poojadeep45/docusense",
  },
  {
    name: "Intelligent Healthcare Platform (FYP)",
    description:
      "A full-stack digital health platform with AI-assisted symptom checking, doctor consultation, and appointment/pharmacy/lab booking. Built with a Node.js/Express and MongoDB backend, React/Vite frontend, and Google Gemini AI for symptom assessment.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: healthcare,
    sourceCodeLink: "https://github.com/AyeshaAhmed1573/Health_management_system",
  },
];

export { services, technologies, experiences, projects };