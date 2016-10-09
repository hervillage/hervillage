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

$(document).on('click','#help', function () {

            console.log('clicked');
            var wherecard = '<div class="col s12"><div class="card-panel white z-depth-1"> <div class="row valign-wrapper">  <div class="col s4">  <i class="teal-text medium material-icons prefix">account_circle</i> <br><span class="teal-text" id="homeHelp"> @Home? </span> </div> <div class="col s4"> <i class="teal-text medium material-icons prefix">business</i> <br><span class="teal-text" id="workHelp"> @Work? </span> </div> <div class="col s4"> <i class="teal-text medium material-icons prefix">class</i><br> <span class="teal-text" id="schoolHelp"> @School? </span>  </div></div> </div> </div>';

            $('#helpactions').html(wherecard); //newPost moves whole textbox to the bottom, need to create new card to prepend


    });
$(document).on('click','#homeHelp', function () {

    console.log('Needs help at home');
    var whatcard = '<div class="col s12"><div class="card-panel white z-depth-1"> <div class="row valign-wrapper">  <div class="col s3">  <i class="teal-text medium material-icons prefix">supervisor_account</i> <br><span class="teal-text" id="carpool"> Carpool </span> </div> <div class="col s3"> <i class="teal-text medium material-icons prefix">visibility</i> <br><span class="teal-text" id="childcare"> Childcare </span> </div> <div class="col s3"> <i class="teal-text medium material-icons prefix">thumbs_up_down</i><br> <span class="teal-text" id="advice"> Advice </span>  </div><div class="col s3">  <i class="teal-text medium material-icons prefix">work</i> <br><span class="teal-text" id="service"> Services </span></div> </div> </div>';

    $('#helpactions').html(whatcard); //newPost moves whole textbox to the bottom, need to create new card to prepend


});

$(document).on('click','#carpool', function () {

    console.log('Needs carpool');
    var whencard = '<div class="col s12"><div class="card-panel white z-depth-1"> <div class="row valign-wrapper">  <div class="col s6">  <i class="teal-text medium material-icons prefix">alarm_on</i> <br><span class="teal-text" id="now"> Now </span> </div> <div class="col s6"> <i class="teal-text medium material-icons prefix">today</i> <br><span class="teal-text" id="later"> Later </span> </div> </div> </div>';

    $('#helpactions').html(whencard); //newPost moves whole textbox to the bottom, need to create new card to prepend


});
$(document).on('click','#now', function () {

    console.log('Needs help now');
    var matched = '<div class="col s12"><div class="card-panel white z-depth-1"> <div class="row valign-wrapper">  <div class="col s6">  <img src="assets/images/jasmine.jpeg" alt="Jasmine" class="circle responsive-img"> <br><span class="teal-text" id="user1"> Call Jasmine </span> </div> <div class="col s6"> <img src="assets/images/ana.jpeg" alt="ana" class="circle responsive-img"> <br><span class="teal-text" id="user2"> Call Ana </span> </div> </div> </div>';

    $('#helpactions').html(matched); //newPost moves whole textbox to the bottom, need to create new card to prepend


});
$(document).on('click','#user1', function () {
    var finish = '<button class="btn btn-large card-panel large waves-effect waves-light teal lighten-3 text-upper" id="morehelp"> Need something else? </button>';
    $('#helpactions').html(finish);
});

$(document).on('click','#morehelp', function () {

    console.log('clicked');
    var wherecard = '<div class="col s12"><div class="card-panel white z-depth-1"> <div class="row valign-wrapper">  <div class="col s4">  <i class="teal-text medium material-icons prefix">account_circle</i> <br><span class="teal-text" id="homeHelp"> @Home? </span> </div> <div class="col s4"> <i class="teal-text medium material-icons prefix">business</i> <br><span class="teal-text" id="workHelp"> @Work? </span> </div> <div class="col s4"> <i class="teal-text medium material-icons prefix">class</i><br> <span class="teal-text" id="schoolHelp"> @School? </span>  </div></div> </div> </div>';

    $('#helpactions').html(wherecard); //newPost moves whole textbox to the bottom, need to create new card to prepend


});