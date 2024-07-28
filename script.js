

const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const newYears = '1 Jan 2025';

const countDown = ()=>{

    const newYearsDate = new Date(newYears);

    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;


    const hours = Math.trunc((seconds / 3600)) % 24;
    
    const days = (Math.floor((seconds / 60) / 60 / 24))

    const countDownSeconds = Math.trunc(seconds % 60);

    const minutes = (Math.round(seconds / 60 ) % 60);
    
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = countDownSeconds;

    

  
}

countDown()

setInterval(countDown, 1000)



// LISTEN TO THIS
// LEARN MORE ABOUT NODE LISTS AND DOMLIST
// dont use nodes or nodelist, which means don't use query selectors for innertext or text content because this will append it to every node. Using getElementbyid gets a domlist which only gets the textcontent.


// Have to use Modules to get exact time.


// bug - minutes weirdly only change at the 29 second point.- Should change when it hits 59.
