$(document).ready(function(){
    $('#landingButton').click(function(e){
        e.preventDefault();
        var userSearch = $('#jobSearchField').val();
        var userLocation = $('#locationSearchField').val();

        if ((userSearch != null && userSearch !="") && (userLocation != null && userSearch !="")){
            document.location.href = "branch-1.html"
        }

        else {
            $(".modal").modal();
        }

        localStorage.setItem('userSearch', userSearch);
        localStorage.setItem('userLocation', userLocation);
        
    })



})