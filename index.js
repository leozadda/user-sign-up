

function checkFirstName(){
    fname = document.getElementById('fname').value;

    // Check if first and last name are words
    if(fname.match(/^[A-Z]+$/i) != null){
    
        //Only first letter is uppercase   
        fname = fname.toLowerCase();
        fname = fname.charAt(0).toUpperCase() + fname.slice(1, fname.length);

        document.getElementById("fnameError").innerHTML = "Good!";
    }else{

        document.getElementById("fnameError").innerHTML = "Not a name";
    }
    return fname;
}

function checkLastName(){
    lname = document.getElementById('lname').value;

    // Check if first and last name are words
    if(lname.match(/^[A-Z]+$/i) != null){
    
        //Only first letter is uppercase   
        lname = lname.toLowerCase();
        lname = lname.charAt(0).toUpperCase() + lname.slice(1, lname.length);

        document.getElementById("lnameError").innerHTML = "Good!";
    }else{

        document.getElementById("lnameError").innerHTML = "Not a name";
    }
    return lname;

}

function checkSSN(){

    ssn = document.getElementById('ssn').value;
    // Check if SSN is format "123-45-6789" or "123456789"
        if (ssn.match(/^\d\d\d-\d\d-\d\d\d\d$/) == null){
            document.getElementById("ssnError").innerHTML = "Example: 123-45-6789";
        }else{
    // Turn "123-45-6789" into "123456789"
            document.getElementById("ssnError").innerHTML = "Good!";
            ssn = ssn.replace(/-/g, "");
        }
        return ssn;
    }

function checkEmail(){

    email = document.getElementById('email').value;
    //Just check if email has text/digit plus @  text.com/net/edu/org
        if(email.match(/^.+@.+$/g) != null){
            document.getElementById("emailError").innerHTML = "Good!";
        }else{
            document.getElementById("emailError").innerHTML = "Not an email";
        }
        return email;
    }

function checkPhone(){

    phone = document.getElementById('phone').value;
    //Check if phone is format "3121234123"
        if(phone.match(/^\d\d\d\d\d\d\d\d\d\d$/g) != null){
    //Turn "123456789" into "(123)456-789"
            phone = "(" + phone.slice(0, 3) + ")" + phone.slice(3, 6) + "-" + phone.slice(6, 10)
            document.getElementById("numError").innerHTML = "Good!";
        } else{
            document.getElementById("numError").innerHTML = "Example: 0123456789";
        }
        return phone;
    }

function getUser(){
    //turn data into object
    let person = {
    "fname": checkFirstName(),
    "lname": checkLastName(),
    "email": checkEmail(),
    "phone": checkPhone(),
    "ssn": checkSSN()
    }

    //When sending data to a web server, the data has to be a string.
    const jsonPerson = JSON.stringify(person);
    console.log(jsonPerson);

}