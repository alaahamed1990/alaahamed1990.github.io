var Controller = function ($scope) {

    $scope.PersonalImage = "img/Logo.jpg";

    $scope.FullName = "Alaa Hamed AbdElhamed";

    $scope.JobTitle = "Full Stack Software developer";

    $scope.NickName = "@egydev";


    $scope.Projects = [];

    $scope.Companies = [];

    $scope.ClientSideTechnologies = [];

    $scope.ServerSideTechnologies = [];


    $scope.SelectedProject = {};


    $scope.SelectedImageUrl="null";

$scope.HideSelectedImage=function()
{
    $scope.SelectedImageUrl="null";
}
   $scope.SetSelectedUrl=function(url)
   {
     $scope.SelectedImageUrl=url;
   }
    $scope.ProjectClicked = function (project) {
        $scope.SelectedProject = project;
    }


    $scope.Init = function () {

        $scope.Projects = [
            {
                Title: "Geo-Explorer (Web)",
                Description: "This is a web application that provides different geo-spatial functions like searching ,redlining , measuring ,exporting map ,drawing cad , etc....",
                AwesomeIcon: "globe",
                UsedPlaces:"It was used in Hail and Madinah municipalies and also in  Riyadh Agency for Municipal and Rural Affairs and also KSA Ministry of Municipal and Rural Affairs.",
                ScreenShots:["img/portfolio/geoExp/logo.png","img/portfolio/geoExp/secondScreen.png"],
                WebLink: "http://83.101.140.98/geoexplorer/",
                Technologies:"Technologies used are  HTML5 , CSS3 , JQuery , Arcgis Javascript , Ajax , Web API and SOE."
            },

            {
                Title: "Geo-Explorer (Mobile)",
                Description: "This is a mobile application that provides different geo-spatial functions like searching ,redlining , measuring and searching for online building license transaction .",
                AwesomeIcon: "globe",
                UsedPlaces:"It was used in Riyadh Agency for Municipal and Rural Affairs .",
                ScreenShots:["img/portfolio/mobileExp/logo.png","img/portfolio/mobileExp/first.png","img/portfolio/mobileExp/second.png"],
                WebLink: "https://play.google.com/store/apps/details?id=io.cordova.myapp382999",
                Technologies:"Technologies used are HTML5 , CSS3 , JQuery , Arcgis Javascript , Ajax , Web API and Phonegap ."
            },

            {
                Title: "License Permits System",
                Description: "This is a web based application used for license permit generation. It handles different types of transactions like survey report , new licnese ,renew license , modify license and other types",
                AwesomeIcon: "building-o",
                UsedPlaces:"It was used in Hail Municipality",
                ScreenShots:["img/portfolio/licSystem/logo.png","img/portfolio/licSystem/first.png","img/portfolio/licSystem/third.png"],
                WebLink: "http://83.101.140.98/hajl",
                Technologies:"Technologies used are HTML5 , CSS3 , JQuery , Arcgis Javascript ,Angular Js , Ajax , Web API and oracle."
            },
            {
                Title: "Complaint System (Web,Mobile)",
                Description: "This is a web application that provides governmental facilities managment system using gis based solution through making complaints using mobile application and storing it in a spatial way so that we can do later gis operations on it like spatial search and classification in the web application",
                AwesomeIcon: "bullhorn",
                UsedPlaces:"It was used in Mekkah municipality",
                ScreenShots:["img/portfolio/complaintsSys/logo.png","img/portfolio/complaintsSys/fifth.png","img/portfolio/complaintsSys/sixth.png","img/portfolio/complaintsSys/seventh.png","img/portfolio/complaintsSys/first.png","img/portfolio/complaintsSys/second.png","img/portfolio/complaintsSys/third.png"],
                WebLink: "http://83.101.140.98/geoexplorer/",
                MobileLink: "http://83.101.140.98/geoexplorer/",
                Technologies:"Technologies used are  HTML5 , CSS3 , JQuery , Arcgis Javascript , Ajax  ,oracle, Web API and Phonegap ."
            },
            {
                Title: "Madinah Building Condtions Managment",
                Description: "This is a web application that provides governmental ability to insert and edit building condition in a spatail way thrugh feature editing",
                Src: "img/portfolio/Madina/logo.jpg",
                UsedPlaces:"It was used in Madina municipality",
                ScreenShots:["img/portfolio/Madina/logo.jpg"],
                Technologies:"Technologies used are  HTML5 , CSS , JQuery , Arcgis Javascript , Ajax ."
            },
            {
                Title: "DotGeo",
                Description: "This is a web application that provides different geo-spatial functions like searching ,redlining , measuring ,exporting map ,editing,classification , etc.... ",
                Src: "img/portfolio/dotGeo/logo.jpg",
                UsedPlaces:"It was used in Egypt Ministry of planning",
                ScreenShots:["img/portfolio/dotGeo/logo.jpg"],
                Technologies:"Technologies used are silverlight and oracle"
            },{
                Title: "Bajyal",
                Description: "This is a web application that provides different exams like holland exam for detecting student",
                Src: "img/company/bajyal.png",
                UsedPlaces:"It was used in King AbdElaziz University",
                ScreenShots:["img/company/bajyal.png"],
                Technologies:"Technologies used are Asp.net Web forms , MVP , Wcf ,MS Testing framework , Sql Server"
            }


        ];


        $scope.Companies = [
             {
                 Src: "img/company/bajyal.png",
                 Position: "Full Stack Web Software developer",
                 Interval: "(Jan 2012 - Jan 2013)",
                 Link: "http://www.benaaalajyal.com/"

             },

            {
                Src: "img/company/esrinea.png",
                Position: "Full Stack Web Software developer",
                Interval: "(Jan 2013 - Jul 2014)",
                Link: "http://www.esrinea.com/"

            }, {
                Src: "img/company/alkan.jpg",
                Position: "FullStack Web Software developer",
                Interval: "(July 2014 - Sep 2015)",
                Link: "http://www.alkancit.com/frontend/pages/Home.aspx"

            },
        {
            Src: "img/company/crossOver.png",
            Position: ".Net Software developer",
            Interval: "(Nov 2015 - Present)",
            Link: "https://www.crossover.com/"

        },
                         {
                             Src: "img/company/daralriyadh.png",
                             Position: "FullStack Software developer",
                             Interval: "(Nov 2014 - Present)",
                             Link: "http://www.daralriyadh.com/"
                         }
        ];

        $scope.ClientSideTechnologies = ["Javascript", "Html", "Css3", "JQuery", "Angular Js","Html5" ,"Bootstrap","dojo","Arcgis Javascript API","Silverlight"];


        $scope.ServerSideTechnologies = ["PHP", "Asp.net", "Wcf", "MVC", "MVP","Web API", "CakePhp"];
    }




};




var application = angular.module("app", []);

application.controller("Controller", Controller);
