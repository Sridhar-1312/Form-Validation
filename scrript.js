var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName() {

    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if (!name.match(/^[A-za-z]*\s{1}[A-za-z]*$/)) {
        nameError.innerHTML = 'Write your Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}


function validatePhone() {
    var phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone Number is Required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone No. Should be 10 Digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only Digits Please.';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0){
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 10;
    var left = required - message.length;


    if(left > 0){
        messageError.innerHTML = left + " "+'more characters needed';
        return false;
    }
   messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please Fix the Errors to Submit'
        setTimeout(function(){submitError.style.display = 'none'},3000);
        return false;
}
    }

