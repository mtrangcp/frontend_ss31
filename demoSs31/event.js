
function handleClick() {
    alert("da click");
}


const btnEl = document.querySelector("#btn-click1");
btnEl.onclick = function () {
    alert("da click 1");
}


const btnEl2 = document.querySelector("#btn-click2");
btnEl2.addEventListener("dblclick", function () {
    alert("da click 2");
});


const inputEl = document.querySelector("#email");
inputEl.addEventListener("input", function (event) {
    console.log("input changed: ", event.target.value);

});










