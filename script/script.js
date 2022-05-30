function reveal() {
    var reveals = document.querySelectorAll(".skills");
    var main_circle = document.querySelectorAll(".main-cir");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 300;

        for (var j = 0; j < main_circle.length; j++) {
            if (elementTop < windowHeight - elementVisible) {
                main_circle[j].classList.add("cir2");
            } else {
                main_circle[j].classList.remove("cir2");
            }
        }
    }
}

window.addEventListener("scroll", reveal);