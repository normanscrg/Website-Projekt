const generateMemeBtn = document.querySelector(".meme_generator .generate_meme_btn");
const memeImage = document.querySelector(".meme_generator img");
const memeTitle = document.querySelector(".meme_generator .meme_title");
const memeAuthor = document.querySelector(".meme_generator .meme_author");



const dropdownMenu = document.getElementById("navbarNavDropdown");
let selectedMenuItem = ""; // Variable, um den ausgewählten Dropdown-Punkt zu speichern

// Event-Listener für Klicks im Dropdown-Menü
dropdownMenu.addEventListener("click", function (event) {
  if (event.target.classList.contains("dropdown-item")) {
    // Wenn ein Dropdown-Element geklickt wurde
    selectedMenuItem = event.target.innerText;
    console.log("Ausgewählter Dropdown-Punkt:", selectedMenuItem);
  }
});

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};



const generateMeme = () => {
    fetch(`https://meme-api.com/gimme/HistoryMemes`)
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        });
};

generateMemeBtn.addEventListener("click", generateMeme);


generateMeme();
