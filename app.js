var input = document.querySelector(".text");
var submit = document.querySelector(".submit");
var name = document.querySelector(".place");
var temperature = document.querySelector(".temperature");




submit.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=11b9cea129e1c344129854c681800e36`)
        .then(response => response.json())
        .then(data => console.log(data))

        .catch(error => alert("wrong city name!"));
});