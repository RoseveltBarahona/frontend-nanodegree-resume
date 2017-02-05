/*
This is empty on purpose! Your code to build the resume will go here.
 */
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

var formattedName = HTMLheaderName.replace ("%data%","rosevelt");
var formattedRole = HTMLheaderRole.replace("%data%","fron-end");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName) ;


var bio = {

    name: "rosevelt,",
    role: "designer",
    contacts: {
        mail: "aa@aa.com",
        phone: "671069828",
    },
    welcomeMessage: "hola",
    skills: ["comer", "beber","trabajar"],
    biopic: "images/me.jpg"
};

var education = {
    "schools": [{
        name: "cenepa",
        alumnos: "500"

    }, {
        name: "dar",
        alumnos: "1000"
    }],
    "onlineCourses": [{
        title: "javascript",
        price: "100"

    }, {
        title: "css",
        price: "1000"
    }]

};

var work = {
    jobs: [{
        employer: "Diego A.",
        title: "designer jr",
        date: "abril 2005 - march 2008",
        description: "hacia cosas locas"
    }, {
        employer: "Raul R.",
        title: "designer/webdesign",
        date: "abril 2008 - today",
        description: "hacia muchaaaaa cosas"
    }]
};

var projects = {
    projects: [{
        name: "amazin foods",
        date: 2017,
        description: "hacer el packaging de unos productos"

    }, {
        name: "front v4",
        date: 2016,
        description: "mejorar la web de nutritienda"

    }]
};

if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace ("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace ("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace ("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

}

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}



















