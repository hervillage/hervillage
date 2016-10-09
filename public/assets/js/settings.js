/**
 * Created by user on 10/9/16.
 */


$(document).on('click','#savelocation', function () {


    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {

            // User is signed in
            var uid = user.uid;
            var home = $('#home_address').val();
            var work = $('#work_address').val();
            var school = $('#school_address').val();

            // A post entry.
            var locationData = {
                home: home,
                work: work,
                school: school
            };


            // Write the new post's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/users/' + uid + '/locations'] = locationData;

            return firebase.database().ref().update(updates);



        }

    });


});


$(document).on('click','#saveskills', function () {


    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {

            // User is signed in
            var uid = user.uid;
            var home = $('#home_address').val();
            var work = $('#work_address').val();
            var school = $('#school_address').val();

            // A post entry.
            var locationData = {
                home: home,
                work: work,
                school: school
            };


            // Write the new post's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/users/' + uid + '/skills'] = locationData;

            return firebase.database().ref().update(updates);



        }

    });


});


$(document).on('click','#saveneeds', function () {


    console.log('saving');

    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {

            // User is signed in
            var uid = user.uid;

            var mentor = document.getElementById('mentor');
            var carpool = document.getElementById('carpool');
            var childcare = document.getElementById('childcare');
            var professional_services = document.getElementById('professional_services');

            console.log(professional_services.checked);
            // A post entry.
            var locationData = {
                mentor: mentor.checked,
                carpool: carpool.checked,
                childcare: childcare.checked,
                services: professional_services.checked
            };


            // Write the new post's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/users/' + uid + '/needs'] = locationData;

            return firebase.database().ref().update(updates);

        }

    });


});