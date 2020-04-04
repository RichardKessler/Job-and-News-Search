$(document).ready(function(){

    $('#landingButton').click(function(){
        var userSearch = $('#jobSearchField').val();
        var userLocation = $('#locaitonSearchField').val();
        localStorage.setItem('userSearch', userSearch);
        localStorage.setItem('userLocation', userLocation);

    })



})