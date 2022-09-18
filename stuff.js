//try to split it into files later

window.onload= stuff;   

function stuff(){
    var schoolModal = document.getElementById("schoolModal");
    var countryModal = document.getElementById("countryModal");
    var hobbyModal = document.getElementById("hobbyModal");
    var animangaModal = document.getElementById("animangaModal");
    var musicModal = document.getElementById("musicModal");

    var schoolSpan = document.getElementById("schoolSpan");
    schoolSpan.onclick = function() {
        schoolModal.style.display = "none";
    }

    var countrySpan = document.getElementById("countrySpan");
    countrySpan.onclick = function() {
        countryModal.style.display = "none";
    }

    var hobbySpan = document.getElementById("hobbySpan");
    hobbySpan.onclick = function() {
        hobbyModal.style.display = "none";
    }

    var animangaSpan = document.getElementById("animangaSpan");
    animangaSpan.onclick = function() {
        animangaModal.style.display = "none";
    }

    var musicSpan = document.getElementById("musicSpan");
    musicSpan.onclick = function() {
        musicModal.style.display = "none";
    }


    var school = document.getElementById('school')
    school.onclick=(function(){
        schoolModal.style.display = "block";
    })
    
    var country = document.getElementById('country')
    country.onclick=(function(){
        countryModal.style.display = "block";
    })

    var hobby = document.getElementById('hobby')
    hobby.onclick=(function(){
        hobbyModal.style.display = "block";
    })

    var animanga = document.getElementById('animanga')
    animanga.onclick=(function(){
        animangaModal.style.display = "block";
    })

    var music = document.getElementById('music')
    music.onclick=(function(){
        musicModal.style.display = "block";
    })

    var modal = document.getElementById("myModal");
    
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }


    }