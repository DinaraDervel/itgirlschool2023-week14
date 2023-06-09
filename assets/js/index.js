const listOfDirectors = document.querySelector(".list");
const listOfBestFilms = document.querySelector(".films");
const arrayOfBestFilms = [];
let i = 0;


arrayOfDirectors.forEach((elem) => {
    const infoAboutDirector = document.createElement('li');
    infoAboutDirector.innerHTML = `${elem.name}<p><span class="career">${elem.career}</span><a href="${elem.films}">Фильмография</a></p>`;
    listOfDirectors.append(infoAboutDirector);
    arrayOfBestFilms[i++] = elem.top_rated_film;
});

listOfBestFilms.innerText = arrayOfBestFilms.join(', ');