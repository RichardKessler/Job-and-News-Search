$(document).ready(function () {
    function jobsSearch() {
        var userLocation = 'Raleigh'
        var queryURL = 'https://jobs.github.com/positions.json?description=python&location='+userLocation;

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response){
            console.log(response);


        })

    }


})
