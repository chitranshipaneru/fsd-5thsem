const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");
const student = document.getElementById("Student");

btn.addEventListener("click", () => {

    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h3");
    name.textContent = nameInput.value;

    const email = document.createElement("p");
    email.textContent = "Email: " + emailInput.value;

    const password = document.createElement("p");
    password.textContent = "Password: " + passwordInput.value;

    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(password);

    student.appendChild(card);

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
});