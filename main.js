document.addEventListener("DOMContentLoaded", function () {
    const generateMemeBtn = document.querySelector(".meme_generator .generate_meme_btn");
    const memeImage = document.querySelector(".meme_generator img");
    const memeTitle = document.querySelector(".meme_generator .meme_title");
    const memeAuthor = document.querySelector(".meme_generator .meme_author");
    const buttonGym = document.getElementById("buttonGym");
    const buttonHistory = document.getElementById("buttonHistory");
    const buttonRandom = document.getElementById("buttonRandom");






    // Basis-URL für die Meme-API
    let baseUrl = "https://meme-api.com/gimme/";

    const updateDetails = (url, title, author) => {
        memeImage.setAttribute("src", url);
        memeTitle.innerHTML = title;
        memeAuthor.innerHTML = `Meme by: ${author}`;
    };

    const generateMeme = (memeType) => {

        const apiUrl = baseUrl + memeType;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                updateDetails(data.url, data.title, data.author);
            })
            .catch((error) => console.error("Fehler beim Abrufen des Memes:", error));
    };


    document.querySelector(".meme_generator").addEventListener("click", function (event) {
      if (event.target === buttonRandom) {
          generateMeme("wholesomememes");
      } else if (event.target === buttonGym) {
          generateMeme("GymMemes");
      } else if (event.target === buttonHistory) {
          generateMeme("HistoryMemes");
      }
  });
  
   
});









let APIKEY = "p31kaZjo3FtvNn6xgmVmsPAIKuuzrtYc";
      // you will need to get your own API KEY
      // https://developers.giphy.com/dashboard/
      document.addEventListener("DOMContentLoaded", init);
      function init() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
          ev.preventDefault(); //to stop the page reload
          let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
          let str = document.getElementById("search").value.trim();
          url = url.concat(str);
          console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(content => {
              //  data, pagination, meta
              console.log(content.data);
              console.log("META", content.meta);
              let fig = document.createElement("figure");
              let img = document.createElement("img");
              let fc = document.createElement("figcaption");
              img.src = content.data[0].images.downsized.url;
              img.alt = content.data[0].title;
              fc.textContent = content.data[0].title;
              fig.appendChild(img);
              fig.appendChild(fc);


              let pic = document.querySelector(".pic");         
              pic.insertAdjacentElement("afterbegin", fig);
              

              document.querySelector("#search").value = "";
            })
            .catch(err => {
              console.error(err);
            });
        });
      }