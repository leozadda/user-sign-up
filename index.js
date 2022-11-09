

function getUser(){
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    ssn = document.getElementById('ssn').value;

let person = {
    "first name": fname,
    "last name": lname,
    "email": email,
    "phone number": phone,
    "social security number": ssn
    }

    //When sending data to a web server, the data has to be a string.
    const jsonPerson = JSON.stringify(person);
    console.log(jsonPerson);
}