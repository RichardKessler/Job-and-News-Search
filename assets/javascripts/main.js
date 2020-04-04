$(document).ready(function () {
    var userSearch = 'javascript'//localStorage.getItem('userSearch');
    var userLocation = 'raleigh, nc'//localStorage.getItem('userLocation');

    var jobPage = 1;
    var totalJobPages = 0;

    var newsPage = 1;
    var totalNewsPages = 0;

    var toggle = true;

    function showJobs() {

        //JOB API

        var APIkey = "d06b0526f3dd2c32f58a1ae2727794e5";
        var APPid = "6c9cf9f3";
        console.log("jobAPI -> userSearch222222222222", userSearch);
        console.log("userLocation 2222222", userLocation)

        var queryURL = 'https://api.adzuna.com/v1/api/jobs/us/search/' + jobPage + '?app_id=6c9cf9f3&app_key=d06b0526f3dd2c32f58a1ae2727794e5' + '&what=' + userSearch + '&where=' + userLocation

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {

            console.log("JOB SEARCH API ************", response);
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
            totalJobPages = Math.ceil(response.count / jobResults.length);
            //adds next and previous page
            $('#jobTab').append('<button id="jobPrevious">previous</button><button id="jobNext">next</button><span> page: ' + jobPage + ' </span>')

        })

    }
    function showNews() {
        var url1 = 'http://newsapi.org/v2/everything?' + 'qInTitle=' + userSearch + '&sortBy=relevancy&language=en&pageSize=10&page=' + newsPage + '&apiKey=645a8c4dfc5044a0845c6033b3728a59';

        $.get(url1, function (response) {
            console.log("NEWS SEARCH API ****************", response);
            $("#articleTab").empty();
            var newsResults = response.articles;
            for (let i = 0; i < newsResults.length; i++) {
                var newsCard = $('<div class="card-panel">');
                newsCard.append('<h5><a href = "' + newsResults[i].url + '" target="_blank">' + newsResults[i].title + '</a></h5>');

                var dateStamp = newsResults[i].publishedAt;
                dateStamp = dateStamp.split('T');

                var newsAuthor = newsResults[i].author;
                if (newsAuthor === null) { newsAuthor = 'Anonymous' }
                newsCard.append('<h6>' + newsAuthor + ' || ' + dateStamp[0]);

                newsCard.append('<h6>' + newsResults[i].description + '</h6>');
                var newsContent = newsResults[i].content;
                if (newsContent === null) { 
                    newsContent = ''
                    newsCard.append('<h6>' + newsContent);
                } 
                else { 
                    newsContent = newsResults[i].content.split("[") 
                    newsCard.append('</br><h6>' + newsContent[0]);
                }
                

                $("#articleTab").append(newsCard);
            }

            //calculating total number of pages
            totalNewsPages = Math.ceil(response.totalResults / newsResults.length);
            //adds next and previous page
            $('#articleTab').append('<button id="newsPrevious">previous</button><button id="newsNext">next</button><span> page: ' + newsPage + ' </span>')
        })
    }

    showJobs();
    showNews();

    $('#jobButton').click(function () {
        if (toggle === false) {
            $('#articleTab').toggle();
            $('#jobTab').toggle();
            toggle = true;
        }
    })

    $('#articleButton').click(function () {
        if (toggle === true) {
            $('#jobTab').toggle();
            $('#articleTab').toggle();
            toggle = false;
        }
    })

    //previous job page
    $("#jobTab").on('click', '#jobPrevious', function () {
        if (jobPage > 1) {
            jobPage--;
            console.log("jobPage", jobPage)
            showJobs();
        }
    })
    //next job page
    $("#jobTab").on('click', '#jobNext', function () {
        if (jobPage < totalJobPages) {
            jobPage++;
            console.log("jobAPI -> page", jobPage)
            showJobs();

        }
    })
    $("#articleTab").on('click', '#newsPrevious', function () {
        if (newsPage > 1) {
            newsPage--;
            showNews();
        }
    })
    //next page
    $("#articleTab").on('click', '#newsNext', function () {
        if (newsPage < totalNewsPages) {
            newsPage++;
            showNews();

        }
    })
})