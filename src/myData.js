import neonphoto from "./photo/neonphoto.jpeg";
import neonphoto2 from "./photo/neonphoto2.jpeg";
import neonphoto3 from "./photo/neonphoto3.jpeg";
import neonphoto4 from "./photo/neonphoto4.jpeg";
import neonphoto5 from "./photo/neonphoto5.jpeg";
import acmresearch from "./photo/acmresearch.png";
import acmresearch2 from "./photo/acmresearch2.png";
import acmresearch3 from "./photo/acmresearch3.jpeg";

/* eslint-disable import/no-anonymous-default-export */
export default {
  projects: [
    {
      title: "Reinforcement Learning for Traffic Light Control", //Project Title - Add Your Project Title Here
      para: "Researched the use of reinforcement learning to optimize the throughput of traffic through arbitrary road map layouts and traffic patterns advised by Dr. Yongwan Chun.", // Add Your Service Type Here
      paraUsed: "Python · SUMO (Simulation of Urban MObility)",
      //Project Image - Add Your Project Image Here
      imageSrc: [acmresearch, acmresearch2, acmresearch3],
      //Project URL - Add Your Project Url Here
      urlCode: "https://github.com/notJamesHan/Stacked",
      urlDemo: "",
    },
    {
      title: "Spending Habits App", //Project Title - Add Your Project Title Here
      para: "An app giving a unique monthly summary of user's spending habits. Redesigned six visual pages with encouraging messages to help users reflect and improve their spending using React Native.", // Add Your Service Type Here
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
      para: "A discord bot that helps users to study by giving study motivation features. The bot recommends study musics using youtube's REST API, times user's total study time and stores on MongoDB.", // Add Your Service Type Here
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
    {
      title: "National Park Service Website", //Project Title - Add Your Project Title Here
      para: "An improved the US National Park Service Website by revitalizing the website’s design and user experience. Designed a new user interface for National Park using Sass and Figma. ", // Add Your Service Type Here
      paraUsed: "React, Sass, Javascript",
      //Project Image - Add Your Project Image Here
      imageSrc: [
        "https://user-images.githubusercontent.com/77949696/161839924-207903fa-050e-4874-9db0-bc91ee3db134.png",
      ],
      //Project URL - Add Your Project Url Here
      urlCode: "https://github.com/notjameshan/national-park-service-app",
      urlDemo: "https://notjameshan.github.io/national-park-service-app/",
    },
  ],
  experiences: [
    {
      companyName: "Samsung Research America - NEON",
      jobTitle: "Software Engineering Intern",
      date: "Aug 2023 - Current",
      bulletpoints: [
        "Public release of our photorealist avatar Neon at Samsung Experience Store",
        "Integrated local API server, saving over $ 3,000 monthly in AWS GPU instance with docker imaging and Python.",
        "Revamped the web application logic, increasing build speed by 90% by revising code in TypeScript and Webpack.",
        "Simplified DB schema storing over 200+ elements by type clarification and function revision in Python and AWS.",
      ],
      imageSrc: [neonphoto, neonphoto2, neonphoto3, neonphoto4, neonphoto5],
      url: "https://neonlife.ai",
      skills:
        "Python · TypeScript · React.js · Amazon Web Services (AWS) · Docker",
    },
    {
      companyName: "Amazon - Recruiting Engine",
      jobTitle: "Software Development Intern",
      date: "May 2023 - Aug 2023",
      bulletpoints: [
        "Redesigned a fully automated interview scheduling app, decreasing interview scheduling time by 90%.",
        "Achieved an internal application launch used by 30+ job recruiters using React, TypeScript, and Java.",
        "Maintained a stable database storing over 500+ job applications through data validation and error handling.",
        "Strengthened code quality by covering 83% of lines of automated unit and integration tests with Mockito.",
        "Organized future phases of the application with four coworkers by writing an application design doc.",
      ],
      imageSrc: [],
      url: "https://www.amazon.jobs/en/teams/people-technology",
      skills:
        "Java · TypeScript · React.js · Amazon Web Services (AWS) · Unit Testing",
    },
    {
      companyName: "Samsung Research America - NEON",
      jobTitle: "Software Engineering Intern",
      date: "May 2022 - May 2023",
      bulletpoints: [
        "Prototyped a communication app with an artificial human for five business clients using React and TypeScript.",
        "Improved API response time by 62% by restructuring a local Flask API and migrating to AWS using Python.",
        "Introduced a serverless API architecture handling 2,500+ API requests per month using a serverless framework.",
        "Implemented user authentication for roles and security for over 50+ customers using SQL connected to Python.",
      ],
      imageSrc: [],
      url: "https://neonlife.ai",
      skills: "Python · Amazon Web Services (AWS) · SQL · Docker · Kubernetes",
    },
    {
      companyName: "ACM Research",
      jobTitle: "Research Assistant",
      date: "january 2022 - May 2022",
      bulletpoints: [
        "Researched the use of reinforcement learning to optimize the throughput of traffic through arbitrary road map layouts and traffic patterns advised by Dr. Yongwan Chun.",
        "Collaborated with a group of five by dividing parts into machine learning, data analyzing, and visualization.",
        "Implemented a model that used a Q-learning algorithm to control the traffic light states at any given time.",
        "Saw an exponential decay in total vehicle waiting time as the model continued to learn.",
      ],
      imageSrc: [],
      url: "https://acmutd.co/",
      skills: "Python · SUMO (Simulation of Urban MObility)",
    },
  ],
};
