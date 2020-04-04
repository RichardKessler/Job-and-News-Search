$(document).ready(function() {
    var jobsArray = JSON.parse(localStorage.getItem('JOBS')) || [];

    var newsArray = JSON.parse(localStorage.getItem('ARTICLES')) || [];


    for (var i = 0; i < jobsArray.length; i++) {
        $("#jobResult").append(jobsArray[i]);
    }

    for (var l = 0; l < newsArray.length; l++) {
        $("#articleResult").append(newsArray[l]);
    }

})