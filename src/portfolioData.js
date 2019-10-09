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
    content: ["-Problem Solving", "-Logic", "-Tying Knots", "-advanced googling techniques"]
  }
];

const projectData = [
  {
    name: "Interactive iPhone",
    url: "https://interactiveiphone.netlify.com/",
    image: interactiveIphone,
    gitHub: "https://github.com/J-Grizz/Interactive-iPhone",
    intro: "A iphone desisigned specifically to display my skills and capabilities with pure HTML, CSS, JavaScript. It contains some of the prevalent projects I have made on my educational journey.",
    why: "In the earlier days of my development journey while I was still getting a hang of HTML, CSS, JavaScript and dom manipulation I was building many small projects which I thought were pretty cool but the problem was that I didnt want to display a mess of small projects on my portfolio site, after some research and a spoonful of common sense I came to the conclusion that it would be much better to have a single larger application to present and so the idea of the interactive iphone was concieved to solve these prior mentionioned problems.",
    conclusion: "Ultimately I'm very proud of this project as it started out an original idea and I've since deveoped into a reality. This project has taught me more then I could have understood about not just the fundamentals of front end webdevelopment but also the development proccess as a whole and there is still so much I want to do with this project, keep your eyes on this space.",
    technologies: ["HTML", "CSS", "JavaScript", "GIMP"],
    skills: ["Problem Solving", "innovation", "basic", "image editing"],
    challenges: [
      {
        challenge: "As Ive never had to work with a larger application before one of the challenges I faced was to find a clean way to organize all the diffent files for the various differnt applications within and without the iphone.",
        solution: "I created seperate scripts and stylesheets for each individual application as well as for the functiononality and design of the phone itself then put them inside a public directory with  specific folders for the functionalilty of each type of file."
      },
      {
        challenge: "When I started adding more apps to the phone it became apparent that I had to come up with a simple and seemless way to intergrate and connect new apps in a manner that when clicked on the app icon, that specific app would be displayed.",
        solution: "I decided the solution was too technical to add to the project write-up so if youre interested then ask me at the interview :)"
      }
    ]
  },
  {
    name: "Views of Views",
    url: "https://viewsofviews.herokuapp.com/",
    image: viewsOfViews,
    gitHub: "https://github.com/J-Grizz/Views-of-Views",
    intro: "Those with a descerning eye might suspect that this is infact just a pretty skin put onto Colt Steels famous YelpCamp project from the webdev Bootcamp on Udemy and they would be completely correct, for those that don't know, this a fullstack web application using a MEN stack to create a simple CRUD system where users can sign-up/login, view/post campsites or views and leave comments on other posts, I hope you enjoy my unique version.",
    why: "The point of using this project on my portfolio is not specifically to show off my back-end knowledge (although I have grasped and understood the concepts well, and will be willing to prove it at the interview) but mainly to display how I migrated the old Bootstrap 3 design to Boostrap 4 and vamped it up with mdbootstrap for a classy material finish, without the aid of any video follow along.",
    conclusion: "I leared a large ammount developing this project along side Colt Steele and found it very liberating to throw my own unique spin on the projects using skills I developed later on in my development journey.",
    technologies: ["CSS", "Bootstrap 3/4", "MDBootsrap", "Node", "Express", "Mongoose", "MongoDB", "MongoAtlas", "EJS", "Heroku"],
    skills: ["Speedy codealong skills while still absorbing information", "adaptive design"],
    challenges: [
      {
        challenge: "I have never before migrated anything from BS3 to BS4 before and have never used or even heard of MDBootsrap before jumping in and redesigning all the pages.",
        solution: "Using some intuition I succesfully migrate to BS4 and due to a firm understanding of css and css libraries was able to integrate mdbootsrap with ease."
      },
    ]
  },
  {
    name: "Color Palette Project",
    url: "http://colorpalettes.netlify.com",
    image: colorPalette,
    gitHub: "https://github.com/J-Grizz/Big-Color-Project",
    intro: "A iphone desisigned specifically to display my skills and capabilities with pure HTML, CSS, JavaScript. It contains some of the prevalent projects I have made on my educational journey.",
    why: "In the earlier days of my development journey while I was still getting a hang of html, css, js and dom manipulation I was building many small projects which I thought were pretty cool but the problem was that I didnt want to display a mess of small projects on my portfolio site, and after much research I learned that its much better to have a single larger application to present and so the idea of the interactive iphone was concieved to solve these prior mentionioned problems.",
    conclusion: "",
    technologies: ["HTML", "CSS", "JavaScript", "GIMP"],
    skills: ["Problem Solving", "innovation", "basic", "image editing"],
    challenges: [
      {
        challenge: "At the time the code along was made.",
        solution: "I created seperate scripts and stylesheets for each individual application as well as for the functiononality and design of the phone itself then put them inside a public directory with  specific folders for the functionalilty of each type of file."
      },
    ]
  },
]

export { CVObject, projectData }