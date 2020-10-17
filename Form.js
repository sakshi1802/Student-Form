<script>
    function validateName() { /*function for validation of first name with (if- else)*/
    var fname = document.getElementById("name").value;
    var regex1 = /^[a-zA-Z\s'-]{2,15}$/;

    if(regex1.test(fname)) {
        document.getElementById("firstNamePrompt").style.color ="green";
        document.getElementById("firstNamePrompt").innerHTML= "valid";
        return true;
    }

    else {
        document.getElementById("firstNamePrompt").style.color ="red";
        document.getElementById("firstNamePrompt").innerHTML = "invalid";
        return false;

    }

}

function validatePhone() { /*function for validation of phone number */
    var phonenum = document.getElementById("phone").value;
    var regex2 = /^\d{3}-\d{3}-\d{4}$/;

    if (regex2.test(phonenum)) {
        document.getElementById("p").style.color = "green";
        document.getElementById("p").innerHTML = "Valid";
        return true;
    }

    else {
        document.getElementById("p").style.color = "red";
        document.getElementById("p").innerHTML = "Use xxx-xxx-xxxx";
        return false;
    }
}

function validateAge(){
    var age= document.getElementById("agee").value;
    if(age>=14 || age<=27){
        document.getElementById("reqAge").style.color = "green";
        document.getElementById("reqAge").innerHTML = "Valid";
        return true;
    }
    else{
        document.getElementById("reqAge").style.color = "red";
        document.getElementById("reqAge").innerHTML = "Invalid";
        return false;
    }
}
</script>
