

function getUser(){

    //Collect user data
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    ssn = document.getElementById('ssn').value;

    //Check if value is valid with regular expression (accept multiple formats)
        //need to do

    //Capiltalize the users name, format his phone, format ssn with regex functions
        //need to do

    //turn data into object
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

    //send data to server (fetch POST)
        //need to do
}