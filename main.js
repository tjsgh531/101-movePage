const moveOther = document.getElementById('moveOther');
const pageReload = document.getElementById('pageReload');
const history = document.getElementById('history');
const newPage = document.getElementById('newPage');

let time;

const timer = setInterval((settingTime,object) => {
    const date = new Date();
    if(time == null){
        return;
    }   
    const currentTime = Math.floor(date.getTime() - time.getTime());
    object.textContext = `${settingTime - currentTime}후 변경됩니다.`;
}, 500);

function setTime(settingTime,object){
    time = new Date();
    timer(settingTime,object);
}

setTime(5,moveOther);