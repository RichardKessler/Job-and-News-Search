$("#search").click(function(event) {
    event.preventDefault();

    var searchTerm = $("#searchKey").val();
    var url1 = 'http://newsapi.org/v2/everything?' + 'qInTitle=' + searchTerm + '&' + 'sortBy=relevancy&language=en&pageSize=50&apiKey=645a8c4dfc5044a0845c6033b3728a59';



    $.get(url1, function(response) {
        console.log(response);
    })
});