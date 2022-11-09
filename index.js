

function getUser(){

// 1. Collect user data
    fname = document.getElementById('fname').value;
    lname = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    ssn = document.getElementById('ssn').value;

// 2.  Validate and format Input
    // Check if first and last name are words
    if(fname.match(/[a-z]|[A-Z]/g) != null && fname.match(/[a-z]|[A-Z]/g) != null){
    
        //Only first letter is uppercase   
        fname = fname.toLowerCase();
        lname = lname.toLowerCase();
        fname = fname.charAt(0).toUpperCase() + fname.slice(1, snn.length-1);
        fname = fname.charAt(0).toUpperCase() + lname.slice(1, snn.length-1);

        console.log("Cool name", fname, lname);
    } else{
        console.log("That's not your name lol");
    }


    // Check if SSN is format "123-45-6789" or "123456789"
        if (ssn.match(/\d\d\d-\d\d-\d\d\d\d/) == null){
            console.log("Plese use format 123-45-6789");
        }else{
    // Turn "123-45-6789" into "123456789"
            console.log("That SSN works!", ssn.replace(/-/g, ""));
        }
        
    // Just check if email has text/digit plus @  text.com/net/edu/org
        if(email.match(/(\d|\w)-@-(\d|\w)-.-(\d|\w)/g) != null){
            console.log("That email works!", email);
        }else{
            console.log("Not a valid email")
        }


    // Check if phone is format "123456789"
        if(phone.match(/\d\d\d\d\d\d\d\d\d/g) != null){
    // Turn "123-45-6789" into "(123)456-789"
            ssn = phone.insert(ssn, "(", 0);
            ssn = phone.insert(ssn, ")", 4);
            ssn = phone.insert(ssn, "-", 8);
            console.log("That phone number works.", ssn);
        } else{
            console.log("Must be format \"123456789\"")
        }


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