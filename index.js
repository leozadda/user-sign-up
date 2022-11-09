

function getUser(){

//Collect user data
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    ssn = document.getElementById('ssn').value;

    console.log(ssn.match(/[0-9]/g));
//Check if value is valid with regular expression (accept multiple formats)
    //match() method returns null if no match is found. search() searches for a match, and returns the position of the match. replace() returns a modified string where the pattern is replaced.
    if (ssn.match(/\d\d\d-\d\d-\d\d\d\d/) == null){
        console.log("Plese use format 123-45-6789");
   } else{
        console.log("That works!");
    }
    
    

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