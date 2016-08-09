// Bio JSON object
var bio = {
  "name": "Cheryl Spanos",
  "role": "Software Engineer and Author",
  "welcomeMessage": "Welcome to my online resume.",
  "biopic": "images/Cheryl.jpg",
  "contacts": {
    "mobile": "510-555-5555",
    "email": "chspanos3(at)gmail(dot)com",
    "github": "chspanos",
    "location": "San Francisco Bay Area"
  },
  "footercontacts": {
    "github": "https://github.com/chspanos",
    "linkedin": "https://www.linkedin.com/in/cheryl-spanos-4b9471a5",
    "wordpress": "https://writersotj.wordpress.com/"
  },
  "skills" : [
    "More than five years of software engineering experience in CAD/EDA",
    "Excellent written communication skills",
    "Detail-oriented and organized problem solver",
    "Strong analytical skills",
    "Creative and artistic"
  ]
};

// Work JSON ojbect
var work = {
  "jobs": [
    {
      "employer": "UC Berkeley Extension & others",
      "title": "Student",
      "location": "San Franscisco Bay Area, CA",
      "dates": "2015-present",
      "description": "Completed coursework in C++ programming and Python, \
      earning an A in each class. Currently enrolled in Udacity's Front-End \
      Web Developer nanodegree."
    },
    {
      "employer": "Self-employed",
      "title": "Writer",
      "location": "San Franscisco Bay Area, CA",
      "dates": "2003-2014",
      "description": "Penned three novels and over a dozen short stories in \
      various genres, including memoir, literary, young adult (YA), and \
      children's fiction. Published short fiction in <em>Hunger Mountain</em>, \
      <em>CWC Literary Review</em>, <em>Stories for Children Magazine</em>, \
      and <em>Beyond Centuri</em>."
    },
    {
      "employer": "Grace Cooperative Preschool",
      "title": "Treasurer (volunteer position)",
      "location": "Walnut Creek, CA",
      "dates": "2000-2002",
      "description": "Managed the finances, including tuition, monthly billing, \
      and the annual budget for a preschool of about 25 families."
    },
    {
      "employer": "Hewlett-Packard Company",
      "title": "Software Development Engineer",
      "location": "Santa Clara, CA",
      "dates": "1990-1996",
      "description": "Investigated the use of formal verification tools for \
      hardware design. Successfully employed symbolic model checking \
      techniques to detect deadlocks on a bus converter chip. Designed and \
      implemented software for integrating new tools within HP's design \
      methodology."
    },
  ]
};

// Projects JSON object
var projects = {
  "projects": [
    {
      "title": "Portfolio",
      "dates": "2016",
      "description": "A responsive website that will be used to showcase my Udacity Front-End Web \
      Developer projects",
      "images": ["images/portfolio-img1.jpg", "images/portfolio-img2.jpg"]
    },
    {
      "title": "Online Resume",
      "dates": "2016",
      "description": "An online resume that uses JSON objects to store resume \
      data and employs javaScript and jQuery to populate the HTML with this data",
      "images": ["images/resume-img1.jpg"]
    }
  ]
};

// Education JSON object
var education = {
  "schools": [
    {
      "name": "Brown University",
      "location": "Providence, RI",
      "degree": "PhD",
      "dates": "1990",
      "url": "https://www.brown.edu/",
      "majors": ["Computer Science"]
    },
    {
      "name": "Brown University",
      "location": "Providence, RI",
      "degree": "MS",
      "dates": "1986",
      "url": "https://www.brown.edu/",
      "majors": ["Computer Science"]
    },
    {
      "name": "Union College",
      "location": "Schenectady, NY",
      "degree": "BS",
      "dates": "1984",
      "url": "https://www.union.edu/",
      "majors": ["Computer Science"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "in progress",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Python Programming",
      "school": "UC Berkeley Extension",
      "dates": "2016",
      "url": "http://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId=40968"
    },
    {
      "title": "C++ Programming I",
      "school": "UC Berkeley Extension",
      "dates": "2015",
      "url": "http://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId=40931"
    }
  ]
};

// function to display top contact info
function displayContacts() {
  // modify the generic contact template to use zocial icons
  var HTMLmyGeneric = '<li class="flex-item"><span class="orange-text %zocial%"></span><span class="white-text">%data%</span></li>';

  // iterate through each contacts object
  for (var contactKey in bio.contacts) {
    if (bio.contacts.hasOwnProperty(contactKey)) {
      // set the zocial class
      var zocialClass;

      switch (contactKey) {
        case "mobile":
          zocialClass = "zocial-call";
          break;
        case "email":
          zocialClass = "zocial-email";
          break;
        case "twitter":
          zocialClass = "zocial-twitter";
          break;
        case "github":
          zocialClass = "zocial-github";
          break;
        case "location":
          zocialClass = "zocial-guest";
          break;
        default:
          zocialClass = "";
      };

      // format and display each contact
      var formattedContact = HTMLmyGeneric.replace("%zocial%", zocialClass).replace("%data%", bio.contacts[contactKey]);
      $("#topContacts").append(formattedContact);
    }
  };
}

// function to add new class to skill items
function addSkillClass() {
  var skillsList;

  skillsList = $("#skills").find("li");
  skillsList.addClass("skill");
}

// Bio display method definition
bio.display = function() {
  // format and display name and role
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // format and display contacts
  displayContacts();

  // format and display biopic
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  // format and display welcomeMessage
  var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMsg);

  // Format and display skills
  if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill){
      // format and display each skill
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    });
  }

  // Add skill class to skill list items for styling
  addSkillClass();
}

// Work display method definition
work.display = function() {
  // iterate through the jobs array
  work.jobs.forEach(function(thisJob){

    // start a new job entry
    $("#workExperience").append(HTMLworkStart);

    // format and display employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", thisJob.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", thisJob.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    // format and display dates
    if (thisJob.hasOwnProperty("dates")) {
      var formattedEmpDates = HTMLworkDates.replace("%data%", thisJob.dates);
      $(".work-entry:last").append(formattedEmpDates);
    };

    // format and display location
    if (thisJob.hasOwnProperty("location")) {
      var formattedEmpLocation = HTMLworkLocation.replace("%data%", thisJob.location);
      $(".work-entry:last").append(formattedEmpLocation);
    };

    // format and display job description
    if (thisJob.hasOwnProperty("description")) {
      var formattedEmpDesc = HTMLworkDescription.replace("%data%", thisJob.description);
      $(".work-entry:last").append(formattedEmpDesc);
    }
  });
}

// Project display method definition
projects.display = function() {
  // iterate through the projects array
  projects.projects.forEach(function(thisProject){

    // start a new project entry
    $("#projects").append(HTMLprojectStart);

    // format and display title
    var formattedProjTitle = HTMLprojectTitle.replace("%data%", thisProject.title);
    $(".project-entry:last").append(formattedProjTitle);

    // format and display dates
    if (thisProject.hasOwnProperty("dates")) {
      var formattedProjDates = HTMLprojectDates.replace("%data%", thisProject.dates);
      $(".project-entry:last").append(formattedProjDates);
    };

    // format and display description
    if (thisProject.hasOwnProperty("description")) {
      var formattedProjDesc = HTMLprojectDescription.replace("%data%", thisProject.description);
      $(".project-entry:last").append(formattedProjDesc);
    };

    // format and display images
    if (thisProject.hasOwnProperty("images")) {
      // display each image
      thisProject.images.forEach(function(image){
        var formattedProjImg = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedProjImg);
      });
    }
  });
}

// Function to display schools
function displaySchools() {
  // iterate through the schools array
  education.schools.forEach(function(thisSchool){

    // start a new school entry
    $("#education").append(HTMLschoolStart);

    // format and display school name, link, and degree
    var formattedName = HTMLschoolName.replace("#", thisSchool.url).replace("%data%", thisSchool.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", thisSchool.degree);
    var formattedNameDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree);

    // format and display dates
    if (thisSchool.hasOwnProperty("dates")) {
      var formattedDates = HTMLschoolDates.replace("%data%", thisSchool.dates)
      $(".education-entry:last").append(formattedDates);
    }

    // format and display location
    if (thisSchool.hasOwnProperty("location")) {
      var formattedLoc = HTMLschoolLocation.replace("%data%", thisSchool.location)
      $(".education-entry:last").append(formattedLoc);
    }

    // format and display majors
    if (thisSchool.hasOwnProperty("majors")) {
      // display each major
      thisSchool.majors.forEach(function(major){
        var formattedMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedMajor);
      });
    }
  });
}

// Function to display on-line courses
function displayOnlineCourses() {
  if (education.onlineCourses.length > 0) {
    // define custom format for URL message with distinct class for styling
    var HTMLmyOnlineURL = '<br><a class="url" href="#">%data%</a>';

    // display heading
    $("#education").append(HTMLonlineClasses);

    // iterate through the on-line courses array
    education.onlineCourses.forEach(function(thisCourse){

      // start a new school entry
      $("#education").append(HTMLschoolStart);

      // format and display course title, link, and school
      var formattedCourseName = HTMLonlineTitle.replace("#", thisCourse.url).replace("%data%", thisCourse.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", thisCourse.school);
      var formattedName = formattedCourseName + formattedSchool;
      $(".education-entry:last").append(formattedName);

      // format and display dates
      if (thisCourse.hasOwnProperty("dates")) {
        var formattedDates = HTMLonlineDates.replace("%data%", thisCourse.dates)
        $(".education-entry:last").append(formattedDates);
      }

      // format and display url link
      var formattedUrl = HTMLmyOnlineURL.replace("#", thisCourse.url).replace("%data%", thisCourse.url);
      $(".education-entry:last").append(formattedUrl);
    });
  }
}

// Education display method definition
education.display = function() {
  displaySchools();
  displayOnlineCourses();
}

// function to display footer contact info using zocial icons
function displayFooter() {
  // Generic form for footer
  var HTMLfooterGeneric = '<li class="flex-item"><a class="orange-text %zocial%" href="#"><span class="white-text">%data%</span></a></li>';

  // iterate through each contacts object
  for (var contactKey in bio.footercontacts) {
    if (bio.footercontacts.hasOwnProperty(contactKey)) {
      // set variables
      var zocialClass, myRef, myData;

      switch (contactKey) {
        case "twitter":
          zocialClass = "zocial-twitter";
          myData = "Twitter";
          break;
        case "github":
          zocialClass = "zocial-github";
          myData = "Github";
          break;
        case "linkedin":
          zocialClass = "zocial-linkedin";
          myData = "LinkedIn";
          break;
        case "wordpress":
          zocialClass = "zocial-wordpress";
          myData = "Wordpress";
          break;
        default:
          zocialClass = "";
          myData = contactKey;
      };

      myRef = bio.footercontacts[contactKey];

      // format and display contact
      var formattedContact = HTMLfooterGeneric.replace("%zocial%", zocialClass).replace("#", myRef).replace("%data%", myData);
      $("#footerContacts").append(formattedContact);
    }
  };
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
  $("#mapDiv").append(googleMap);

  // call function to display contacts in footer
  //displayContacts("#footerContacts");
  displayFooter();
}

displayResume();
