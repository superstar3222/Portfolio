import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaAngular,
  FaPhp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
  TbBrandDjango,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandFlutter,
  TbBrandReactNative,
  TbBrandKotlin,
  TbBrandSwift,
  TbBrandFigma,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiMui,
  SiChakraui,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
  BsFront,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Front-end Development",
    icon: BsFront,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "Angular",
    icon: FaAngular,
  },
  {
    name: "PHP",
    icon: FaPhp,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Django",
    icon: TbBrandDjango,
  },
  {
    name: "Flutter",
    icon: TbBrandFlutter,
  },
  {
    name: "Kotlin",
    icon: TbBrandKotlin,
  },
  {
    name: "Swift",
    icon: TbBrandSwift,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "MongoDB",
    icon: TbBrandMongodb,
  },
  {
    name: "Tailwind CSS",
    icon: TbBrandTailwind,
  },
  {
    name: "MUI",
    icon: SiMui,
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Figma",
    icon: TbBrandFigma,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Markdown",
    icon: BsMarkdown,
  },
  {
    name: "C/C++",
    icon: TbBrandCpp,
  },
  {
    name: "PugJs",
    icon: SiPug,
  },
];

export const workData = [
  {
    company: "Doubtnut",
    designation: "Software Developer",
    duration: "April 2023 - March 2024",
    companyImg: "doubtnut.jpg",
    description: (
      <>
        <ul>
          <li>
            Developed and scaled microservice bas 24*7, 7pm quiz feature on
            the bot using mongoDB, redis, MySQL, Node.js to support daily
            traffic of over 50,000 users.
          </li>
          <li>
            Refactored bot flow to support hindi language and allow for easy
            future integrations of vernacular languages.
          </li>
          <li>
            Automated redis dump file memory analysis using redis-rdb-tool
            to reduce error trace time during high memory load on Redis.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "PAYU",
    designation: "Software Engineer",
    duration: "Aug 2021 - March 2023",
    companyImg: "payu.png",
    description: (
      <>
        <ul>
          <li>
            Developed API for bulk invoice uploads from merchants to PAYU S3
            Storage.
          </li>
          <li>
            Worked on payment gateway to guarantee high availability of
            application during migration process.
          </li>
          <li>
            Tech stack - Java, Springboot, PHP, Mysql, Redis, k6, Dynatrace, Kibana.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "1Digitalstack.ai",
    designation: "Software Engineer 2",
    duration: "March 2022 - Sep 2023",
    companyImg: "1ds.jpg",
    description: (
      <>
        <ul>
          <li>
            I work on Reviniti, an analytics product designed for e-commerce
            players in the bid management domain. Solely migrated the old
            codebase from a templating engine (PugJS) to React with TypeScript.
          </li>
          <li>
            Engaged in developing new features, refactoring code, enhancing
            product performance, bug fixes and contributing towards achieving
            high scalability for the product.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Fact.MR",
    designation: "Associate Consultant Level 01",
    duration: "Dec 2020 - July 2021",
    companyImg: "fmr.svg",
    description: (
      <>
        <ul>
          <li>
            My main role was to assist business and market research analysts in acquiring and analyzing data.
            This entailed writing Python scripts to gather data from diverse sources, populating it in Excel,
            and cleaning the data. Subsequently, I conducted analytics to derive market insights.
          </li>
          <li>
            Expertly estimated market valuations and conducted primary research
            in collaboration with industry experts to validate data, extract
            valuable market insights, using Excel and Python.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "Website",
    title: "ByondXR",
    image: "ByondXR",
    link: "https://www.byondxr.com/",
    source: "",
  },
  {
    type: "Mobile-APP",
    title: "HBK Blanket App",
    image: "HBK",
    link: "",
    source: "",
  },
  {
    type: "Website",
    title: "Veeqo",
    image: "Veeqo",
    link: "https://youtu.be/ApUa0Xjmz1E",
    source: "",
  },
  {
    type: "Website",
    title: "Vehicle Dealership Company",
    image: "Vehicle",
    link: "https://nyalamotors.vercel.app/en/",
    source: "",
  },
  {
    type: "Website",
    title: "WayuMD",
    image: "WayuMD",
    link: "https://www.wayumd.com/doctors/",
    source: "",
  },
  {
    type: "Mobile-APP",
    title: "Student Management App",
    image: "StudentManagement",
    link: "",
    source: "",
  },
  {
    type: "Website",
    title: "Glew-BI & Analytics platfrom",
    image: "Glew-BI",
    link: "",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://vaheedsk36.github.io/Snake-game",
    source: "",
  },
  {
    type: "Website",
    title: "Weather App",
    image: "weather-app",
    link: "https://vaheedsk36.github.io/weather-app/",
    source: "https://github.com/vaheedsk36/weather-app",
  },
  {
    type: "Website",
    title: "Jouwfactoring",
    image: "Jouwfactoring",
    link: "",
    source: "",
  },
  {
    type: "Website",
    title: "Filebot",
    image: "Filebot",
    link: "",
    source: "",
  },
  {
    type: "Website",
    title: "Ecommerce",
    image: "Ecommerce",
    link: "",
    source: "",
  },
  // {
  //   type: "Mobile-APP",
  //   title: "Movie Magnet",
  //   image: "movie-magnet",
  //   link: "https://movie-magnet-smoky.vercel.app/",
  //   source: "https://github.com/vaheedsk36/movie-magnet",
  // },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/superstar3222",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/superstar3222",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/superstar3222/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/superstar3222",
    icon: FaXTwitter,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://superstar3222.hashnode.dev/",
    icon: FaHashnode,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
  {
    href: "https://medium.com/@superstar3222",
    icon: FaMediumM,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  }
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
