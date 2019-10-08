import interactiveIphone from "./media/interactive-iPhone1.png";
import colorPalette from "./media/color-palette-project.png";
import viewsOfViews from "./media/views-of-views.png";

const CVObject = [
  {
    topic: "Personal Description",
    content: ["Once an idealistic boy, slightly mislead and lost in the wilderness. I have now discovered not just my passion but something much more. I find it hard to describe but I'm sure those who understand can relate."]
  },
  {
    topic: "Expereince",
    content: ["In regards to programming I have no professional expierience to date, I do however have a willingness to learn and a passion for problem solving. I believe my potential far outweights my lack of professional experience, but dont take my word for it, check out my projects and decide for yourself."]
  },
  {
    topic: "Familiar Technologies",
    content: ["-HTML", "-CSS", "-JavaScript", "-React", "-MaterialUI", "-Bootstrap", "-JQuery", "-SCSS", "-JSS", "-NodeJS", "-Express", "-NPM", "-Git", "-GitHub",]
  },
  {
    topic: "Skills",
    content: ["-Problem Solving", "-Logic", "-Tying Knots"]
  }
];

const projectData = [
  {
    name: "Interactive iPhone",
    url: "https://interactiveiphone.netlify.com/",
    image: interactiveIphone,
    intro: "A iphone desisigned specifically to display my skills and capabilities with pure HTML, CSS, JavaScript. It contains some of the prevalent projects I have made on my educational journey.",
    why: "In the earlier days of my development journey while I was still getting a hang of html, css, js and dom manipulation I was building many small projects which I thought were pretty cool but the problem was that I didnt want to display a mess of small projects on my portfolio site, and after much research I learned that its much better to have a single larger application to present and so the idea of the interactive iphone was concieved to solve these prior mentionioned problems.",
    challenges: {
      challengeOne: {
        challenge: "Organizing the file system: As Ive never had to work with a larger application before i had to find a clean way to organize all the diffent files for the various differnt applications within and without the iphone.",
        solution: "I created seperate scripts and stylesheets for each individual application as well as for the functiononality and design of the phone itself then put them inside a public directory with  specific folders for the functionalilty of each type of file."
      },
      challengeTwo: {

      }
    }
  },
  {
    name: "Color Palette Project",
    url: "http://colorpalettes.netlify.com",
    image: colorPalette,
    intro: "A iphone desisigned specifically to display my skills and capabilities with pure HTML, CSS, JavaScript. It contains some of the prevalent projects I have made on my educational journey.",
    why: "In the earlier days of my development journey while I was still getting a hang of html, css, js and dom manipulation I was building many small projects which I thought were pretty cool but the problem was that I didnt want to display a mess of small projects on my portfolio site, and after much research I learned that its much better to have a single larger application to present and so the idea of the interactive iphone was concieved to solve these prior mentionioned problems.",
    challenges: {
      challengeOne: {
        challenge: "Organizing the file system: As Ive never had to work with a larger application before i had to find a clean way to organize all the diffent files for the various differnt applications within and without the iphone.",
        solution: "I created seperate scripts and stylesheets for each individual application as well as for the functiononality and design of the phone itself then put them inside a public directory with  specific folders for the functionalilty of each type of file."
      },
      challengeTwo: {

      }
    }
  },
  {
    name: "Views of Views",
    url: "https://viewsofviews.herokuapp.com/",
    image: viewsOfViews,
    intro: "A iphone desisigned specifically to display my skills and capabilities with pure HTML, CSS, JavaScript. It contains some of the prevalent projects I have made on my educational journey.",
    why: "In the earlier days of my development journey while I was still getting a hang of html, css, js and dom manipulation I was building many small projects which I thought were pretty cool but the problem was that I didnt want to display a mess of small projects on my portfolio site, and after much research I learned that its much better to have a single larger application to present and so the idea of the interactive iphone was concieved to solve these prior mentionioned problems.",
    challenges: {
      challengeOne: {
        challenge: "Organizing the file system: As Ive never had to work with a larger application before i had to find a clean way to organize all the diffent files for the various differnt applications within and without the iphone.",
        solution: "I created seperate scripts and stylesheets for each individual application as well as for the functiononality and design of the phone itself then put them inside a public directory with  specific folders for the functionalilty of each type of file."
      },
      challengeTwo: {

      }
    }
  }
]

export { CVObject, projectData }