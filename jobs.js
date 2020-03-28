$(document).ready(function () {

    $(".searchButton").click(function (e) {
        e.preventDefault();
        var APIkey = "d06b0526f3dd2c32f58a1ae2727794e5"
        var APPid = "6c9cf9f3"
        var userSearch = $("#searchKey").val();
        var userLocation = $("#searchLocation").val();

        var queryURL = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=6c9cf9f3&app_key=d06b0526f3dd2c32f58a1ae2727794e5' + '&what=' + userSearch + '&where=' + userLocation

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            
            console.log(response);

        })

    })

})
