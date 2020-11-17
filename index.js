const input = document.querySelector('#input');

/* when user clear the board */

function checker() {
    const words = document.querySelector('.word');
    if (words === "") {
        alert("Congrat! you made it!");
        if(confirm('retry?')) {
            window.location.reload();
        }
    }
}

function removeWord () {
    const word = document.querySelector(`[data-word="${input.value}"]`);
    if (word) {
        word.remove();
        checker();
    }
    input.value='';
}

input.addEventListener('change', removeWord);