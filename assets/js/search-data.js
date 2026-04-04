// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/#publications";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/#projects";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "courses, lectures and lab seminar talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/#teaching";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-joined-the-computer-graphics-lab-at-the-university-of-texas-at-dallas-as-a-m-s-student-v",
          title: 'I joined the Computer Graphics Lab at the University of Texas at Dallas...',
          description: "",
          section: "News",},{id: "news-our-supervised-team-of-high-school-students-received-the-1st-prize-cast-star-award-in-cast-stem-bridge-summer-camp-2021-1st-place-medal",
          title: 'Our Supervised Team of High School Students Received the 1st Prize CAST STAR...',
          description: "",
          section: "News",},{id: "news-i-joined-the-intelligent-robotics-and-vision-lab-at-the-university-of-texas-at-dallas-as-a-ph-d-student-robot",
          title: 'I joined the Intelligent Robotics and Vision Lab at the University of Texas...',
          description: "",
          section: "News",},{id: "news-our-paper-layered-garment-net-generating-multiple-implicit-garment-layers-from-a-single-image-is-accepted-at-accv-2022-tada",
          title: 'Our paper Layered-Garment Net: Generating Multiple Implicit Garment Layers from a Single Image...',
          description: "",
          section: "News",},{id: "news-our-supervised-team-of-high-school-students-received-the-2nd-prize-cast-star-award-in-cast-stem-bridge-summer-camp-2024-2nd-place-medal",
          title: 'Our Supervised Team of High School Students Received the 2nd Prize CAST STAR...',
          description: "",
          section: "News",},{id: "news-our-paper-captaincook4d-a-dataset-for-understanding-errors-in-procedural-activities-is-accepted-at-neurips-2024-datasets-amp-amp-benchmarks-track-tada",
          title: 'Our paper CaptainCook4D: A Dataset for Understanding Errors in Procedural Activities is accepted...',
          description: "",
          section: "News",},{id: "news-our-supervised-team-of-high-school-students-received-the-2nd-prize-cast-star-award-in-tast-stem-bridge-summer-camp-2025-2nd-place-medal",
          title: 'Our Supervised Team of High School Students Received the 2nd Prize CAST STAR...',
          description: "",
          section: "News",},{id: "news-our-paper-ho-cap-a-capture-system-and-dataset-for-3d-reconstruction-and-pose-tracking-of-hand-object-interaction-is-accepted-at-neurips-2025-datasets-amp-amp-benchmarks-track-tada",
          title: 'Our paper HO-Cap: A Capture System and Dataset for 3D Reconstruction and Pose...',
          description: "",
          section: "News",},{id: "projects-summer-camp-2021",
          title: 'Summer Camp 2021',
          description: "Hand-Object Detection with Reconstruction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/summer_camp_2021/";
            },},{id: "projects-summer-camp-2024",
          title: 'Summer Camp 2024',
          description: "Hand and Object Pose Tracking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/summer_camp_2024/";
            },},{id: "projects-summer-camp-2025",
          title: 'Summer Camp 2025',
          description: "Perception Driven Robot Grasping",
          section: "Projects",handler: () => {
              window.location.href = "/projects/summer_camp_2025/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%77%52%6F%62%6F%74%69%63%73%56%69%73%69%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JWRoboticsVision", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jikai-wang", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QKxqMRcAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/JwRobotics", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@jackingwang5208", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
