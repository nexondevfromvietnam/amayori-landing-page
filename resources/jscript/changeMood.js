const btnChangeMood = document.getElementById('bot-left-area-btn');
let a = 10;
let x = parseInt(a);
    let b = 0;
    let i = parseInt(b);

btnChangeMood.addEventListener('click',()=>{
    //check what is wallpaper now
    if(x%2===0){
        document.getElementById('backgroundVisible').setAttribute("style", "transition: 1s;background-image: url('./resources/img/bg3.jpg');");
        x=x-3;
        i++;
        //console.log(`x: ${x} | i:${i}`);
        return;
    }
    if (!x%2===0){
        document.getElementById('backgroundVisible').setAttribute("style", "transition: 1s;background-image: url('./resources/img/bg2.jpg');");
        i++;
        x=x+3;
        //console.log(`x: ${x} | i:${i}`);
        return;
    }
})