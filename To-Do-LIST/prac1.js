const form = document.querySelector('#logoin-form');
form.addEventListener('submit', (event) => {

    event.preventDefault();

    const username = document.querySelector('#NAME').value;

    const password = document.querySelector('#PASS').value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    if(username.trim()==="" || password.trim()===""){
        alert("Please fill all the fields.");
        return;
    }

    window.location.href = "new.html";
});
