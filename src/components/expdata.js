export const experienceData = [
  {
    company: "TechFinics",
    project: "IT Service Website",
    title: "Software Engineer | AtticBits",
    badge: "AtticBits",
    duration: calculateDuration("2023-09"),
    servings: "Full-time",
    description:
      "I played a pivotal role in developing and maintaining TechFinics' IT service website. Collaborating with cross-functional teams, I implemented innovative features and continually improved website functionality to enhance user experience. My responsibilities included coordinating with clients to understand their needs and translating them into technical solutions.",
  },
  {
    company: "Yapees",
    project: "API Service Website",
    title: "Software Engineer | AtticBits",
    badge: "AtticBits",
    duration: calculateDuration("2023-09"),
    servings: "Full-time",
    description:
      "At Yapees, I contributed significantly to the development and enhancement of their API service website. My work involved implementing RESTful APIs and actively collaborating with clients to understand and address their unique requirements. Additionally, I played a key role in ensuring the website's reliability and scalability.",
  },
  {
    company: "HyrGPT",
    project: "Hiring Website",
    title: "Software Engineer | AtticBits",
    badge: "AtticBits",
    duration: calculateDuration("2023-09"),
    servings: "Full-time",
    description:
      "As a Software Engineer at HyrGPT, I played an integral part in building a sophisticated hiring website. My contributions included implementing user authentication, designing and integrating job posting features, and conducting regular code reviews to maintain code quality and adherence to best practices.",
  },
  {
    company: "Floda",
    project: "IT Service",
    title: "Software Engineer | AtticBits",
    badge: "AtticBits",
    duration: calculateDuration("2023-09"),
    servings: "Full-time",
    description:
      "Currently, I am dedicated to Floda's IT service project, focusing on both frontend and backend development. In this role, I am responsible for implementing new features, ensuring system stability, and collaborating with the team to deliver high-quality solutions. My work involves addressing dynamic challenges and contributing to the overall success of the project.",
  },
  // Add more experiences as needed
];

function calculateDuration(startDate) {
  const start = new Date(startDate);
  const end = new Date(); // Current date
  const diffMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  return `${diffMonths} Months`;
}
