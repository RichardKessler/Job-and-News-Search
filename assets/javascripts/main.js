$(document).ready(function () {
    var userSearch = localStorage.getItem('userSearch');
    var userLocation = localStorage.getItem('userLocation');

    var jobPage = 1;
    var totalJobPages = 0;

    var newsPage = 1;
    var totalNewsPages = 0;

    var jobArray = JSON.parse(localStorage.getItem('JOBS')) || [];

    var newsArray = JSON.parse(localStorage.getItem('ARTICLES')) || [];

    var jobTitle = '';

    $(".errorCheck").hide();

    function showJobs() {

        //JOB API
        var APIkey = "d06b0526f3dd2c32f58a1ae2727794e5";
        var APPid = "6c9cf9f3";


        var queryURL = 'https://api.adzuna.com/v1/api/jobs/us/search/' + jobPage + '?app_id=6c9cf9f3&app_key=d06b0526f3dd2c32f58a1ae2727794e5' + '&what=' + userSearch + '&where=' + userLocation

        $.ajax({
            url: queryURL,
            method: 'GET',
            //on success
            success: function (response) {
                //clears any previous search
                $("#jobTab").empty();

                //setting results to a variable
                var jobResults = response.results;
                //error case if no results are found
                if (jobResults.length === 0) {
                    $("#jobTab").append('<div class="card-panel yellow lighten-1 noMatch"><h6>No Jobs Match </h6></div>')

                } else {
                    //populates each entry
                    for (var i = 0; i < jobResults.length; i++) {
                        var jobCard = $('<div class="card-panel">');
                        jobTitle = '<h5><a href = "' + jobResults[i].redirect_url + '" target="_blank">' + jobResults[i].title + '</a></h5>';
                        //title with link
                        jobCard.append(jobTitle);
                        //date and location with split to remove time
                        var resultLoc = jobResults[i].location.area
                        var resultDate = jobResults[i].created
                        resultDate = resultDate.split('T');
                        jobCard.append('<h6>' + resultDate[0] + ' || ' + resultLoc[3] + ', ' + resultLoc[1]);
                        //company name
                        jobCard.append('<h6>' + jobResults[i].company.display_name)
                        // job description
                        jobCard.append('<p>' + jobResults[i].description);
                        //save button
                        jobCard.append('<button id="saveJobs" class="btn waves-effect waves-light saveBtn" type="submit">Save Job Listing<i class="material-icons right">archive</i></button>');

                        $("#jobTab").append(jobCard);

                    }
                    //calculating total number of pages
                    totalJobPages = Math.ceil(response.count / jobResults.length);
                    //adds next and previous page if there is more than 1 page
                    if (totalJobPages > 1) {
                        $('#jobTab').append('<button id="jobPrevious">previous</button><button id="jobNext">next</button><span> page: ' + jobPage + ' </span>')
                    }
                }
            },
            error: function(){
                $("#jobTab").append('<div class="card-panel yellow lighten-1 noMatch"><h6>Something went wrong try again later</h6></div>')
            }
        })
    }

    function showNews() {
        var url1 = 'https://newsapi.org/v2/everything?' + 'qInTitle=' + userSearch + '&sortBy=relevancy&language=en&pageSize=10&page=' + newsPage + '&apiKey=645a8c4dfc5044a0845c6033b3728a59';

        $.get(url1, function (response) {
            $("#articleTab").empty();
            var newsResults = response.articles;
            //error case if no results are found
            if (newsResults.length === 0 || userSearch === null) {
                $("#articleTab").append('<div class="card-panel yellow lighten-1 noMatch"><h6>No Articles Match </h6></div>')
            } else {
                for (let i = 0; i < newsResults.length; i++) {
                    var newsCard = $('<div class="card-panel">');
                    //news header
                    newsCard.append('<h5><a href = "' + newsResults[i].url + '" target="_blank">' + newsResults[i].title + '</a></h5>');
                    //date split to remove time
                    var dateStamp = newsResults[i].publishedAt;
                    dateStamp = dateStamp.split('T');
                    //author withh check if authhor is null
                    var newsAuthor = newsResults[i].author;
                    if (newsAuthor === null) {
                        newsAuthor = 'Anonymous'
                    }
                    newsCard.append('<h6>' + newsAuthor + ' || ' + dateStamp[0]);
                    //news description
                    newsCard.append('<p>' + newsResults[i].description + '</p>');
                    var newsContent = newsResults[i].content;
                    //news content with check if there is no content
                    if (newsContent !== null) {
                        //removes excess characters display
                        newsContent = newsResults[i].content.split("[")
                        //checks if content and description is the same
                        if (newsContent[0].substring(0, 20) !== newsResults[i].description.substring(0, 20)) {
                            newsCard.append('</br><p>' + newsContent[0]);
                        }
                    }
                    //save button
                    newsCard.append('<button id="saveNews" class="btn waves-effect waves-light saveBtn" type="submit">Save Article<i class="material-icons right">archive</i></button>');

                    $("#articleTab").append(newsCard);
                }

                //calculating total number of pages
                totalNewsPages = Math.ceil(response.totalResults / newsResults.length);
                //adds next and previous page if there is more than 1 page
                if (totalNewsPages > 1) {
                    $('#articleTab').append('<button id="newsPrevious">previous</button><button id="newsNext">next</button><span> page: ' + newsPage + ' </span>')
                }
            }
        })
    }



    showJobs();
    showNews();

    // Save buttons

    $('#jobTab').on('click', '#saveJobs', function () {
        jobArray.push(this.parentElement.innerHTML);
        //removes the id so it cant be saved multiple times
        $(this).removeAttr("id")
        //response to indicate save was successful
        $(this).html('Saved!' + '<i class="material-icons right">check</i>')
        localStorage.setItem('JOBS', JSON.stringify(jobArray));

    })

    $('#articleTab').on('click', '#saveNews', function () {
        newsArray.push(this.parentElement.innerHTML);
        //removes the id so it cant be saved multiple times
        $(this).removeAttr("id")
        //response to indicate save was successful
        $(this).html('Saved!' + '<i class="material-icons right">check</i>')
        localStorage.setItem('ARTICLES', JSON.stringify(newsArray));

    })
    //////////////////////

    // Toggle buttons
    var toggle = true;
    // displays jobs on toggle
    $('#jobButton').click(function () {
        if (toggle === false) {
            $('#articleTab').hide()
            $('#jobTab').show()
            toggle = true;
        }
    })
    //displays articles on toggle
    $('#articleButton').click(function () {
        if (toggle === true) {
            $('#jobTab').hide()
            $('#articleTab').show()
            toggle = false;
        }
    })
    ///////////////////

    //Page buttons

    //previous job page
    $("#jobTab").on('click', '#jobPrevious', function () {
        if (jobPage > 1) {
            jobPage--;
            showJobs();
        }
    })
    //next job page
    $("#jobTab").on('click', '#jobNext', function () {
        if (jobPage < totalJobPages) {
            jobPage++;
            showJobs();

        }
    })
    //previous news page
    $("#articleTab").on('click', '#newsPrevious', function () {
        if (newsPage > 1) {
            newsPage--;
            showNews();
        }
    })
    //next news page
    $("#articleTab").on('click', '#newsNext', function () {
        if (newsPage < totalNewsPages) {
            newsPage++;
            showNews();

        }
    })
    //////////////////

    // JS media query for upsizing

    var screenSize = window.matchMedia("(min-width: 993px)")

    function mediaQuery(screenSize) {
        if (screenSize.matches) {
            $('#articleTab').show()
            $('#jobTab').show()
        }
    }
    screenSize.addListener(mediaQuery);
    /////////////////////
})