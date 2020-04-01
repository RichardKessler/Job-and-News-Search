$("#findNow").click(function(event) {
    event.preventDefault();

    var searchTerm = $("#searchTerm").val();
    var url1 = 'http://newsapi.org/v2/everything?' + 'qInTitle=' + searchTerm + '&' + 'sortBy=relevancy&language=en&pageSize=10&apiKey=645a8c4dfc5044a0845c6033b3728a59';



    $.get(url1, function(response) {
        console.log(response);
        $(".newsResults").empty();
        for (let i = 0; i < response.articles.length; i++) {
            var newsCard = $('<div class="card-panel">');
            newsCard.append('<h5><a href = "' + response.articles[i].url + '" target="_blank">' + response.articles[i].title + '</a></h5>');

            var dateStamp = response.articles[i].publishedAt;
            dateStamp = dateStamp.split('T');
            newsCard.append('<h6>' + response.articles[i].author + ' || ' + dateStamp);
            newsCard.append('<h6>' + response.articles[i].description);
            newsCard.append('<h6>' + response.articles[i].content);


            $(".newsResults").append(newsCard);
        }
    })
});

$(":checkbox").click(function() {
    $('.newsResults').toggle();
})