// toggle switch:
let toggle = document.querySelector(".switch");


toggle.addEventListener("click", (e) => {
    document.querySelector("body").classList.toggle("dark-mode", 
    toggle.querySelector("input[type=checkbox]").checked)

    const heads = document.querySelectorAll('.darker');

    for (const head of heads) {
        head.classList.toggle("dark-head", 
        toggle.querySelector("input[type=checkbox]").checked)
    }
    
    const texts = document.querySelectorAll('.darken');

    for (const text of texts) {
        text.classList.toggle("dark-text", 
        toggle.querySelector("input[type=checkbox]").checked)
    }

    const blocks = document.querySelectorAll('.block');

    for (const block of blocks) {
        block.classList.toggle("dark-block", 
        toggle.querySelector("input[type=checkbox]").checked)
    }

    const bloks = document.querySelectorAll('.blok');

    for (const blok of bloks) {
        blok.classList.toggle("dark-block", 
        toggle.querySelector("input[type=checkbox]").checked)
    }
})