import interactiveIphone from "./media/interactive-iPhone1.png";
import colorPalette from "./media/color-palette-project.png";
import viewsOfViews from "./media/views-of-views.png";

const CVObject = {
  desc: {
    topic: "Personal Description",
    content: ["I am a driven optimist who enjoys challenging the status quo. After one year at varsity, I went on to complete my yacht masters and sailed to various locations around the world. It was later while working as a waiter that I discovered programming and haven't looked back since. Currently, I aspire to become a front-end UX developer."]
  },
  exp: {
    topic: "Experience",
    content: ["My experience to date has mainly been with personal projects. I do however have a willingness to learn and a passion for problem solving. I believe my potential far outweighs my lack of professional experience, but don't take my word for it, check out my projects and decide for yourself."]
  },
  famTech: {
    topic: "Familiar Technologies",
    content: ["HTML5 & CSS3", "JavaScript", "React", "MaterialUI", "Bootstrap", "JQuery", "SCSS", "JSS", "NodeJS", "Express", "NPM", "Git", "GitHub",]
  },
  skills: {
    topic: "Skills",
    content: ["Problem Solving", "Logic", "Tying Knots", "Advanced Googling Techniques"]
  }
};

const projectData = [
  {
    name: "Interactive iPhone",
    url: "https://interactive-iphone.netlify.com/",
    image: interactiveIphone,
    gitHub: "https://github.com/J-Grizz/Interactive-iPhone",
    summary: "An iPhone designed specifically to display my skills and capabilities with pure HTML, CSS and JavaScript. It contains some of the prevalent projects I have made on my educational journey.",
    intro: "An iPhone designed specifically to display my skills and capabilities with pure HTML, CSS and JavaScript. It contains some of the prevalent projects I have made on my educational journey.",
    why: "In the earlier days of my development journey while I was still getting the hang of HTML, CSS, JavaScript and dom manipulation, I was building many small projects which I thought were pretty cool. But the problem was that I didn't want to display a mess of small projects on my portfolio site. After some research and a spoonful of common sense I came to the conclusion that it would be much better to have a single larger application to present. And so the idea of the interactive iPhone was conceived to solve these prior mentioned problems.",
    conclusion: "Ultimately I'm very proud of this project as it started out as an original idea which I've since developed into a reality. This project has taught me more than I could have understood about not just the fundamentals of front-end web-development, but also the development process as a whole. There is still so much I want to do with this project, so keep your eyes on this space.",
    technologies: ["HTML", "CSS", "JavaScript", "GIMP"],
    skills: ["Problem Solving", "Innovation", "Basic", "Image Editing"],
    challenges: [
      {
        challenge: "As I've never had to work with a larger application before, one of the challenges I faced was to find a clean way to organize all the different files for the various different applications within and without the iPhone.",
        solution: "I created separate scripts and stylesheets for each individual application as well as for the functionality and design of the phone itself. I then put them inside a public directory with specific folders for the functionality of each type of file."
      },
      {
        challenge: "When I started adding more apps to the phone it became apparent that I had to come up with a simple and seamless way to integrate and connect new apps in a manner that when clicked on the app icon, that specific app would be displayed.",
        solution: "I decided the solution was too technical to add to the project write-up, so if you're interested feel free to ask me at the interview ;)"
      }
    ]
  },
  {
    name: "Views of Views",
    url: "https://viewsofviews.herokuapp.com/",
    image: viewsOfViews,
    gitHub: "https://github.com/J-Grizz/Views-of-Views",
    summary: "A full-stack web application using a MEN stack to create a simple CRUD system where users can sign-up/login, view/post campsites or views and leave comments on other posts.",
    intro: "Those with a discerning eye might suspect that this is just a pretty skin put onto Colt Steel's famous YelpCamp project from the web-development boot-camp on Udemy, and they would be completely correct. For those that don't know, this is a full-stack web application using a MEN stack to create a simple CRUD system where users can sign-up/login, view/post campsites or views and leave comments on other posts. I hope you enjoy my unique version.",
    why: "The point of using this project on my portfolio is not specifically to show off my back-end knowledge, although I have grasped and understood the concepts well, and will be willing to prove it at the interview. It is mainly to display how I migrated the old Bootstrap 3 design to Bootstrap 4 and vamped it up with mdbootstrap for a classy material finish, without the aid of any video follow along.",
    conclusion: "I learned a large amount developing this project alongside Colt Steele. I found it very liberating to throw my own unique spin on the projects using skills I developed later on in my development journey.",
    technologies: ["CSS", "Bootstrap 3/4", "MDBootsrap", "Node", "Express", "Mongoose", "MongoDB", "MongoAtlas", "EJS", "Heroku"],
    skills: ["Speedy Code-Along Skills", "Adaptive Design"],
    challenges: [
      {
        challenge: "I have never before migrated anything from BS3 to BS4, nor have I ever used or even heard of MDBootsrap before jumping in and redesigning all the pages.",
        solution: "Using some intuition I successfully migrated to BS4 and due to a firm understanding of css and css libraries was able to integrate mdbootsrap with ease."
      },
    ]
  },
  {
    name: "Color Palette Project",
    url: "http://colorpalettes.netlify.com",
    image: colorPalette,
    gitHub: "https://github.com/J-Grizz/Big-Color-Project",
    summary: "A selection of color palettes made with react, users can copy colors hex, rgb and rgba value, easily change the lightness of the colors, view a multitude of different shades for a specific color and, and create your own palette.",
    intro: "A Color Palette project for developers to help choose appealing color schemes for their projects. Users can copy colors hex, rgb and rgba value by simply clicking on the desired color, easily change the lightness of the color palette, view a multitude of different shades for a specific color and, above all else, create your own unique palette.",
    why: "I decided to use this project on my portfolio, because, although it is a code along from Colt Steele's React Course, it is the largest and most impressive app that I have under my belt. In addition, the added proof of my portfolio project (which uses many of the concepts used in the color app) displays that I have a firm grasp and understanding of the React mindset.",
    conclusion: "This is a project that has a lot more value to me than just what I learned from building it. I am confident that I will use it in the future to help choose colors for other projects I am bound to make.",
    technologies: ["React", "JSS", "React-Router-Dom", "React-Transition-Group", "Material-UI", "Chroma-js", "React-Copy-To-Clipboard", "Netlify"],
    skills: ["Speedy Code-Along", "Adaptive Logic"],
    challenges: [
      {
        challenge: "At the time the course was made materialUI was still using class components. However, by the time I did the course they had converted all of their components to use hooks, which is only taught later in the course.",
        solution: "Instead of using the old version of materialUI I decided to learn react hooks straight from the docs and I continued coding alongside Colt Steele with the added challenge of using functional components with hooks instead of class components as Colt was doing in the videos."
      },
    ]
  },
]

export { CVObject, projectData }