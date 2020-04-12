export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: "Portfolio. Designed using React & Bootstrap",
  headerTagline: [
    //Line 1 For Header
    "Hi 👋 You found me! I am Tanmay Laud.",
    //Line 2 For Header
    "Software Engineer.",
    //Line 3 For Header
    "Designer.",
    //Line 3 For Header
    "Aspiring Data Scientist.",
  ],
  //Contact Email
  contactEmail: "tanmaylaud@gmail.com",
  // Add Your About Text Here
  abouttext:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1,
      title: "Project One", //Project Title - Add Your Project Title Here
      service: "UI/UX Design", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://www.google.com/",
    },
    {
      id: 2,
      title: "Project Two",
      service: "Website Development",
      imageSrc:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      url: "http://www.google.com/",
    },
    {
      id: 3,
      title: "Project Three",
      service: "Web App",
      imageSrc:
        "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      url: "http://www.google.com/",
    },

    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
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
  ],
};
