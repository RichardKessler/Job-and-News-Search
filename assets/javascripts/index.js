$(document).ready(function(){

    $('#landingButton').click(function(){
        var userSearch = $('#jobSearchField').val();
        var userLocation = $('#locationSearchField').val();
        localStorage.setItem('userSearch', userSearch);
        localStorage.setItem('userLocation', userLocation);

    })



})