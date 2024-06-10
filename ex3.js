function validename(){
    var nom = document.getElementById("name");
    var p = document.getElementById("nameError");
    if(nom.value.length < 3){
        nom.style.borderColor = "red";
        p.innerText = "Tapez votre nom";
        p.style.color = "red"
    }else{
        nom.style.borderColor = "green";
        p.innerText = "✓";
        p.style.color = "green";
    }
}
function valideemail(){
    var email = document.getElementById("email");
    var p = document.getElementById("emailError");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(emailPattern.test(email.value) == false){
        email.style.borderColor = "red";
        p.innerText = "Tapez votre email correct";
        p.style.color = "red"; 
    }else{
        email.style.borderColor = "green";
        p.innerText = "✓";
        p.style.color = "green"
    }
}
function validetel(){
    var tel = document.getElementById("tel");
    var p = document.getElementById("telError");

    if(tel.value.length < 10 || tel.value.length > 10){
        tel.style.borderColor = "red";
        p.innerText = "le téléphone doit contenir 10 caractères";
        p.style.color = "red";
    }else{
        tel.style.borderColor = "green";
        p.innerText = "✓";
        p.color = "green";
    }
}
function validepassword(){
    var pass = document.getElementById("password");
    var p = document.getElementById("passwordError");

    if( pass.value.length < 6){
        pass.style.borderColor = "red";
        p.innerText = "Le mot de passe doit être au moins de 6 caractères";
        p.style.color = "red";
    }else{
        pass.style.borderColor = "green";
        p.innerText = "✓";
        p.style.color = "green";
    }
}
function valide(){
    var nom = document.getElementById("name");

    var email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    var tel = document.getElementById("tel");

    var pass = document.getElementById("password");
    if( pass.value.length > 6 && tel.value.length == 10 && emailPattern.test(email.value) && nom.value.length >= 3){
    alert("le formulaire a été soumis avec succès.")
    }
}