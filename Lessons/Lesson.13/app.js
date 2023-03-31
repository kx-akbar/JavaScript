"use script";

const searchInp = document.getElementById('search');
const searchBtn = document.getElementById('btn-search');
const cinemaCards = document.getElementById('cinemaCards');

const loader = document.getElementById('loader');

searchBtn.addEventListener('click', function(){
    console.log(searchInp.value);
    cinemaCards.innerHTML = "";
    loader.style.display = "block";
    getCountryAsync();
});

document.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
      getCountryAsync(searchInp);
    }
    cinemaCards.innerHTML = "";
});

const getCountryAsync = async function () {
    // `https://www.omdbapi.com/${searchInp.value}?apikey=1fd18c03&s=panda`

    try {
        const dataJson = await fetch(
            `https://www.omdbapi.com/?apikey=1fd18c03&s=${searchInp.value}`
        );
        loader.style.display = "none";
        const data = await dataJson.json();
        console.log(data);
        console.log(data.Search);
        renderHtml(data.Search);
    } catch (error) {
        throw new Error(error);        
    };
  
};

const renderHtml = function(arrData) {
    arrData.forEach(data => {
        const html = `
        <div class="cinemaBox">
        <div class="cinemaBox__img" style="background-image: url(${data.Poster})"></div>
        <p class="cinemaBox__title">${data.Title}</p>
        <p class="cinemaBox__year">Year: ${data.Year}</p>
      </div>`

      cinemaCards.insertAdjacentHTML('afterbegin', html);
    });
}