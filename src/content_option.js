const logotext = "AALIN";
const meta = {
    title: "Aalin Patel",
    description: "I'm Aalin Patel (Citzen), a computer science post grad looking for work in Melbourne, Australia",
};

const introdata = {
    title: "I’m Aalin Patel",
    animated: {
        first: "computer science graduate",
        second: "passion for software development",
        third: "passion for machine learning",
    },
    description: "a lover of creative problem-solving through modern programming languages, spanning both front and back-end development. My enthusiasm for data science and machine learning algorithms drives me to bring theoretical knowledge into practical, industry-level applications. I’m eager to contribute my technical skills in a collaborative environment, always with a friendly and approachable attitude",
    your_img_url: require('./assets/images/IMG_9437.jpg'), // Import the image
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "Full Stack Web Application for E-Commerce Platform | ReactJS, Node.js, Express.js, and Cloud MySQL",
        link: "./ecommerce-platform",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "Minecraft Procedural Village Generator | Python",
        link: "./minecraft-generator",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Online Veterinary Clinic Management System | Java & mySQL",
        link: "./vetcare",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "AI-Enhanced Game Development with Steering Behaviors and Search Algorithms | C#, Unity",
        link: "/ai-game-dev",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "University Course Enrolment System Prototype | Python",
        link: "./course-enrolment",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "Cancer Cell Classification Using Machine Learning | Python",
        link: "cancer-classification",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "Program and Course Alignment Web Scrapping Tool (PCAT++) | Python, Flask",
        link: "./pcat-tool",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "Closing the Gap – Social Challenge Web Application | Java",
        link: "./closing-the-gap",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Grocery Store Application | Typescript, Angular",
        link: "grocery-store",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: " Cloud-Based Music Subscription Application | AWS",
        link: "cloud-music-app",
    }
];

const contactConfig = {
    YOUR_EMAIL: "aalinpatel@outlook.com",
    YOUR_FONE: "0450266802",
    description: "I'm always looking for chances to network and meet new people in the industry, please don't hesitate to contact me for any opportunities! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    linkedin: "https://linkedin.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};