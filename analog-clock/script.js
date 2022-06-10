/* clock settings */
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setClock = () => {

    const now = new Date();

    const hour = now.getHours();     
    const mins = now.getMinutes();    
    const seconds = now.getSeconds();   

    const hourDegrees = ((hour *30)) + (mins * 6 / 12) + 90;
    const minsDegrees = mins * 6 + 90;
    const secondsDegrees = seconds * 6 + 90;
   
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
};

setClock();
setInterval(setClock, 1000);

/* Theme change */
const switchTheme = (e) => {
	if (e.target.textContent.toLowerCase() === "light") {
		e.target.textContent = "dark";
		document.documentElement.setAttribute("clock-theme", "dark"); 
	} else {
		e.target.textContent = "light";
		document.documentElement.setAttribute("clock-theme", "light");
	}
};

const switchBtn = document.querySelector(".switch-btn");
switchBtn.addEventListener("click", switchTheme);

let currentTheme = "dark";
if (currentTheme) {
	document.documentElement.setAttribute("clock-theme", currentTheme);
	switchBtn.textContent = currentTheme;
};