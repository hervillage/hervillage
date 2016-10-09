/**
 * Created by user on 10/8/16.
 */

/**
 * Function called when clicking the Login/Logout button.
 */
// [START buttoncallback]
function toggleSignIn() {
    if (!firebase.auth().currentUser) {
        // [START createprovider]
        var provider = new firebase.auth.GoogleAuthProvider();
        // [END createprovider]
        // [START addscopes]
        provider.addScope('https://www.googleapis.com/auth/plus.login');
        // [END addscopes]
        // [START signin]
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // [START_EXCLUDE]
            // document.getElementById('quickstart-oauthtoken').textContent = token;
            console.log(token);
            // [END_EXCLUDE]
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // [START_EXCLUDE]
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');
                // If you are using multiple auth providers on your app you should handle linking
                // the user's accounts here.
            } else {
                console.error(error);
            }
            // [END_EXCLUDE]
        });
        // [END signin]
    } else {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
    }
    // [START_EXCLUDE]
    // document.getElementById('quickstart-sign-in').disabled = true;
    // [END_EXCLUDE]
}


function navlogin() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            $('#nav-right').empty();
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;


            var li = $('<li>');
            var chip = $('<div class="chip teal lighten-2">');
            var profileimg = '<img src="' + photoURL + '" alt="Contact Person">' + displayName + '';
            var newchip = chip.append(profileimg);

            var newnav = li.append(newchip);

            $('#nav-right').append(newnav);

            var friendsicon = '<a class="waves-effect waves-light " href="friends.html" target="_blank"> <i class="large material-icons">supervisor_account</i> </a>';

            var chaticon = '<a class="waves-effect waves-light " href="friends.html" target="_blank"> <i class="large material-icons">forum</i> </a>';

            var gearicon = '<a class="waves-effect waves-light " href="friends.html" target="_blank"> <i class="large material-icons">settings</i> </a>';

            $('#nav-right').append(friendsicon);

            $('#nav-right').append(chaticon);

            $('#nav-right').append(gearicon);
        }

    });
}

function navlogout() {
    $('#nav-right').empty();
}

function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
            $('#quickstart-sign-in').text('Sign out');
            // document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
            // [END_EXCLUDE]
            navlogin();
        } else {
            // User is signed out.
            $('#quickstart-sign-in').text('Sign in with Google');
            navlogout();
        }
        // [START_EXCLUDE]
        // document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
    });
    // [END authstatelistener]
    document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
}
window.onload = function() {
    initApp();
};
