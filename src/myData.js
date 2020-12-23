export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: "Portfolio. Designed using React",
  headerTagline: [
    //Line 1 For Header
    "Hi 👋 You found me!",
    //Line 2 For Header
    "I am Tanmay Laud.",
    //Line 3 For Header
    "Developer.",
    //Line 4 For Header
    "Designer.",
    //Line 5 For Header
    "Data Scientist."
  ],
  //Contact Email
  contactEmail: "tlaud@ucsd.edu",
  // Add Your About Text Here
  abouttext:
    "I am an Incoming MS Computer Science Student at the University Of California, San Diego. As a Full-Stack Software Developer, I have 2 years of experience in building large scale systems at Deutsche Bank. I spend my free time volunteering as a Lead ML Engineer for Omdena, solving society's most pressing problems. My primary interests include  NLP, Machine Learning, Data Analysis, 3D Visualisations, Distributed Systems, Web and Backend Development. I actively contribute to opensource projects on github. Checkout my journey",
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  //Change Education Here
  education: [
    {
      id: 1,
      title: "University Of California, San Diego",
      degree: "Incoming MS Computer Science",
      grade: "",
      url: "https://ucsd.edu/",
    },
    {
      id: 2,
      title: "Veermata Jijabai Technological Institute",
      degree: "B.Tech (Electronics & Telecommunications Engg.) |",
      grade: "CGPA 9.33",
      url: "https://www.vjti.ac.in/",
    },
    {
      id: 3,
      title: "Kischinchand Chellaram College",
      degree: "H.S.C. |",
      grade: "90%",
      url: "https://www.kccollege.edu.in/",
    },
    {
      id: 4,
      title: "St. Xavier's Boys' Academy",
      degree: "S.S.C |",
      grade: "94.91%",
      url: "https://www.sxba.in/",
    },
  ],
  // Change Projects Here
  projects: [
    {
      id: 1,
      title: "Using an NLP Q&A System To Study Climate Hazards",
      service: "How to create a powerful NLP Q&A system in 8 weeks, that resolves queries on a domain-specific knowledge base?",
      imageSrc: "./KBQA_gif.gif",
      url: "https://medium.com/omdena/using-an-nlp-q-a-system-to-study-climate-hazards-and-nature-based-solutions-c191920766d7",
    },
    {
      id: 2,
      title: "Knowledge Graphs and Network Analysis",
      service: "A set of integrated techniques to depict relations among actors and to analyze the social structures that emerge from the recurrence of these relations. ",
      imageSrc: "./KG.gif",
      url: "https://wriclimate-network.herokuapp.com/",
    },
    {
      id: 3,
      title: "Stockkerr : Stock Analyser",
      service: "Python based webapp to analyse historical stock data",
      imageSrc: "./stocker.gif",
      url: "https://stockkerr.herokuapp.com/",
    },
    {
      id: 4,
      title: "COVID19 Globe Tracker",
      service: "Tracking Active Cases",
      imageSrc: "./covid.gif",
      url: "https://tanmaylaud.github.io/covid19-globe-tracker/",
    },
    {
      id: 5,
      title: "React Typewriting Effect",
      service: "UI Animation Library",
      imageSrc: "./typewriting.gif",
      url: "https://www.npmjs.com/package/react-typewriting-effect",
    },
    {
      id: 6,
      title: "NLP: Patient Conversation Classifier",
      service: "Segregating patient queries from regular chat using NLP",
      imageSrc: "./patient_clf.gif",
      url:
        "https://github.com/tanmaylaud/Patient_Conversation_Classifier_FastAI",
    },
  ],
  social: [
    // Add Or Remove The Link Accordingly
    { name: "Github", url: "https://github.com/tanmaylaud" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tanmaylaud",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/tanmayl",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/l_tanmay",
    },
    {
      name: "Medium (Blog)",
      url: "https://medium.com/@tanmaylaud",
    },
  ],
};
