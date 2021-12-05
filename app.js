const API = '04c35731a5ee918f014970082a0088b1'
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
const imgpath = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';
var main = document.getElementById('main');
var form = document.getElementById('form');
var Search = document.getElementById('Search')
getMovies(APIURL)


async function getMovies(url) {
    const resp = await fetch(url);

    const respdata = await resp.json();

    showmovies(respdata.results)
}
function showmovies(movies) {
    main.innerHTML = ''
if(movies == ''){
  var p =  document.createElement('p');
p.innerHTML = `No Result`
p.style.color='white'
p.style.textAlign='center'
p.style.marginTop='10px'
main.appendChild(p)
}


console.log(movies)
    movies.forEach(movie => {
        const { poster_path, title, vote_average } = movie

        const moviesEl = document.createElement('div');
        moviesEl.classList.add('movies')
        moviesEl.innerHTML = `
    <img src="${imgpath + poster_path}" alt="">
    
    <div class="movies-info">
    <h3>${title}</h3>
    <span class = ${getclassbyrate(vote_average)}>${vote_average}</span>
    </div>`
        main.appendChild(moviesEl)
    }
    );


}


function getclassbyrate(vote) {
    if (vote >= 8) {
        return 'green'
    }
    else if (vote >= 5) {
        return 'orange'
    }
    else {
        return 'red'
    }

}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchterm = Search.value


    if (searchterm) {

        getMovies(SEARCHAPI + searchterm)
        Search.value = ''

        var preloader = document.getElementById('preloader');
        preloader.style.display = 'block'
        var content = document.getElementById('content');
        content.style.display = 'none'

        setTimeout(hidemovie, 10000);

    }
})

function load() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none'
    var content = document.getElementById('content');
    content.style.display = 'block'
}
setTimeout(load, 5000)

function hidemovie() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none'
    var content = document.getElementById('content');
    content.style.display = 'block'
}