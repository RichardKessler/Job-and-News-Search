$(document).ready(function() {
    var jobsArray = JSON.parse(localStorage.getItem('JOBS')) || [];

    var newsArray = JSON.parse(localStorage.getItem('ARTICLES')) || [];


    for (var i = 0; i < jobsArray.length; i++) {
<<<<<<< HEAD
        $("#jobResult").append(jobsArray[i]);
        $("#saveJobs").remove();
    }

    for (var l = 0; l < newsArray.length; l++) {
        $("#articleResult").append(newsArray[l]);
        $("#saveNews").remove();
=======
        var jobsCard = $('<div class="card-panel">');
        jobsCard.append(jobsArray[i]);
        $("#jobResult").append(jobsCard);
    }

    for (var l = 0; l < newsArray.length; l++) {
        var articleCard = $('<div class="card-panel">');
        articleCard.append(newsArray[l]);
        $("#articleResult").append(articleCard);
>>>>>>> master
    }

})