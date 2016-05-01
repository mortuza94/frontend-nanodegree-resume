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
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDate = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDate);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	});
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
	projects.project.forEach(function(curProject){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", curProject.title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", curProject.dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", curProject.description);
		$(".project-entry:last").append(formattedDescription);
		curProject.images.forEach(function(currImg)	{
			var formattedImage = HTMLprojectImage.replace("%data%", currImg);
			$(".project-entry:last").append(formattedImage);
		});
	});
}
projects.display();

/*
	BIO Object
*/
var bio = {
	"name": "Mortuza Ali",
	"role": "Researcher | Software Developer",
	"welcomeMessage": "Hi, welcome to my homepage. I am a researcher and a software developer. I worked as a postdoctoral researcher in leading Australian universities which include University of Melbourne and Monash University, where I worked in three Australian Research Council (ARC) funded Discovery Projects. My research interests are in the area of Information and Coding Theory, Data compression, Signal Processing, and Machine Learning. An integral part of my research is to generate new ideas, build proof-of-concept prototypes, testing and analysis of the prototypes, and finally integration of the algorithms with existing reference software. With a PhD in Information Technology (IT) and Bachelor degree in Computer Science and Engineering (CSE), I am proficient in both low-level programming (C, Assembly) and general purpose programming (C++, Java, Python, and MATLAB) languages. I am also proficient in web application developments using state-of-the-art frameworks and languages.",
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
	var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"].location);

	var contactPosStr = ["#topContacts", "#footerContacts"];
	contactPosStr.forEach(function(conId){
		$(conId).append(formattedMobile);
		$(conId).append(formattedEmail);
		$(conId).append(formattedGitHub);
		$(conId).append(formattedLocation);
	});

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
			"majors": ["Computer Science and Engineering (CSE)"],
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
education.display = function() {
	education.schools.forEach(function(curSchool){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace('%data%', curSchool.name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', curSchool.degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', curSchool.dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', curSchool.location);
		$(".education-entry:last").append(formattedSchoolLocation);
		curSchool.majors.forEach(function(schoolMajor){
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', schoolMajor);
			$(".education-entry:last").append(formattedSchoolMajor);
		});
	});

	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(curCourse){
		$("#education").append(HTMLschoolStart);
		var formattedOnlinetitle = HTMLonlineTitle.replace('%data%', curCourse.title);
		$(".education-entry:last").append(formattedOnlinetitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', curCourse.school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', curCourse.dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedURL = HTMLonlineURL.replace('%data%', curCourse.url);
		$(".education-entry:last").append(formattedURL);
	});

}
education.display();


$("#mapDiv").append(googleMap);
