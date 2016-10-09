$(document).on('click','#submit', function () {
    var newPost = $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $('#feed').append(); //newPost moves whole textbox to the bottom, need to create new card to prepend
});
$(document).on('click', '#help', function(){
    console.log('Clicked help');
});

