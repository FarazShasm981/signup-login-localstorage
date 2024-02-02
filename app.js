
//SIGN UP
var signUpName = document.getElementById('username');
var signUpMail = document.getElementById('useremail');
var signUpPass = document.getElementById('userpassword');

function signup() {
    if (signUpName.value !== `` && signUpMail.value !== `` && signUpPass.value !== ``) {
        localStorage.setItem('name', signUpName.value);
        localStorage.setItem('mail', signUpMail.value);
        localStorage.setItem('password', signUpPass.value);
        window.location.href = 'login.html';
    } else {
        alert("Please Fill Out All Fields")
    }
}

//LOG IN 

var loginEmail = document.getElementById('useremail');
var loginPass = document.getElementById('userpassword');

function login() {
    var abc = localStorage.getItem('mail');
    var cde = localStorage.getItem('password');
    if (loginEmail.value == abc && loginPass.value == cde) {
        alert('Welcome')
        window.location.href = 'dashboard.html'
    } else {
        alert('Please Enter Valid Email/Password')
    }
}


//DASHBOARD
var userNameStore = localStorage.getItem('name');
var User = document.getElementById('showname');
User.textContent = userNameStore;