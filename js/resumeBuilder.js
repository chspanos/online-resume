// Bio JSON object
var bio = {
  "name": "Cheryl Spanos",
  "role": "Software Engineer and Author",
  "welcomeMessage": "Welcome to my online resume.",
  "biopic": "images/Cheryl.jpg",
  "contacts": {
    //"mobile": "555-555-5555",
    //"email": "chspanos@myemail.com",
    "linkedin": "https://www.linkedin.com/in/cheryl-spanos-4b9471a5",
    "github": "https://github.com/chspanos",
    "wordpress": "https://writersotj.wordpress.com/",
    "location": "San Francisco Bay Area"
  },
  "footercontacts": {
    "github": "https://github.com/chspanos",
    "linkedin": "https://www.linkedin.com/in/cheryl-spanos-4b9471a5",
    "wordpress": "https://writersotj.wordpress.com/"
  },
  "skills" : [
    "More than five years of software engineering experience",
    "Excellent written communication skills",
    "Detail-oriented and organized problem solver",
    "Strong analytical skills",
    "Creative and artistic"
  ]
};

// Work JSON ojbect
var work = {
  "jobs": [{
      "employer": "UC Berkeley Extension & others",
      "title": "Student",
      "location": "San Francisco Bay Area, CA",
      "dates": "2015-present",
      "description": "Completed coursework in C++ programming and Python, earning an A in each class. Currently enrolled in Udacity's Front-End Web Developer nanodegree."
    },
    {
      "employer": "Self-employed",
      "title": "Writer",
      "location": "San Francisco Bay Area, CA",
      "dates": "2003-2014",
      "description": "Penned three novels and over a dozen short stories in various genres, including memoir, literary, young adult (YA), and children's fiction.",
      "results": [
        "Published short fiction in <em>Hunger Mountain</em>, <em>CWC Literary Review</em>, <em>Stories for Children Magazine</em>, and <em>Beyond Centuri</em>.",
        "Won honorable mention in the very competitive annual <em>Writer's Digest</em> writing contest in the mainstream/literary category.",
        "Garnered honorable mention and semi-finalist standings in several other writing contests."
      ]
    },
    {
      "employer": "Grace Cooperative Preschool",
      "title": "Treasurer",
      "location": "Walnut Creek, CA",
      "dates": "2000-2002",
      "description": "Managed the finances, including tuition, monthly billing, and the annual budget for a preschool of about 25 families."
    },
    {
      "employer": "Hewlett-Packard Company",
      "title": "Software Development Engineer",
      "location": "Santa Clara, CA",
      "dates": "1990-1996",
      "description": "Investigated the use of formal verification tools for hardware design. Designed and implemented software for integrating new tools within HP's design methodology.",
      "results": [
        "Successfully employed symbolic model checking techniques to detect deadlocks on a bus converter chip.",
        "Won best paper award for work on symbolic model checking and was published in the journal <em>Formal Methods in Systems Design</em>.",
        "Employed BDDs (binary decision diagrams) to efficiently and automatically generate Verilog library models.",
        "Won best poster award for work on the use of BDDs in library model generation."
      ]
    }
  ]
};

// Projects JSON object
var projects = {
  "projects": [{
      "title": "Portfolio",
      "dates": "2016",
      "description": "A responsive website that will be used to showcase my Udacity Front-End Web Developer projects",
      "images": ["images/portfolio-img1.jpg", "images/portfolio-img2.jpg"],
      "url": "https://chspanos.github.io/portfolio"
    },
    {
      "title": "Online Resume",
      "dates": "2016",
      "description": "An online resume that uses JSON objects to store resume data and employs JavaScript and jQuery to populate the HTML with this data",
      "images": ["images/resume-img1.jpg"],
      "url": "https://chspanos.github.io/online-resume"
    },
    {
      "title": "Arcade Game",
      "dates": "2016",
      "description": "A Frogger-style arcade game whose Player and Enemy objects and methods were coded using object-oriented JavaScript",
      "images": ["images/arcade7.jpg", "images/arcade5.jpg"],
      "url": "https://chspanos.github.io/arcade-game"
    },
    {
      "title": "Web Optimization",
      "dates": "2016",
      "description": "Optimized the critical rendering path of a provided mobile portfolio to achieve a PageSpeed score of 95/100 on load and scroll at 60 fps",
      "images": ["images/web-optim5.jpg", "images/web-optim7.jpg"],
      "url": "https://chspanos.github.io/mobile-portfolio"
    },
    {
      "title": "Neighborhood Map",
      "dates": "2016",
      "description": "A neighborhood map created with Google Maps and other APIs and built on a MVVM framework implemented with Knockout",
      "images": ["images/neighborhood1.jpg"],
      "url": "https://chspanos.github.io/neighborhood-map"
    }
  ]
};

// Education JSON object
var education = {
  "schools": [{
      "name": "Brown University",
      "location": "Providence, RI",
      "degree": "PhD",
      // Replaced date string content with thesis/honors
      "dates": "Thesis: An Approach to Uncertainty in VLSI Design",
      "url": "https://www.brown.edu/",
      "majors": ["Computer Science"]
    },
    {
      "name": "Brown University",
      "location": "Providence, RI",
      "degree": "MS",
      // Replaced date string content with thesis/honors
      "dates": "Honors: Sigma Xi",
      "url": "https://www.brown.edu/",
      "majors": ["Computer Science"]
    },
    {
      "name": "Union College",
      "location": "Schenectady, NY",
      "degree": "BS",
      // Replaced date string content with thesis/honors
      "dates": "Honors: Summa Cum Laude, Phi Beta Kappa",
      "url": "https://www.union.edu/",
      "majors": ["Computer Science"]
    }
  ],
  "onlineCourses": [{
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "in progress",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Python Programming",
      "school": "UC Berkeley Extension",
      "dates": "2016",
      "url": "https://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId=40968"
    },
    {
      "title": "C++ Programming I",
      "school": "UC Berkeley Extension",
      "dates": "2015",
      "url": "https://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId=40931"
    }
  ]
};

// function to display top contact info
function displayContacts() {
  // modify the generic contact template to use icon fonts
  var HTMLmyGeneric = '<li class="flex-item"><a class="white-text %iconfont%" href="#"><span class="orange-text">%data%</span></a></li>';

  // iterate through each contacts object
  for (var contactKey in bio.contacts) {
    if (bio.contacts.hasOwnProperty(contactKey)) {
      // set the iconfont class and variables
      var iconClass, data, ref;

      switch (contactKey) {
        case 'mobile':
          iconClass = 'fa-phone';
          data =  bio.contacts[contactKey];
          ref = ' ';
          break;
        case 'email':
          iconClass = 'fa-envelope-o';
          data = bio.contacts[contactKey];
          ref = ' ';
          break;
        case 'twitter':
          iconClass = 'fa-twitter';
          data = 'Twitter';
          ref = bio.contacts[contactKey];
          break;
        case 'github':
          iconClass = 'fa-github';
          data = 'GitHub';
          ref = bio.contacts[contactKey];
          break;
        case 'location':
          iconClass = 'fa-globe';
          data = bio.contacts[contactKey];
          ref = ' ';
          break;
        case 'linkedin':
          iconClass = 'fa-linkedin';
          data = 'LinkedIn';
          ref = bio.contacts[contactKey];
          break;
        case 'wordpress':
          iconClass = 'fa-wordpress';
          data = 'Wordpress';
          ref = bio.contacts[contactKey];
          break;
        default:
          iconClass = '';
          data = bio.contacts[contactKey];
          ref = ' ';
      }

      // format and display each contact
      var formattedContact = HTMLmyGeneric.replace('%iconfont%', iconClass).replace('#', ref).replace('%data%', data);
      $('#topContacts').append(formattedContact);
    }
  }
}

// Bio display method definition
bio.display = function() {
  // format and display name and role
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);

  // format and display contacts
  displayContacts();

  // format and display biopic
  var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
  $('#header').append(formattedPic);
  // add alt description attribute to image
  $('img:last').attr('alt', 'Biopic');

  // format and display welcomeMessage
  var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('#header').append(formattedMsg);

  // Format and display skills
  if (bio.skills.length > 0) {

    $('#header').append(HTMLskillsStart);

    bio.skills.forEach(function(skill){
      // format and display each skill
      var formattedSkill = HTMLskills.replace('%data%', skill);
      $('#skills').append(formattedSkill);

      // Add skill class to list element for styling
      $('li:last').addClass('skill');
    });
  }
};

// function to display new job subsection - an accomplishments list
function displayResults(resultsList) {
  // define accomplishment list templates
  var HTMLresultsStart = '<ul class="results"></ul>';
  var HTMLresults = '<li class="result"><p>%data%</p></li>';

  // start a new results list
  $('.work-entry:last').append(HTMLresultsStart);

  // iterate through results array
  resultsList.forEach(function(thisResult){
    // format and display result
    var formattedResult = HTMLresults.replace('%data%', thisResult);
    $('.results:last').append(formattedResult);
  });
}

// Work display method definition
work.display = function() {
  // iterate through the jobs array
  work.jobs.forEach(function(thisJob){

    // start a new job entry
    $('#workExperience').append(HTMLworkStart);

    // format and display employer and title
    var formattedEmployer = HTMLworkEmployer.replace('%data%', thisJob.employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', thisJob.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $('.work-entry:last').append(formattedEmployerTitle);

    // format and display dates
    if (thisJob.hasOwnProperty('dates')) {
      var formattedEmpDates = HTMLworkDates.replace('%data%', thisJob.dates);
      $('.work-entry:last').append(formattedEmpDates);
    }

    // format and display location
    if (thisJob.hasOwnProperty('location')) {
      var formattedEmpLocation = HTMLworkLocation.replace('%data%', thisJob.location);
      $('.work-entry:last').append(formattedEmpLocation);
    }

    // format and display job description
    if (thisJob.hasOwnProperty('description')) {
      var formattedEmpDesc = HTMLworkDescription.replace('%data%', thisJob.description);
      $('.work-entry:last').append(formattedEmpDesc);
    }

    // format and display results (if any)
    if (thisJob.hasOwnProperty('results')) {
      displayResults(thisJob.results);
    }
  });
};

// Project display method definition
projects.display = function() {
  // iterate through the projects array
  projects.projects.forEach(function(thisProject){

    // start a new project entry
    $('#projects').append(HTMLprojectStart);

    // format and display title
    var formattedProjTitle = HTMLprojectTitle.replace('%data%', thisProject.title);
    if (thisProject.hasOwnProperty('url')) {
      // insert link
      formattedProjTitle = formattedProjTitle.replace('#', thisProject.url);
    }
    $('.project-entry:last').append(formattedProjTitle);

    // format and display dates
    if (thisProject.hasOwnProperty('dates')) {
      var formattedProjDates = HTMLprojectDates.replace('%data%', thisProject.dates);
      $('.project-entry:last').append(formattedProjDates);
    }

    // format and display description
    if (thisProject.hasOwnProperty('description')) {
      var formattedProjDesc = HTMLprojectDescription.replace('%data%', thisProject.description);
      $('.project-entry:last').append(formattedProjDesc);
    }

    // format and display images
    if (thisProject.hasOwnProperty('images')) {
      // create image description for alt attribute
      var imageDesc = thisProject.title + ' image';

      // iterate through images
      thisProject.images.forEach(function(image){
        // display image
        var formattedProjImg = HTMLprojectImage.replace('%data%', image);
        $('.project-entry:last').append(formattedProjImg);

        // add alt attribute to image
        $('img:last').attr('alt', imageDesc);
      });
    }
  });
};

// Function to display schools
function displaySchools() {
  // iterate through the schools array
  education.schools.forEach(function(thisSchool){

    // start a new school entry
    $('#education').append(HTMLschoolStart);

    // format and display school name, link, and degree
    var formattedName = HTMLschoolName.replace('#', thisSchool.url).replace('%data%', thisSchool.name);
    var formattedDegree = HTMLschoolDegree.replace('%data%', thisSchool.degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $('.education-entry:last').append(formattedNameDegree);

    // format and display dates
    if (thisSchool.hasOwnProperty('dates')) {
      var formattedDates = HTMLschoolDates.replace('%data%', thisSchool.dates);
      $('.education-entry:last').append(formattedDates);
    }

    // format and display location
    if (thisSchool.hasOwnProperty('location')) {
      var formattedLoc = HTMLschoolLocation.replace('%data%', thisSchool.location);
      $('.education-entry:last').append(formattedLoc);
    }

    // format and display majors
    if (thisSchool.hasOwnProperty('majors')) {
      // display each major
      thisSchool.majors.forEach(function(major){
        var formattedMajor = HTMLschoolMajor.replace('%data%', major);
        $('.education-entry:last').append(formattedMajor);
      });
    }
  });
}

// Function to display on-line courses
function displayOnlineCourses() {
  if (education.onlineCourses.length > 0) {
    // display heading
    $('#education').append(HTMLonlineClasses);

    // iterate through the on-line courses array
    education.onlineCourses.forEach(function(thisCourse){

      // start a new school entry
      $('#education').append(HTMLschoolStart);

      // format and display course title, link, and school
      var formattedCourseName = HTMLonlineTitle.replace('#', thisCourse.url).replace('%data%', thisCourse.title);
      var formattedSchool = HTMLonlineSchool.replace('%data%', thisCourse.school);
      var formattedName = formattedCourseName + formattedSchool;
      $('.education-entry:last').append(formattedName);

      // format and display dates
      if (thisCourse.hasOwnProperty('dates')) {
        var formattedDates = HTMLonlineDates.replace('%data%', thisCourse.dates);
        $('.education-entry:last').append(formattedDates);
      }

      // format and display url link
      var formattedUrl = HTMLonlineURL.replace('#', thisCourse.url).replace('%data%', thisCourse.url);
      $('.education-entry:last').append(formattedUrl);
      // add url class to anchor for styling
      $('a:last').addClass('url');
    });
  }
}

// Education display method definition
education.display = function() {
  displaySchools();
  displayOnlineCourses();
};

// function to display footer contact info using icon fonts
function displayFooter() {
  // Template for footer contact item
  var HTMLfooterGeneric = '<li class="flex-item"><a class="white-text %iconfont%" href="#"><span class="orange-text">%data%</span></a></li>';

  // iterate through each contacts object
  for (var contactKey in bio.footercontacts) {
    if (bio.footercontacts.hasOwnProperty(contactKey)) {
      // set variables
      var iconClass, myRef, myData;

      switch (contactKey) {
        case 'twitter':
          iconClass = 'fa-twitter';
          myData = 'Twitter';
          break;
        case 'github':
          iconClass = 'fa-github';
          myData = 'Github';
          break;
        case 'linkedin':
          iconClass = 'fa-linkedin';
          myData = 'LinkedIn';
          break;
        case 'wordpress':
          iconClass = 'fa-wordpress';
          myData = 'Wordpress';
          break;
        default:
          iconClass = '';
          myData = contactKey;
      }

      myRef = bio.footercontacts[contactKey];

      // format and display contact
      var formattedContact = HTMLfooterGeneric.replace('%iconfont%', iconClass).replace('#', myRef).replace('%data%', myData);
      $('#footerContacts').append(formattedContact);
    }
  }
}

// Main function to display the resume
function displayResume() {
  // display bio
  bio.display();

  // display work
  work.display();

  // display projects
  projects.display();

  // display education
  education.display();

  // Add the map section
  $('#mapDiv').append(googleMap);

  // call function to display contacts in footer
  displayFooter();
}

displayResume();
