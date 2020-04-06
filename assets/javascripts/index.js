$(document).ready(function() {
    localStorage.clear();
    $('#landingButton').click(function(e) {
        e.preventDefault();
        var userSearch = $('#searchTermField').val();
        var userLocation = $('#locationSearchField').val();

        if ((userSearch != null && userSearch != "")) {
            document.location.href = "main.html"
        } else {
            $(".modal").modal();
        }

        localStorage.setItem('userSearch', userSearch);
        localStorage.setItem('userLocation', userLocation);

    })



})