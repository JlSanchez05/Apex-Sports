let homeLink = document.querySelector(".home");
let aboutLink = document.querySelector(".about");
let servicesLink = document.querySelector(".services");
let contactLink = document.querySelector(".contact");
let bookNowBtn = document.querySelector("#btn-book");

homeLink.addEventListener("mouseover", function () {
  homeLink.style.color = "gold";
});
homeLink.addEventListener("mouseout", function () {
  homeLink.style.color = "white";
});

aboutLink.addEventListener("mouseover", function () {
  aboutLink.style.color = "gold";
});
aboutLink.addEventListener("mouseout", function () {
  aboutLink.style.color = "white";
});

servicesLink.addEventListener("mouseover", function () {
  servicesLink.style.color = "gold";
});
servicesLink.addEventListener("mouseout", function () {
  servicesLink.style.color = "white";
});

contactLink.addEventListener("mouseover", function () {
  contactLink.style.color = "gold";
});
contactLink.addEventListener("mouseout", function () {
  contactLink.style.color = "white";
});

bookNowBtn.addEventListener("click", function () {
  let formCon = document.querySelector(".form-container");
  let firsNameL = document.createElement("label");
  firsNameL.className = "labels";
  firsNameL.textContent = "First Name";
  formCon.appendChild(firsNameL);

  let input1 = document.createElement("input");
  input1.className = "input";
  input1.type = "name";
  input1.id = "firstName";
  input1.placeholder = "First Name";
  formCon.appendChild(input1);

  let lastName = document.createElement("label");
  lastName.className = "labels";
  lastName.textContent = "Last Name";
  formCon.appendChild(lastName);

  let input2 = document.createElement("input");
  input2.className = "input";
  input2.type = "name";
  input2.id = "lastName";
  input2.placeholder = "Last Name";
  formCon.appendChild(input2);

  let email = document.createElement("label");
  email.className = "labels";
  email.textContent = "Email";
  formCon.appendChild(email);

  let input3 = document.createElement("input");
  input3.className = "input";
  input3.type = "email";
  input3.id = "email";
  input3.placeholder = "Email";
  formCon.appendChild(input3);

  let phone = document.createElement("label");
  phone.className = "labels";
  phone.textContent = "Phone Number";
  formCon.appendChild(phone);

  let input4 = document.createElement("input");
  input4.className = "input";
  input4.type = "tel";
  input4.id = "phoneNumber";
  input4.placeholder = "Email";
  formCon.appendChild(input4);

  let btn = document.createElement("button");
  btn.id = "btn-submit";
  btn.textContent = "Submit";
  formCon.appendChild(btn);

  btn.addEventListener("click", function () {
    location.reload();
  });
  bookNowBtn.disabled = true;
});
