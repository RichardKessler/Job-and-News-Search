$(document).ready(function(){

    $('#landingButton').click(function(){
        var userSearch = $('#jobSearchField').val();
        var userLocation = $('#locaitonSearchField').val();
        console.log("userLocation 1111111111-------------", userLocation);
        
        console.log("userSearch 11111111---------------", userSearch);

        localStorage.setItem('userSearch', userSearch);
        localStorage.setItem('userLocation', userLocation);

    })



})