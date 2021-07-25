function querySelect(query){
    return document.querySelector(`${query}`);
}

document.body.addEventListener('keyup', (event) =>{
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () =>{
    let song = querySelect('#input').value;
    if (song !=='') {
        let songArray = song.split('');
        playComposition(songArray);
    }else{
        alert("campo obritorio!")
    }
    
});

function playSound(sound){
    let audioElement = querySelect(`#s_${sound}`);
    let keyElement = querySelect(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(object){
    let wait = 0;
    for(let item of object) {
        setTimeout(() => {
            playSound(`key${item}`);
        }, wait);    

        wait+=250;
    }
    
}