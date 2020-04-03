$(document).ready(function () {
    var page = 1;

    //JOB API
    $(document).on('click', function jobAPI(e) {
        e.preventDefault();

        var APIkey = "d06b0526f3dd2c32f58a1ae2727794e5"
        var APPid = "6c9cf9f3"
        var userSearch = 'javascript'//$("#searchTerm").val();
        var userLocation = 'Raleigh, NC'//$("#searchPlace").val();

        var totalPages = 0;
        var queryURL = 'https://api.adzuna.com/v1/api/jobs/us/search/' + page + '?app_id=6c9cf9f3&app_key=d06b0526f3dd2c32f58a1ae2727794e5' + '&what=' + userSearch + '&where=' + userLocation

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            //clears any previous search
            $("#jobTab").empty();

            //setting results to a variable
            var jobResults = response.results;
            //populates each entry
            for (var i = 0; i < jobResults.length; i++) {
                var jobCard = $('<div class="card-panel">');
                //title with link
                jobCard.append('<h5><a href = "' + jobResults[i].redirect_url + '" target="_blank">' + jobResults[i].title + '</a></h5>');
                //date and location
                var resultLoc = jobResults[i].location.area
                var resultDate = jobResults[i].created
                resultDate = resultDate.split('T');
                jobCard.append('<h6>' + resultDate[0] + ' || ' + resultLoc[3] + ', ' + resultLoc[1]);
                //comapny name
                jobCard.append('<h6>' + jobResults[i].company.display_name)
                //description
                jobCard.append('<p>' + jobResults[i].description);

                $("#jobTab").append(jobCard);
            }
            //calculating total number of pages
            totalPages = Math.ceil(response.count / jobResults.length);
            //adds next and previous page
            $('#jobTab').append('<button id="previous">previous</button> <button id="next">next</button>')
            console.log("JOB SEARCH API ************", response);

        })
        //previous page
        $('#jobTab').on('click', '#previous', function () {
            if (page > 1) {
                page--;
                $("#findNow").click()
            }
        })
        //next page
        $('#jobTab').on('click', '#next', function () {
            if (page < totalPages) {
                page++;
                $("#findNow").click()

            }
            console.log("jobAPI -> page", page)
        })

    })

})
