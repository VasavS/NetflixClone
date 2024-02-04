//API Key From IMDB.
const api = "api_key=0d7fcb538472b4a248392fdaf9ae8532";
//Base URL of the site.
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";
//Requests for movie data.
const request = {
    fetchTrending : `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals : `${base_url}/discover/tv?${api}&with_networks=123`,
    fetchActionMovies : `${base_url}/discover/movie?${api}&with_generes=28`,
    fetchComedyMovies : `${base_url}/discover/movie?${api}&with_generes=35`,
    fetchHorrorMovies : `${base_url}/discover/movie?${api}&with_generes=27`,
    fetchRomanceMovies : `${base_url}/discover/movie?${api}&with_generes=10749`,
    fetchDocumentaries : `${base_url}/discover/movie?${api}&with_generes=99`
};
//Creating a truncate section to truncate the string.
function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}
//Fetch Requests.
fetch(requests.fetchNetflixOriginals)
.then((res)=>res.json)

.then((data)=>{
    console.log(data.results);
    const setMovie = 
    data.results[Math.floor(Math.random() * data.results.length-1)];
    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner_desc = document.getElementsById("banner_description");
    banner.style.backgroundImage = 
    "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview,150);
    banner_title.innerText = setMovie.name;
});
//Movies Rows
fetch(requests.fetchNetflixOriginals)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    row.className = "row";
    row.classList.add("netflixrow");
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "NETFLIX ORIGINALS";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";

        var s = movie.name.replace(/\s+/g,"");

        poster.id = s;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    });
});
//Trending
fetch(requests.fetchPopular)
.then((res)=>res.json())

.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = createElement("div");
    row.classname = "row";
    row.classList.add("popularrow");
    headrow.appendChild("row");

})
//Top Rated
fetch(requests.fetchTrending)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.row_name = "row__title";
    title.innertext = "Top Rated";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie)=> {
        console.log(movie);
    })
});
//Action Movies.
fetch(request.fetchActionMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = document.getElementId("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Action Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.class__name = "row__poster";
        var s2 = movie.id;
    });
});
//Comedy Movies.
fetch(requests.fetchComedyMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = getElementById("headrow");
    const row = document.createElement(div);
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_src + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
//Horror Movies.
fetch(requests.fetchHorrorMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = getElementById("headrow");
    const row = document.createElement(div);
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_src + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
//Romance Movies.
fetch(requests.fetchRomanceMovies)
.then((res)=>res.json())
.then((data)=>{
    const headrow = getElementById("headrow");
    const row = document.createElement(div);
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_src + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
//Documentaries.
fetch(requests.fetchDocumentaries)
.then((res)=>res.json())
.then((data)=>{
    const headrow = getElementById("headrow");
    const row = document.createElement(div);
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Documentaries";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = img_src + movie.backdrop_path;
        row_posters.appendChild(poster);
    });
});
