

window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        document.getElementById("headcolour").style.backgroundColor = "transparent";
    }
    else {
        document.getElementById("headcolour").style.backgroundColor = "#e6e6e6";
    }
});

document.getElementById("git").addEventListener("click", function () {
    window.location.replace("https://github.com/ShinyACash");
});
document.getElementById("inst").addEventListener("click", function () {
    window.alert("no. hehe");
});

