document.getElementById('btn-login').addEventListener('click',function(){
    const emailfield = document.getElementById('email-input');
    const userEmail = emailfield.value;

    const passField = document.getElementById('pass-input');
    const userPass = passField.value;
    console.log(userPass)

    if (userEmail == 'abcd@gmail.com' && userPass == 'abcde'){
        window.location.href='banking.html';
    }

})