$(document).on('click','#submit', function () {


    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var photoURL = user.photoURL;



            var newPost = $('#textarea1').val();

            console.log(newPost);


            var newcard = '<div class="col s12 m8 offset-m2 l6 offset-l3"><div class="card-panel white z-depth-1"> <div class="row valign-wrapper">  <div class="col s2"> <img src="' + photoURL + '" alt="" class="circle responsive-img"> </div> <div class="col s10"> <span class="black-text"> ' + newPost + ' </span> </div> </div> </div> </div>';

            $('#feed').prepend(newcard); //newPost moves whole textbox to the bottom, need to create new card to prepend


        }
    });


});


