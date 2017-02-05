/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var velocity = 299792458;
 var result = (velocity*100) * (1.0/1.0/1000000000);

var x = "awesome thoughts";
var newx = x.replace("awesome", "fun");
console.log(newx);
//$('#main').append(newx);

var formattedName = HTMLheaderName.replace ("%data%","rosevelt");
var formattedRole = HTMLheaderRole.replace("%data%","fron-end");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName) ;

var bio = {

	name: "rosevelt,",
	role: "designer",
	contact:{
		mail:"aa@aa.com",
		phone:"671069828",
	},
	picture:"images/me.jpg",
	welcomeMessage:"hola",
	skills:["comer", "beber"]

};

$("#header").append(bio.name);

var work ={};
work.position="teacher";
work.years ="3";

var education ={};
education["name"] = "teacher";
education["city"] = "lima";

$("#main").append(work.position);

//json

var education = {
	"schools":[
		{
		 "name":"cenepa",
		 "alumnos":"500"

		},
		{
		 "name":"dar",
		 "alumnos":"1000"
		}

	],
	"onlineCourses":[
		{
		 "title":"javascript",
		 "price":"100"

		},
		{
		 "title":"css",
		 "price":"1000"
		}

	]

}

//












