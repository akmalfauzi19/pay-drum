
const btns = document.querySelectorAll(".drum");

btns.forEach((btn, i) => {
    btn.addEventListener('click', function () {
        var txt = this.innerHTML;
        makeSound(txt);
        buttonAnimation(txt);
    });
});


document.addEventListener('keypress', function (e) {
    var key = e.key;
    makeSound(key);
    buttonAnimation(key);
});

function makeSound(key) {
    switch (key) {
        case 'w':
            sound('tom-1')
            break;
        case 'a':
            sound('tom-2')
            break;
        case 's':
            sound('tom-3')
            break;
        case 'd':
            sound('tom-4')
            break;
        case 'j':
            sound('snare')
            break;
        case 'k':
            sound('crash')
            break;
        case 'l':
            sound('kick-bass')
            break;
        default:
            console.log('btn tidak ada');
            break;
    }
}

function sound(name) {
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}