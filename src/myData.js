// import neonphoto from "./photo/neonphoto.jpeg";
// import neonphoto2 from "./photo/neonphoto2.jpeg";
// import neonphoto3 from "./photo/neonphoto3.jpeg";
// import neonphoto4 from "./photo/neonphoto4.jpeg";
// import neonphoto5 from "./photo/neonphoto5.jpeg";
import acmresearch from "./photo/acmresearch.png";
import acmresearch2 from "./photo/acmresearch2.png";
import acmresearch3 from "./photo/acmresearch3.jpeg";
import about1 from "./photo/about1.jpg";
import about2 from "./photo/about2.jpg";
import about3 from "./photo/about3.jpg";
import about4 from "./photo/about4.jpg";
import about5 from "./photo/about5.jpg";
import about6 from "./photo/about6.jpg";
import about7 from "./photo/about7.jpg";
import studywme1 from "./photo/studywme1.png";
import studywme2 from "./photo/studywme2.png";
import studywme3 from "./photo/studywme3.png";

/* eslint-disable import/no-anonymous-default-export */
export default {
  projects: [
    {
      title: "Studywme.com", //Project Title - Add Your Project Title Here
      para: "Introduced real-time aggregation for 100+ YouTube “study-with-me” live streams using YouTube Rest API and PostgreSQL.",
      paraUsed: "Next.js, Typescript, PostgreSQL, Prisma, Vercel, TailwindCSS",
      //Project Image - Add Your Project Image Here
      imageSrc: [studywme1, studywme2, studywme3],
      //Project URL - Add Your Project Url Here
      urlCode: "",
      urlDemo: "https://studywme.com",
    },
    {
      title: "Spending Habits App", //Project Title - Add Your Project Title Here
      para: "An app giving a unique monthly summary of user's spending habits to help users reflect and improve their spending.", // Add Your Service Type Here
      paraUsed: "React Native, Javascript, Github",
      //Project Image - Add Your Project Image Here
      imageSrc: [
        "https://user-images.githubusercontent.com/77949696/148633367-eb41264d-efd8-4a77-82d4-83f17295f7ce.gif",
        "https://user-images.githubusercontent.com/77949696/148632965-2741dff0-4fbf-4480-8184-6a8b0af763d4.png",
        "https://user-images.githubusercontent.com/77949696/148632984-ae74034f-33f7-4f7e-bae1-895b3f3d9470.png",
        "https://user-images.githubusercontent.com/77949696/148632972-a0fb5b62-d7db-471d-901b-814f42a48cde.png",
      ],
      //Project URL - Add Your Project Url Here
      urlCode: "https://github.com/notJamesHan/Stacked",
      urlDemo: "",
    },
    {
      title: "Study Helper Bot", //Project Title - Add Your Project Title Here
      para: "Developed a Discord bot helping users to study such as finding study music and recording total study time.", // Add Your Service Type Here
      paraUsed: "Javascript, discord.js, MongoDB, Heroku",
      //Project Image - Add Your Project Image Here
      imageSrc: [
        "https://user-images.githubusercontent.com/77949696/129763354-593a36d8-64ad-473b-832a-2c802d6b48a1.png",
        "https://user-images.githubusercontent.com/77949696/129763423-e1f963be-abb0-47f9-9e26-21317ff84881.png",
        "https://user-images.githubusercontent.com/77949696/132406775-d7da127c-0fb2-4c4c-b826-f4390cce0902.PNG",
      ],
      //Project URL - Add Your Project Url Here
      urlCode: "https://github.com/notjameshan/discord-study-bot",
      urlDemo: "",
    },
  ],
  researchProject: [
    {
      title: "Classification of Imbalanced Data with LLM", //Project Title - Add Your Project Title Here
      para: "Conducted imbalanced data classification using PyTorch and Large Language Models (LLM), advised by Dr. Latifur Khan.",
      paraUsed: "Python · PyTorch",
      //Project Image - Add Your Project Image Here
      imageSrc: undefined,
      //Project URL - Add Your Project Url Here
      urlCode: "https://github.com/notJamesHan/Imbalanced-LLM",
      urlDemo: "",
      date: "Jan 2024 - Current",
    },
    {
      title: "Reinforcement Learning for Traffic Light Control",
      para: "Researched reinforcement learning for traffic optimization on arbitrary road maps and patterns, advised by Dr. Yongwan Chun.",
      paraUsed: "Python · SUMO (Simulation of Urban MObility)",
      imageSrc: [acmresearch, acmresearch2, acmresearch3],
      urlCode:
        "https://github.com/ACM-Research/reinforcement-learning-traffic-control",
      urlDemo: "",
      date: "January 2022 - May 2022",
    },
  ],
  experiences: [
    {
      companyName: "Samsung Research America",
      jobTitle: "Software Engineering Intern",
      date: "Aug 2023 - Current",
      bulletpoints: [
        "Released Samsung's first photorealist AI avatar application at the Samsung Experience Store.",
      ],
      imageSrc: [],
      url: "https://neonlife.ai",
      skills:
        "Python · TypeScript · React.js · Amazon Web Services (AWS) · Docker · Kubernetes",
    },
    {
      companyName: "Amazon",
      jobTitle: "Software Development Intern",
      date: "May 2023 - Aug 2023",
      bulletpoints: [
        "Restructured a full-stack automatic interview scheduling application used by 40 recruiters with Java, TypeScript, and React.",
      ],
      imageSrc: [],
      url: "https://www.amazon.jobs/en/teams/people-technology",
      skills:
        "Java · TypeScript · React.js · Amazon Web Services (AWS) · Unit Testing",
    },
    {
      companyName: "Samsung Research America",
      jobTitle: "Software Engineering Intern",
      date: "May 2022 - May 2023",
      bulletpoints: [
        "Prototyped a real-time communication app with Virtual AI for 500+ visitors with TypeScript, React, WebRTC, and AWS",
      ],
      imageSrc: [],
      url: "https://neonlife.ai",
      skills:
        "Python · Amazon Web Services (AWS) · TypeScript · React.js · Webrtc · SQL · Docker · Kubernetes",
    },
    {
      companyName: "University of Texas at Dallas",
      jobTitle: "Undergraduate Researcher",
      date: "January 2024 - Current",
      bulletpoints: [
        "Conducted imbalanced data classification using PyTorch and Large Language Models (LLM), advised by Dr. Latifur Khan.",
      ],
      imageSrc: [],
      url: "",
      skills: "Python · Pytorch",
    },
    {
      companyName: "ACM Research",
      jobTitle: "Undergraduate Researcher",
      date: "January 2022 - May 2022",
      bulletpoints: [
        "Researched reinforcement learning for traffic optimization on arbitrary road maps and patterns, advised by Dr. Yongwan Chun.",
      ],
      imageSrc: [],
      url: "https://acmutd.co/",
      skills: "Python · SUMO (Simulation of Urban MObility)",
    },
  ],
  headerPictures: [about1, about2, about4, about5, about6, about7, about3],
};
