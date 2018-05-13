var bio = {
    "name": "rosevelt,",
    "role": "designer",
    "contacts": {
        "mail_loco": "aa@aa.com",
        "phone": "671069828",
    },
    "welcomeMessage": "Noticias diarias de skate, videos, tutoriales, tienda online y tienda de skate en Madrid desde 2005. Todo sobre el skateboard en una sola web.",
    "skills": ["comer", "beber", "trabajar"],
    "biopic": "images/me.jpg"
};

var education = {
    "schools": [{
        "name": "cenepa",
        "alumnos": "500"

    }, {
        "name": "dar",
        "alumnos": "1000"
    }],
    "onlineCourses": [{
        "title": "javascript",
        "price": "100"

    }, {
        "title": "css",
        "price": "1000"
    }]
};

var work = {
    jobs: [{
        "employer": "Diego A.",
        "title": "designer jr",
        "date": "abril 2005 - march 2008",
        "location": "Mountain View, CA",
        "description": "hacia cosas locas  metus mauris, finibus et porta vel, egestas id massa. In efficiturquis libero nec cursus. Vivamus semper consectetur erat vitae mollis. Aliquam erat volutpat. Etiam sed risus tristique ante ullamcorper malesuada. Nullam nec dignissim massa, id blandit augue. Morbi quis mollis ligula, eget tempus lectus. Mauris tempus magna ut hendrerit dignissim. "
    }, {
        "employer": "Raul R.",
        "title": "designer/webdesign",
        "date": "abril 2008 - today",
        "location": "Seattle, WA",
        "description": "hacia Aliquam metus mauris, finibus et porta vel, egestas id massa. In efficiturquis libero nec cursus. Vivamus semper consectetur erat vitae mollis. Aliquam erat volutpat. Etiam sed risus tristique ante ullamcorper malesuada. Nullam nec dignissim massa, id blandit augue. Morbi quis mollis ligula, eget tempus lectus. Mauris tempus magna ut hendrerit dignissim."
    }]
};

var projects = {
    projects: [{
        "title": "Amazin foods",
        "date": 2017,
        "description": "hacer el packaging de unos productos",
        "img": ["http://lorempixel.com/output/people-q-c-301-273-2.jpg", "http://lorempixel.com/output/people-q-c-301-273-2.jpg"]
    }, {
        "title": "Front v4",
        "date": 2016,
        "description": "mejorar la web de nutritienda",
        "img": ["http://lorempixel.com/output/people-q-c-301-273-2.jpg"]
    }]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", "Rosevelt Barahona");
    var formattedRole = HTMLheaderRole.replace("%data%", "front-end");
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedmsg);
    $("#header").append(formattedBioPic);

    $("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
        console.log(i);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

    for (contact in bio.contacts) {
        var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
        formattedContact = formattedContact.replace("%contact%", contact);
        $("#topContacts").append(formattedContact);
    }
    /*    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);

        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
    }*/
};

projects.display = function() {
    //recorrer projects  , capturar  y añadir
    for (desc in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[desc].title);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[desc].date);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[desc].description);
        //var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[desc].img);
        var formattedEmployerTotal = formattedProjectTitle + formattedProjectDate + formattedDescription;
        $(".project-entry:last").append(formattedEmployerTotal);

        if (projects.projects[desc].img.length > 0) {
            for (image in projects.projects[desc].img) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[desc].img[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }

        }
    }
};

education.display = function() {

    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedschool = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedAlumnos = HTMLschoolDates.replace("%data%", education.schools[i].alumnos);
        $(".education-entry:last").append(formattedschool + formattedAlumnos);
    }

    $("#education").append(HTMLonlineClasses);

    if (education.onlineCourses.length > 0) {
        for (online in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedTitleEducation = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
            var formattedPrice = HTMLonlineDates.replace("%data%", education.onlineCourses[online].price);
            $(".education-entry:last").append(formattedTitleEducation + formattedPrice);
        }
    }

};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDate + formattedDescription;

        $(".work-entry:last").append(formattedEmployerTitle);
    }
};

projects.display();
work.display();
bio.display();
education.display();
$("#mapDiv").append(googleMap);


$("#main").append(internationalizeButton);

function inName() {
    var name = $("#name").text().split(" ");
    nameToTransform = name.length - 1;
    nameMofified = name[0] + " " + name[nameToTransform].toUpperCase();
    $("#name").text(nameMofified);
}
$("button").click(inName);






/////////////////////////////////////////////////////////
// EXTRAS
/////////////////////////////////////////////////////////


function capitalizeIt(texto) {
    texto = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    console.log(texto);
}
capitalizeIt("diego");
// BUSCANDO WORK LOCATIONS CON BUCLE FOR 
function locationizer(work_obj) {
    locationsWork = [];
    for (i = 0; i < work_obj.jobs.length; i++) {
        var location = work_obj.jobs[i].location;
        locationsWork.push(location);
    }
    return locationsWork;
}
console.log(locationizer(work));

// BUSCANDO WORK LOCATIONS CON FOR IN  
function locationizer2(work_obj) {
    locationsWork = [];
    for (location in work_obj.jobs) {
        var location = work_obj.jobs[location].location;
        locationsWork.push(location);
    }
    return locationsWork;
}
console.log(locationizer2(work));


//document.getElementById("main").innerHTML += internationalizeButton;

/*function inNamexx (nombreRe){
    var name = nombreRe.split(" ");
    nameToTransform = name.length - 1;
    nameMofified = name[0] + " " + name[nameToTransform].toUpperCase();
    console.log(nameMofified);
}
inNamexx("pepe perez");*/




var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    newmoonWalkers = [];
    for ( i = 0 ; i < names.length ; i++){
       var namex = names[i].split(" ");
       namex.reverse();
       nameString = namex.join(" ");
       newmoonWalkers.push(nameString);
    }
    names = newmoonWalkers.sort();
    return names;

}

console.log(alphabetizer(moonWalkers));


for (item in moonWalkers){
    console.log(moonWalkers[item]);
}


//////////

var edad = 6;

if (edad > 0 && edad < 11) {
    if (edad > 5) {
        console.log(" tienes mas de 5 años");
    } else {
        console.log("tienes menos de 5 años");
    }
} else {
    console.log("mayor que 10");
}











