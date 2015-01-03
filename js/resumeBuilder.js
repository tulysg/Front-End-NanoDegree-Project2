
////////////////////////////////////////////////Start of JSON DATA////////////////////////////////////////////////////////////////////////////////////////
var bio = {

    "name": "Tuly Sengupta",
    "role": "Web developer/Instructional designer",
    "contacts": {
        "mobile": "925-548-9579",
        "email": "tulysg@gmail.com",
        "github": "tulysg",
        "twitter": "@tulysg",
        "location": "Austin,TX"
    },
    "welcomeMsg": "Welcome to My Resume",

    "skills": ["CSS", "HTML", "JavaScript", "e-learning", "Web development",
        "Instructional design", "Adobe Creative Suite",
        "Project Management"
    ],

    "bioPic": "images/self.jpg"
}

var education = {
    "schools": [{
            "name": "California State University, East Bay",
            "location": "Hayward, CA, USA",
            "major": ["Educational Technology Leadership"],
            "graduation year": "2012",
            "degree": "Masters",
            "url": "http://www.csueastbay.edu/"

        },

        {
            "name": "University Of Dhaka",
            "location": "Dhaka, Bangladesh",
            "major": ["English"],
            "graduation year": "2008",
            "degree": "Masters",
            "url": "http://www.du.ac.bd/"
        }

    ],

    "onlineClasses": [{
            "name": "Front-End Web Development Nano Degree",
            "school": "Udacity",
            "dates": "2014-2015",
            "url": "https://www.udacity.com/"
        },

        {
            "name": "Introduction to CSS3 and HTML5",
            "school": "Texas State University",
            "dates": "2014",
            "url": "http://www.txstate.edu/continuinged/"
        },

        {
            "name": "Learn HTML5 Programming from Scratch",
            "school": "Udemy",
            "dates": "2013-2014",
            "url": "https://www.udemy.com//"
        },

        {
            "name": "PMP Certification Prep 1",
            "school": "Las Positas College",
            "dates": "2012",
            "url": "http://www.laspositascollege.edu/"
        }, {
            "name": "Project Management Fandamentals",
            "school": "Las Positas College",
            "dates": "2011",
            "url": "http://www.laspositascollege.edu/"
        }

    ]
}


var work = {
    "jobs": [

        {
            "employer": "STAND!, in collaboration with CSU Eastbay and University of California,Berkeley",
            "title": "Instructional Designer Internship ",
            "location": "California, USA",
            "dates": "January 2011- June 2011",
            "description": "Our team worked in helping design a series of e-learning workshops to empower the clients of STAND!Families Free of Violence a non-profit organization.Developed Instructions for Job Search, Job Application and Resume Submission.Arranged meetings, presentations, and adhered to project timeline.Scripting and recording training videos and detailed interactive simulations."
        }
    ]


}

var projects = {
    "project": [

        {
            "title": "Master Project",
            "date": "2012",
            "description": "Interactive Multimedia E-learning Environment with Web tools, Apps and Social media- was my masters class project. This was a combined project with five different projects, where I have developed websites on space education. Each interactive website was designed for middle school students with games, quiz, texts, apps and images.",
            "images": ["images/brochure1.jpg", "images/brochure2.jpg"],
            "url": "http://www.espacebook.net/"
        },

        {
            "title": "Mockup to Website",
            "date": "2014",
            "description": "Given in our Udacity project work, this responsive webpage is a replicated design mockup with HTML and CSS and boostrap framework.",
            "images": ["images/projectsample.jpg"],
            "url": "https://github.com/tulysg/Front-End-NanoDegree-Project1/blob/master/index.html"
        }

    ]
}

////////////////////////////////////////////////End of JSON/////////////////////////////////////////////////////


////////////////////////////////////////////////Bio start//////////////////////////////////////////////////////

 bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile, formattedEmail,
        formattedGithub, formattedTwitter, formattedLocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedbioPic);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
            $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
}

bio.display();

///////////////////////////////////////THIS IS FOR WORK EXPERIENCE ///////////////////////////////////////////////

 work.display = function () {

    for (exp in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[exp].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[exp].title);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[exp].location);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[exp].dates);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[exp].description);

        $(".work-entry:last").append(formattedworkEmployer);
        $(".work-entry:last").append(formattedworkTitle);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);

    }
}

work.display();

///////////////////////////////////////// MAKE IT A PROJECT////////////////////////////////////////////////////

 projects.display = function () {

    for (pro in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[pro].title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[pro].date);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[pro].description);
        var formattedprojectURL = HTMLprojectURL.replace("%data%", projects.project[pro].url);
        var formattedprojectLink = formattedprojectURL.replace('#', projects.project[pro].url);

        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);
        $(".project-entry:last").append(formattedprojectLink);

        if (projects.project[pro].images.length > 0) {
            for (image in projects.project[pro].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.project[pro].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
}

projects.display();

//////////////////////////////////////////////// THIS IS FOR EDUCATION ////////////////////////////////////////
 education.display = function () {

    for (edu in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        var formattedschooldegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu]["graduation year"]);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
        var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[edu].url);
        var formattedschoolLink = formattedschoolURL.replace('#', education.schools[edu].url);

        $(".education-entry:last").append(formattedschoolName);
        $(".education-entry:last").append(formattedschooldegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedschoolMajor);
        $(".education-entry:last").append(formattedschoolLink);
    }



    $("#education").append(HTMLonlineClasses);
    for (olc in education.onlineClasses) {

        $("#education").append(HTMLschoolStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[olc].name);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[olc].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[olc].dates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[olc].url);
        var formattedonlineLink = formattedonlineURL.replace('#', education.onlineClasses[olc].url);
        $(".education-entry:last").append(formattedonlineTitle);
        $(".education-entry:last").append(formattedonlineSchool);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineLink);
    }
}
education.display();


 
 ////////////   for google  map /////////////////////////////////////////////////////////////////////////////

function displayWhereiLivedAndWorked() {
$("#mapDiv").append(googleMap);
}
displayWhereiLivedAndWorked();




