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
  ],
  //Contact Email
  contactEmail: "tanmaylaud@gmail.com",
  // Add Your About Text Here
  abouttext:
    "I am a Full-Stack Software Developer, currently working at Deutsche Bank. I spend my weekends volunteering as an ML Engineer for Omdena, solving society's most pressing problems. My interests include  NLP, Machine Learning, Data Analytics and 3D Visualisations, Web and Backend Development, Distrubuted Systems.",
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  //Change Education Here
  education: [
    {
      id: 1,
      title: "Veermata Jijabai Technological Institute",
      degree: "B.Tech (Electronics & Telecommunications Engg.) |",
      grade: "CGPA 9.33",
      url: "https://www.vjti.ac.in/",
    },
    {
      id: 2,
      title: "Kischinchand Chellaram College",
      degree: "H.S.C. |",
      grade: "90%",
      url: "https://www.kccollege.edu.in/",
    },
    {
      id: 3,
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
      title: "Stockkerr : Stock Analyser",
      service: "Python based webapp to analyse historical stock data",
      imageSrc: "./stocker.gif",
      url: "https://stockkerr.herokuapp.com/",
    },
    {
      id: 2,
      title: "NLP: Patient Conversation Classifier",
      service: "Segregating patient queries from regular chat using NLP",
      imageSrc: "./patient_clf.gif",
      url:
        "https://github.com/tanmaylaud/Patient_Conversation_Classifier_FastAI",
    },
    {
      id: 3,
      title: "React Typewriting Effect",
      service: "UI Animation Library",
      imageSrc: "./typewriting.gif",
      url: "https://www.npmjs.com/package/react-typewriting-effect",
    },
    {
      id: 4,
      title: "COVID19 Globe Tracker",
      service: "Tracking Active Cases",
      imageSrc: "./covid.gif",
      url: "https://tanmaylaud.github.io/covid19-globe-tracker/",
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
