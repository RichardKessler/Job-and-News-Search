$(document).ready(function(){

    $('#landingButton').click(function(){
        var userSearch = $('#searchField').val();

        localStorage.setItem('userSearch', userSearch)

    })



})