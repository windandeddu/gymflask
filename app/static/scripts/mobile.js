let userDeviceArray = [
    {device: 'Android', platform: /Android/},
    {device: 'iPhone', platform: /iPhone/},
    {device: 'iPad', platform: /iPad/},
    {device: 'Symbian', platform: /Symbian/},
    {device: 'Windows Phone', platform: /Windows Phone/},
    {device: 'Tablet OS', platform: /Tablet OS/},
    {device: 'Linux', platform: /Linux/},
    {device: 'Windows', platform: /Windows NT/},
    {device: 'Macintosh', platform: /Macintosh/}
];

let platform = navigator.userAgent;

function getPlatform() {
    for (let i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
    return 'Неизвестная платформа!' + platform;
}

let currentplatform = getPlatform();

if (currentplatform != "Linux" & currentplatform != "Windows NT" & currentplatform != "Macintosh") {
    document.querySelector(".pages").classList.add('mobile');
    document.querySelector(".descmenu").style.display = "none"
    document.querySelector('.theme-button1').style.display = "none"
} else {
    document.querySelector(".mobmenu").style.display = "none"
}
