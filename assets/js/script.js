const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minutHand = document.querySelector(".minut"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");
    
if(localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark")
    modeSwitch.textContent = "Light"
}

const updateTime = () => {
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;
    
    secondHand.style.transform = `rotate(${secToDeg}deg)`
    minutHand.style.transform = `rotate(${minToDeg}deg)`
    hourHand.style.transform = `rotate(${hrToDeg}deg)`
}

modeSwitch.addEventListener('click', () => {
    body.classList.toggle("dark")
    
    const isDarkMode = body.classList.contains("dark");
    
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode")
})

setInterval(updateTime, 1000)

updateTime();