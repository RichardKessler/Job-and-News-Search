$(document).ready(function () {

    $("#findNow").click(function (e) {
        e.preventDefault();

        var APIkey = "d06b0526f3dd2c32f58a1ae2727794e5"
        var APPid = "6c9cf9f3"
        var userSearch = $("#searchTerm").val();
        var userLocation = $("#searchPlace").val();

        var queryURL = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=6c9cf9f3&app_key=d06b0526f3dd2c32f58a1ae2727794e5' + '&what=' + userSearch + '&where=' + userLocation

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            $(".jobResults").empty();
            for (var i = 0; i < response.results.length; i++) {
                var jobCard = $('<div class="card-panel">');
                jobCard.append('<h5><a href = "'+response.results[i].redirect_url+'" target="_blank">'+response.results[i].title+'</a></h5>');

                var resultLoc = response.results[i].location.area
                var resultDate = response.results[i].created
                resultDate = resultDate.split('T');
                console.log("resultDate", resultDate)
                jobCard.append('<h6>' + resultDate[0] + ' || ' + resultLoc[3] + ', ' + resultLoc[1]);
                jobCard.append('<h6>'+response.results[i].company.display_name)
                jobCard.append('<p>' + response.results[i].description);
                $(".jobResults").append(jobCard);
            }
            console.log(response);


        })

    })

})
