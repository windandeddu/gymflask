let page = document.querySelector('.pages');
let themeButton1 = document.querySelector('.theme-button1');
let themeButton2 = document.querySelector('.theme-button2');

page.onload = function () {
    if (localStorage.getItem('theme') != '1'){
        page.classList.toggle('darktheme');
        page.classList.toggle('lighttheme');
    }
}

themeButton1.onclick = function() {
    page.classList.toggle('darktheme');
    page.classList.toggle('lighttheme');
    if (page.classList.contains('darktheme')){
        localStorage.setItem('theme', '1')
    }
    else {
        localStorage.setItem('theme', '2')
    }
};

themeButton2.onclick = function() {
    page.classList.toggle('darktheme');
    page.classList.toggle('lighttheme');
    if (page.classList.contains('darktheme')){
        localStorage.setItem('theme', '1')
    }
    else {
        localStorage.setItem('theme', '2')
    }
};
