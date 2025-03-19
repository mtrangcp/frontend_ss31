// lay theo id
const heading1 = document.getElementById("heading-1");
console.log(heading1);

// lay theo class
const getClass = document.getElementsByClassName("cource");
console.log(getClass);

// query
const productItem = document.querySelectorAll(".product");
console.log(productItem);


// tat ca li
const lisstLi = document.querySelectorAll("li");
console.log("li: ", lisstLi);

// lay input co name = email
const emailEl = document.querySelector("input[name='email']");
console.log("input: ", emailEl);

const products = document.querySelectorAll("#list-product .product");
console.log("products: ", products);

const userNameEl = document.querySelector("#userName");
console.log(userNameEl.innerHTML);
console.log(userNameEl.innerText);
console.log(userNameEl.textContent);


// so sanh innerText, innerHTML, textContent
const demoEl = document.querySelector('#demo');
console.log("innerText: ", demoEl.innerText);
console.log("textContent: ", demoEl.textContent);
console.log("innerHTML: ", demoEl.innerHTML);


const ageEl = document.querySelector("#age");
ageEl.textContent = "chan oi la chan"

// classList
const formEl = document.querySelector("#form");
formEl.classList.add("form-add");

// xoa class khoi 1 ptu
formEl.classList.remove("form");

formEl.classList.contains("hidden");

// them/xoa class
formEl.classList.toggle("show");
formEl.classList.toggle("hidden");




