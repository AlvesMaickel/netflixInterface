window.addEventListener("scroll", function() {
    if (window.scrollY == 0) {
        document.getElementById("nav-container").classList.remove("navigation");
    } else {
        document.getElementById("nav-container").classList.add("navigation");
    }
});

let teste = document.getElementById('teste');

teste.addEventListener('scroll', function() {
    alert("fez");
});

// document.getElementById("t");
//   el.addEventListener("click", function(){modifyText("four")}, false);