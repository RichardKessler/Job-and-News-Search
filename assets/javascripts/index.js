$(document).ready(function() {
    $('#landingButton').click(function(e) {
        e.preventDefault();
        var userSearch = $('#searchTermField').val();
        var userLocation = $('#locationSearchField').val();
        //check for the box had a valid input
        if ((userSearch != null && userSearch != "")) {
            document.location.href = "main.html"
        } else {
            $(".modal").modal();  //error message if unccessful
        }

        localStorage.setItem('userSearch', userSearch);
        localStorage.setItem('userLocation', userLocation);

    })



})