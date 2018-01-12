/**
 * resume infomation data file
 * Author: Xiaoyan Liao
 * Date: 2018-01-02
 */

 // basic infomation
var basicInfo = {
  name: 'Xiaoyan Liao',
  title: 'Full Stack Engineer',
  email: 'running923@gmail.com',
  location: 'Santa Clara, CA',
  statement: `A highly-motivated and responsive developer who has 5 years experience in bank,
              looking for Full Stack Developer job`,
  skill: [
    'Languages: Java, JavaScript, Python, HTML5, CSS3, SQL, Shell',
    'Frameworks/Libraries: Spring, Hibernate, NodeJS, KnockoutJS, Flask, jQuery, Bootstrap',
    'Other: Git/GitHub, Visual Studio Code, MySQL, Sybase IQ/ASE, MS SQL Server'
  ],
  linkedin: 'https://linkedin.com/in/xiaoyanliao',
  github: 'github.com/xiaoyan-l',
  photo: 'images/photo/me.jpg'
};

// education
var education = [
  {
    school: 'Udacity',
    timeline: 'Jan 2018',
    location: 'Santa Clara, CA',
    degree: 'Full Stack Web Developer Nanodegree',
  },
  {
    school: 'Sichuan University',
    timeline: 'Jun 2009',
    location: 'Chengdu, China',
    degree: 'Computer Software and Theory, M.S.',
  },
  {
    school: 'Sichuan University',
    timeline: 'Jun 2006',
    location: 'Chengdu, China',
    degree: 'Computer Science and Technology, B.S.',
  }
];


// publication
var publication = [
  {
    title: 'Numerical Analysis of a Deformable Model for Ultrasound Border Detection',
    timeline: '2008',
    conference: '7th Asian-Pacific Conference on Medical and Biological Engineering',
    link: 'https://link.springer.com/chapter/10.1007%2F978-3-540-79039-6_135',
    brief: ''
  }
];

// work experience
var expsData = [
  {
    company: 'A stealth Startup',
    position: 'Full Stack Developer',
    timeline: 'Feb - Dec 2017',
    location: 'Santa Clara, CA',
    bulletin: [
      'Performed frontend and backend web development and database design based on Vuejs, Nodejs, and MySQL'
    ]
  },
  {
    company: 'Agricultural Bank of China',
    position: 'Software Engineer & System Administrator',
    timeline: 'Jul 2009 - Jul 2014',
    location: 'Chengdu, China',
    bulletin: [
      `Independently designed, developed and deployed 4 management systems for bank business departments
       based on .NET and J2EE/Spring`,
      `Administered mail and official documents system, operating management website,
       loan and credit systems, and provided reports to business departments`,
      `Obtained the employee of the year in 2010 and 2012, the active employee in system
       launch in 2011 and innovative employee in 2013`
    ]
  },
  {
    company: 'Ultrasound Medical Image Lab',
    position: 'Graduate Student Research Assistant',
    timeline: 'June 2016 - May 2009',
    location: 'Chengdu, China',
    bulletin: [
      `Designed the algorithm of Border Detection of Echocardiac Left Ventricle Imaging 
       for heart disease diagnosis in ultrasound images`,
      `Published border detection algorithm in the 7th Asian-Pacific Conference 
       on Medical and Biological Engineering 2008`,
      `Designed the algorithm of Color map for Ultrasound Medical System to colorize the bloodstream
       in ultrasound images, which can help to diagnosis the hardening of the artery`
    ]
  }
];

// projects infomation
var projects = [
  {
    title: 'Neighborhood Map',
    catagory: 'course',
    type: 'Front End Projects',
    timeline: 'Janunary 2018',
    image: 'images/projects/nm_18.png',
    link: 'https://github.com/Xiaoyan-L/udacity-projects/tree/master/5-neighborhood%20map',
    bulletin: [
      `A map of IT companies in Bay Area, built with JavaScript, KnockoutJS, 
       Google Maps & Wikipedia API`,
      `Provided corporate headquarters search in list and map`
    ]
  },
  {
    title: 'Item catalog',
    catagory: 'course',
    type: 'Full Stack Projects',
    timeline: 'Dec 2017',
    image: 'images/projects/ic_17.png',
    link: 'https://github.com/Xiaoyan-L/udacity-projects/tree/master/4-item%20catalog',
    bulletin: [
      'A list of items within a variety of categories application, built with Python, Flask, Auth 2.0',
      'Provided Google Authentication & Authorization login and register, CRUD for login user, and a JSON endpoint.'
    ]
  },
  {
    title: 'Bank Sub-Branch Management System',
    catagory: 'work',
    type: '',
    timeline: 'Dec 2017',
    image: 'images/projects/default.png',
    link: 'https://github.com/Xiaoyan-L/myworkinbank/tree/master/sub-branch-management-system',
    bulletin: [
      `A central portal for management to supervise the operations of sub-branches, built with Java/Spring,
       Hibernate, Struts, Javascript, Sybase IQ and ASE, and deployed in IBM Websphere`,
      `Independently designed the database and developed the first launch version and led the second
       version with 4 team members.`,
      `Deployed in more than 1100 sub-branches, provides more than 50 reports and forms, and serves more
       than 15,000 employees.`
    ]
  },
  {
    title: 'Project Management System for IT Department',
    catagory: 'work',
    type: '',
    timeline: 'Oct 2012 - May 2013',
    image: 'images/projects/default.png',
    link: '',
    bulletin: [
      `Independently designed and developed the database 
      and system built with C#, ASP.NET, HTML, Javascript, jQuery, CSS.`,
      `Provides basic internal project progress management and tracking, 
       projects searching and generates 10 various reports.`,
      `Utilized in the year-end performance assessment of IT Department.`
    ]
  }
];


var navbar = [
  {
    name: 'Home',
    link: 'index.html'
  },
  {
    name: 'Work Projects',
    link: 'projects.html?work'
  },
  {
    name: 'course',
    link: 'projects.html?work'
  }
];
