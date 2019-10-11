import interactiveIphone from "./media/interactive-iPhone1.png";
import colorPalette from "./media/color-palette-project.png";
import viewsOfViews from "./media/views-of-views.png";

const CVObject = [
  {
    topic: "Personal Description",
    content: ["Once an idealistic boy, slightly mislead and lost in the wilderness. I have now discovered not just my passion but something much more. I find it hard to describe but I'm sure those who understand can relate."]
  },
  {
    topic: "Experience",
    content: ["In regards to programming I have no professional experience to date, I do however have a willingness to learn and a passion for problem solving. I believe my potential far outweighs my lack of professional experience, but don't take my word for it, check out my projects and decide for yourself."]
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
    intro: "A iPhone designed specifically to display my skills and capabilities with pure HTML, CSS, JavaScript. It contains some of the prevalent projects I have made on my educational journey.",
    why: "In the earlier days of my development journey while I was still getting a hang of HTML, CSS, JavaScript and dom manipulation I was building many small projects which I thought were pretty cool but the problem was that I didn't want to display a mess of small projects on my portfolio site, after some research and a spoonful of common sense I came to the conclusion that it would be much better to have a single larger application to present and so the idea of the interactive iPhone was conceived to solve these prior mentioned problems.",
    conclusion: "Ultimately I'm very proud of this project as it started out an original idea and I've since developed into a reality. This project has taught me more then I could have understood about not just the fundamentals of front end web-development but also the development process as a whole and there is still so much I want to do with this project, keep your eyes on this space.",
    technologies: ["HTML", "CSS", "JavaScript", "GIMP"],
    skills: ["Problem Solving", "innovation", "basic", "image editing"],
    challenges: [
      {
        challenge: "As I've never had to work with a larger application before one of the challenges I faced was to find a clean way to organize all the different files for the various different applications within and without the iPhone.",
        solution: "I created separate scripts and stylesheets for each individual application as well as for the functionality and design of the phone itself then put them inside a public directory with  specific folders for the functionality of each type of file."
      },
      {
        challenge: "When I started adding more apps to the phone it became apparent that I had to come up with a simple and seamless way to integrate and connect new apps in a manner that when clicked on the app icon, that specific app would be displayed.",
        solution: "I decided the solution was too technical to add to the project write-up so if you're interested then ask me at the interview :)"
      }
    ]
  },
  {
    name: "Views of Views",
    url: "https://viewsofviews.herokuapp.com/",
    image: viewsOfViews,
    gitHub: "https://github.com/J-Grizz/Views-of-Views",
    intro: "Those with a discerning eye might suspect that this is in-fact just a pretty skin put onto Colt Steels famous YelpCamp project from the web-development boot-camp on Udemy and they would be completely correct, for those that don't know, this a full-stack web application using a MEN stack to create a simple CRUD system where users can sign-up/login, view/post campsites or views and leave comments on other posts, I hope you enjoy my unique version.",
    why: "The point of using this project on my portfolio is not specifically to show off my back-end knowledge (although I have grasped and understood the concepts well, and will be willing to prove it at the interview) but mainly to display how I migrated the old Bootstrap 3 design to Bootstrap 4 and vamped it up with mdbootstrap for a classy material finish, without the aid of any video follow along.",
    conclusion: "I learned a large amount developing this project along side Colt Steele and found it very liberating to throw my own unique spin on the projects using skills I developed later on in my development journey.",
    technologies: ["CSS", "Bootstrap 3/4", "MDBootsrap", "Node", "Express", "Mongoose", "MongoDB", "MongoAtlas", "EJS", "Heroku"],
    skills: ["Speedy code-along skills while still absorbing information", "adaptive design"],
    challenges: [
      {
        challenge: "I have never before migrated anything from BS3 to BS4 before and have never used or even heard of MDBootsrap before jumping in and redesigning all the pages.",
        solution: "Using some intuition I successfully migrate to BS4 and due to a firm understanding of css and css libraries was able to integrate mdbootsrap with ease."
      },
    ]
  },
  {
    name: "Color Palette Project",
    url: "http://colorpalettes.netlify.com",
    image: colorPalette,
    gitHub: "https://github.com/J-Grizz/Big-Color-Project",
    intro: "A Color palette project for developers to help choose appealing color schemes for their projects, users can copy colors hex, rgb and rgba value by simply clicking on the desired color, easily change the lightness of the color palette, view a multitude of different shades for a specific color and above all else create your own unique palette.",
    why: "I decided to use this project on my portfolio because, although it is a code along from Colt Steele's React Course it is the largest and most impressive app that I have under my belt and with the added proof of my portfolio project (which uses many of the concepts used in the color app) displays that I have a firm grasp and understanding of the React mindset.",
    conclusion: "This is a project that has a lot more value to me then just what i learned from building it, I am confident that i will use it in the future to help choose colors for other projects I am sure to make.",
    technologies: ["React", "JSS", "React-Router-Dom", "React-Transition-Group", "Material-UI", "Chroma-js", "React-Copy-To-Clipboard", "Netlify"],
    skills: ["Speedy code-along skills while still absorbing information", "adaptive logic"],
    challenges: [
      {
        challenge: "At the time the course was made materialUI was still using class components however by the time I did the course they had converted all of their components to use hooks, which is only taught later in the course.",
        solution: "Instead of using the old version of materialUI i decided to learn react hooks straight from the docs and continued coding along side Colt Steele with the added challenge of using functional components with hooks instead of class components as Colt was doing in the videos."
      },
    ]
  },
]

export { CVObject, projectData }