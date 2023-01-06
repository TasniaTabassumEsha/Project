const hrEl=document.getElementById("hours");
const minEl=document.getElementById("minutes");
const secEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function updateClock()
{
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm= "AM";

    if(h>12)
    {
        h=h-12;
        ampm="PM";
    }

    hrEl.innerText=h;
    minEl.innerText=m;
    secEl.innerText=s;
    ampmEl.innerText=ampm;

    setTimeout(()=>{
        updateClock();
    },1000)

}

updateClock();