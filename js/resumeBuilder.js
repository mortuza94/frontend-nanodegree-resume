/*
	WORK Object
*/
var work = {
	"jobs": [
		{
			"employer": "Federation University Australia",
			"title": "Research Fellow",
			"location": "Churchill, Victoria, Australia",
			"dates": "2014 - to date",
			"description": "Currently, I am working as a researcher and developer in the School of Engineering and Information Technology (SEIT). My research interests are in the area of information and coding theory and its application to ‘3D video compression."
		},
		{
			"employer": "Monash University",
			"title": "Research Fellow",
			"location": "Churchill, Victoria, Australia",
			"dates": "2012 - 2014",
			"description": "I worked in Faculty of Information Technology (FIT), as a Research Fellow. While at Monash University, I conducted research and development in the area of information and coding theory and its application in ‘distributed video coding’ and ‘privacy and security.’"
		},
		{
			"employer": "University of Melbourne",
			"title": "Research Fellow",
			"location": "Melbourne, Victoria, Australia",
			"dates": "2009 - 2011",
			"description": "In University of Melbourne, I was with the Department of Electrical and Electronic Engineering (EEE) as a Research Fellow. In University of Melbourne, my major research area was information and coding theory and its application in ‘distributed source coding.’"
		},
		{
			"employer": "Bangladesh University of Engineering and Technology (BUET)",
			"title": "Lecturer",
			"location": "Dhaka, Bangladesh",
			"dates": "2001 - 2004",
			"description": "As a Lecturer in the Department of Computer Science and Engineering (CSE), I conducted the courses Professionalism in Computing, Discrete Mathematics, and Digital Logic Design."
		}
	]
};
work.display = function(){
	for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();
/*
	PROJECTS Object
*/
var projects = {
	"project": [
		{
			"title": "Multiview Video Coding using Cuboid Data Compression",
			"dates": "2014 - to date",
			"description": "Devise a theoretical framework for 3D block-based multiview video coding to efficiently exploit spatial, temporal, and disparity correlation.",
			"images": ["./images/multiview.png"]
		},
		{
			"title": "Ore-X Innovation Challenge",
			"dates": "2015",
			"description": "Design an image processing algorithm to extract salient features from images from gold mines and classify the materials according to their quality.",
			"images": ["./images/Ore-X_grade_processing.jpg"]
		},
		{
			"title": "Integrated patient information and in-home health monitoring system using smartphones and cloud services",
			"dates": "2015 - 2016",
			"description": "Design and develop an application in Android platform that supports acquisition of various physiological signals using portable and wearable bio-sensors.",
			"images": ["./images/FigPIS.png"]
		},
		{
			"title": "Low complexity video coding for wireless multimedia sensor networks",
			"dates": "2012 - 2013",
			"description": "Research on the development of a low-complexity video coding architecture in distributed source coding paradigm.",
			"images": ["./images/videoCodingSensorNetwork.png"]
		}
	]
};
projects.display = function(){
	for(var curProject in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[curProject].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[curProject].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[curProject].description);
		$(".project-entry:last").append(formattedDescription);
		for(var currImg in projects.project[curProject].images)
		{
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[curProject].images[currImg]);
			$(".project-entry:last").append(formattedImage);
		}

	}

}
projects.display();
/*
	BIO Object
*/
var bio = {
	"name": "Mortuza Ali",
	"role": "Researcher | Software Developer",
	"welcomeMessage": "Hi, welcome to my hopepage. I am a researcher and software developer. My research interests are in the area of Information and Coding Theory, Data compression, Signal Processing, and Machine Learning. I am also passonate about software design, development, and analysis. I am proficient in both low-level programming (C, Assembly) and general purpose programming (C++, Java, Python, and MATLAB) languages.",
	"contacts": {
					"email": "mortuza.ali@federation.edu.au",
					"phone": "+61351226285",
					"mobile": "+61431732078",
					"github": "https://github.com/mortuza94",
					"linkedin": "https://au.linkedin.com/in/mortuza-ali-65576077",
					"location": "Melbourne, Australia"
				},
	"skills": ["Research and Analysis", "Algorihtmic design and analysis", "Software Development", "Web Development", "Scientific Writing"],
	"pictureUrl": "./images/mortuza.jpg"
};
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%", bio.pictureUrl);


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"].mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio["contacts"].email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio["contacts"].github);
/*	var formattedLinkedIn = HTMLlinkedin.replace("%data%", bio["contacts"].linkedin);*/
	var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"].location);

	var contactPosStr = ["#topContacts", "#footerContacts"];
	for(var conId in contactPosStr){
		$(contactPosStr[conId]).append(formattedMobile);
		$(contactPosStr[conId]).append(formattedEmail);
		$(contactPosStr[conId]).append(formattedGitHub);
/*		$(contactPosStr[conId]).append(formattedLinkedIn);*/
		$(contactPosStr[conId]).append(formattedLocation);
	}

	$("#header").append(formattedPic);
	$("#header").append(formattedMsg);
}
bio.display();
/*
	EDUCATION Object
*/
var education = {
"schools": [
		{
			"name": "Monash University",
			"location": "Melbourne, Australia",
			"degree": "Doctor of Philosophy (PhD)",
			"majors": ["Information Technology (IT)"],
			"dates": "2004 - 2009",
			"url": "http://www.monash.edu/"
		},
		{
			"name": "Bangladesh University of Engineering and Technology",
			"location": "Dhaka, Bangladesh",
			"degree": "Bachelor of Science and Engineering (BscEng)",
			"major": ["Computer Science and Engineering (CSE)"],
			"dates": "1996 - 2001",
			"url": "http://www.buet.ac.bd/"
		}
	],
"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/"
		},
		{
			"title": "Machine Leanring",
			"school": "Coursera, Stanford University",
			"dates": "2014",
			"url": "https://www.coursera.org/learn/machine-learning"
		},
		{
			"title": "Embedded Systems",
			"school": "EdX, University of Texas, Austin",
			"dates": "2014",
			"url": "https://courses.edx.org/courses/UTAustinX/UT.6.01x/1T2014/info"
		},
		{
			"title": "Data Mining with Weka",
			"school": "University of Waikato",
			"dates": "2014",
			"url": "https://weka.waikato.ac.nz/dataminingwithweka/preview"
		}
	]
};

$("#mapDiv").append(googleMap);
