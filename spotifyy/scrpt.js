// ---------------- NAVIGATION ----------------
const items = document.querySelectorAll(".nav-item");

items.forEach(item => {
    item.addEventListener("click", () => {

        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const page = item.textContent.trim();
        handleNavigation(page);
    });
});

function handleNavigation(page) {
    if (page.includes("Home")) {
        console.log("Home page loaded");
    } else if (page.includes("Search")) {
        console.log("Search page loaded");
    }
}


// ---------------- LIBRARY BUTTONS ----------------
document.querySelector(".lib-top button")
.addEventListener("click", () => {
    alert("Create Playlist clicked 🎵");
});

document.querySelectorAll(".box button").forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Action:", btn.textContent);
    });
});


// ---------------- CAROUSEL SCROLL ----------------
const container = document.querySelector(".card-container");

document.getElementById("rightBtn").addEventListener("click", () => {
    container.scrollBy({ left: 400, behavior: "smooth" });
});

document.getElementById("leftBtn").addEventListener("click", () => {
    container.scrollBy({ left: -400, behavior: "smooth" });
});


// ---------------- MUSIC PLAYER ----------------
const songs = [
    { name: "Song 1", artist: "Artist 1", file: "songs/song 1.mp3" },
    { name: "Song 2", artist: "Artist 2", file: "songs/song 2.mp3" },
    { name: "Song 3", artist: "Artist 3", file: "songs/song 3.mp3" }
];

const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("play");
const songInfo = document.querySelector(".song-info");

let currentSong = 0;

function loadSong(index) {
    audioPlayer.src = songs[index].file;
    songInfo.textContent = `${songs[index].name} - ${songs[index].artist}`;
}

loadSong(currentSong);

playBtn.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = "⏸";
    } else {
        audioPlayer.pause();
        playBtn.textContent = "▶";
    }
});

document.getElementById("next").addEventListener("click", () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audioPlayer.play();
});

document.getElementById("prev").addEventListener("click", () => {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audioPlayer.play();
});

document.getElementById("volume").addEventListener("input", (e) => {
    audioPlayer.volume = e.target.value / 100;
});

audioPlayer.addEventListener("ended", () => {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audioPlayer.play();
});


// ---------------- CARDS CLICK ----------------
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        currentSong = Number(card.dataset.index);
        loadSong(currentSong);
        audioPlayer.play();
    });
});


// ---------------- ARTISTS ----------------
const artists = [
    { name: "Arijit Singh", image: "artist1.jpg" },
    { name: "Shreya Ghoshal", image: "artist2.jpg" },
    { name: "Atif Aslam", image: "artist3.jpg" },
    {name : "Neha Kakkar" , image: "artist4.jpg"},
     { name: "Arijit Singh", image: "artist1.jpg" },
      { name: "Shreya Ghoshal", image: "artist2.jpg" },
       { name: "Atif Aslam", image: "artist3.jpg" },
        {name : "Neha Kakkar" , image: "artist4.jpg"},
];

const artistContainer = document.getElementById("artistContainer");

artists.forEach(a => {
    artistContainer.innerHTML += `
        <div class="artist-card">
            <img src="${a.image}">
            <h4>${a.name}</h4>
            <p>Artist</p>
        </div>
    `;
});


// ---------------- ALBUMS ----------------
const albums = [
    { name: "Aashiqui 2", artist: "Arijit Singh", image: "images/album1.jpg" },
    { name: "Rockstar", artist: "Mohit Chauhan", image: "images/album2.jpg" },
     { name: "Aashiqui 2", artist: "Arijit Singh", image: "images/album1.jpg" },
      { name: "Aashiqui 2", artist: "Arijit Singh", image: "images/album1.jpg" },
       { name: "Aashiqui 2", artist: "Arijit Singh", image: "images/album1.jpg" },
        { name: "Rockstar", artist: "Mohit Chauhan", image: "images/album2.jpg" },
         { name: "Rockstar", artist: "Mohit Chauhan", image: "images/album2.jpg" },
];

const albumContainer = document.getElementById("albumContainer");

albums.forEach(a => {
    albumContainer.innerHTML += `
        <div class="artist-card">
            <img src="${a.image}">
            <h4>${a.name}</h4>
            <p>${a.artist}</p>
        </div>
    `;
});


// ---------------- RADIO ----------------
const radios = [
    { name: "Hindi Hits", desc: "Top Hindi songs", image: "images/radio1.jpg" },
    { name: "Lo-fi Beats", desc: "Chill relaxing music", image: "images/radio2.jpg" },
     { name: "Hindi Hits", desc: "Top Hindi songs", image: "images/radio1.jpg" },
      { name: "Hindi Hits", desc: "Top Hindi songs", image: "images/radio1.jpg" },
       { name: "Lo-fi Beats", desc: "Chill relaxing music", image: "images/radio2.jpg" },
        { name: "Lo-fi Beats", desc: "Chill relaxing music", image: "images/radio2.jpg" }
];

const radioContainer = document.getElementById("radioContainer");

radios.forEach(r => {
    radioContainer.innerHTML += `
        <div class="artist-card">
            <img src="${r.image}">
            <h4>${r.name}</h4>
            <p>${r.desc}</p>
        </div>
    `;
});


// ---------------- CHARTS ----------------
const charts = [
    { name: "Top 50 Global", desc: "Worldwide trending songs", image: "images/chart1.jpg" },
    { name: "Top India", desc: "India trending music", image: "images/chart2.jpg" },
    {
        name: "Top 50",desc:"Genz Trending music", image : "images/chart1.jpg"
    },
    {
         name: "Top 50",desc:"Genz Trending music", image : "images/chart2.jpg"
    }
];

const chartsContainer = document.getElementById("chartsContainer");

charts.forEach(c => {
    chartsContainer.innerHTML += `
        <div class="artist-card">
            <img src="${c.image}">
            <h4>${c.name}</h4>
            <p>${c.desc}</p>
        </div>
    `;
});


// ---------------- FOOTER ----------------
document.querySelectorAll(".footer-column li").forEach(item => {
    item.addEventListener("click", () => {
        alert("Navigating to: " + item.textContent);
    });
});
document.querySelectorAll(".section").forEach(section => {

    const row = section.querySelector(".scroll-row");
    const leftBtn = section.querySelector(".scroll-left");
    const rightBtn = section.querySelector(".scroll-right");

    if (leftBtn && rightBtn && row) {

        rightBtn.addEventListener("click", () => {
            row.scrollBy({ left: 300, behavior: "smooth" });
        });

        leftBtn.addEventListener("click", () => {
            row.scrollBy({ left: -300, behavior: "smooth" });
        });

    }

});
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".left");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
     if(sidebar.classList.contains("active")){
        menuBtn.textContent = "✖";
    } else {
        menuBtn.textContent = "☰";
    }
});
