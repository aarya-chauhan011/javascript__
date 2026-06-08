let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');
let msec = 0o0;
let secs = 0o0;
let mins = 0o0;
let timerid = null;
startbtn.addEventListener('click', function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
   timerid = setInterval(starttimer,10);
});
stopbtn.addEventListener('click', function(){
        clearInterval(timerid);
    });
resetbtn.addEventListener('click', function(){
        clearInterval(timerid);
        timerdisplay.innerHTML = '00: 00: 00';
    });
//ab ek function likhna hai jaise hi start btn click ho yeh function execute ho
function starttimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins = mins+1;

        }
    }
      let msecString = msec < 10 ? `0${msec}` : msec;
let secsString = secs < 10 ? `0${secs}` : secs;
let minsString = mins < 10 ? `0${mins}` : mins;

timerdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}