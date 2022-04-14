let clock = document.querySelector('#clock')
let hex = document.querySelector("#hexclock")

function hexOclock(){
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if(h < 10){
        h = '0'+h;
    }
    if(m < 10){
        m = '0'+m;
    }
    if(s < 10){
        s = '0'+s
    }
    let timer = h + ':' + m + ':' + s;
    let color = '#'+h+m+s;
    clock.textContent = timer;
    hex.textContent = color
    document.body.style.background =color;
}
hexOclock()
setInterval(hexOclock,1000)