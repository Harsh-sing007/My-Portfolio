import React from 'react'; // For potential future use if icons are needed in data

// I will just use placeholder image imports or change the project imports
// Wait, the template imports these images at the top. I'll just change the data but keep the format so the build doesn't break.
import aidjImg from '../assets/projects/aidj.webp';
import ratinamazeImg from '../assets/projects/ratinamaze.webp';
import cicdImg from '../assets/projects/cicd.webp';

export const projects = [
  {
    id: 1,
    year: "2025",
    category: "Full Stack AI",
    title: "AI DJ Assistant",
    description: "An AI-powered music assistant that generates personalized playlists based on a user's mood or activity description. It dynamically curates music tracks while integrating YouTube playback to stream full songs through an interactive web interface.",
    liveUrl: null,
    githubUrl: "https://github.com/Harsh-sing007/DJ-Assistant",
    image: aidjImg,
    imageColor: "bg-purple-900",
    techStack: ["Python", "Next.js", "Tailwind CSS", "YouTube API"]
  },
  {
    id: 2,
    year: "2024",
    category: "Frontend / Algorithms",
    title: "Rat in a Maze – Pathfinding Visualizer",
    description: "A web-based visualization of the classic Rat in a Maze problem illustrating the backtracking algorithm. The application interactively visualizes how the algorithm explores possible paths through a grid, backtracks when encountering obstacles, and eventually determines a valid route in real-time.",
    liveUrl: null,
    githubUrl: "https://github.com/Harsh-sing007/pathfinding_maze",
    image: ratinamazeImg,
    imageColor: "bg-emerald-900",
    techStack: ["HTML", "CSS", "JavaScript", "Backtracking Algorithm", "Recursion"]
  },
  {
    id: 3,
    year: "2025",
    category: "DevOps / CI/CD",
    title: "DevOps CI/CD Pipeline with Automated Security Scanning",
    description: "A production-style CI/CD pipeline built with GitHub Actions and Docker to automate the build, testing, security analysis, and versioning of an application. The pipeline auto-triggers on every commit and pull request, integrating CodeQL static analysis and automated vulnerability scanning to enforce security throughout the development lifecycle — delivering faster, more reliable software with built-in quality gates.",
    liveUrl: null,
    githubUrl: "https://github.com/Harsh-sing007/devops-cicd-prod",
    image: cicdImg,
    imageColor: "bg-blue-900",
    techStack: ["GitHub Actions", "Docker", "CodeQL", "JavaScript", "Security Scanning", "CI/CD"]
  }
];

export const achievements = [
  {
    id: 1,
    year: "2025",
    title: "Super Contributor in Hacktoberfest",
    organization: "Hacktoberfest",
    description: "Successfully merged 20 pull requests which were accepted by Hacktoberfest."
  },
  {
    id: 2,
    year: "2025",
    title: "100 Days LeetCode Badge",
    organization: "LeetCode",
    description: "Earned the 100 Days LeetCode Badge by maintaining a consistent daily coding streak."
  },
  {
    id: 3,
    year: "2025",
    title: "Technology Job Simulation - Forage",
    organization: "Forage",
    description: "Completed the Technology Job Simulation Certificate."
  },
  {
    id: 4,
    year: "2025",
    title: "AWS Solution Architecture - Forage",
    organization: "Forage",
    description: "Completed the AWS Solution Architecture Certificate."
  },
  {
    id: 5,
    year: "2025",
    title: "Introduction to Internet of Things - NPTEL",
    organization: "NPTEL",
    description: "Completed the Introduction to IoT Certification."
  }
];

export const skills = [
  {
    title: "Languages",
    description: "Java, Python, C++, JavaScript",
  },
  {
    title: "Frameworks & Libraries",
    description: "Flask, Node.js",
  },
  {
    title: "Tools & Platforms",
    description: "Linux, AWS, Docker, GitHub, VS Code",
  },
  {
    title: "Soft Skills",
    description: "Decision-Making, Problem-Solving, Team Collaboration, Adaptability",
  }
];

export const education = [
  {
    year: "Aug' 23 - Present",
    title: "Lovely Professional University",
    subtitle: "Bachelor of Technology - Computer Science and Engineering",
    grade: "CGPA: 7.28"
  },
  {
    year: "Apr' 21 - Mar' 23",
    title: "Delhi Public School",
    subtitle: "Intermediate",
    grade: "Percentage: 81%"
  },
  {
    year: "Mar' 20 - Mar' 21",
    title: "Bethany Convent School",
    subtitle: "Matriculation",
    grade: "Percentage: 84%"
  }
];
