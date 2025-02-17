const API_Key = "f6c7aca6349b3b9af8216ccb6bb5d8fa";

document.addEventListener('DOMContentLoaded',function(){
    fetchTopTenMovies();
});

function fetchTopTenMovies() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&sort_by=popularity.desc`)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results.slice(0, 12));
        })
        .catch(error => console.error(error));
        


}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        let movieCard = document.createElement('div');
        movieCard.classList.add('flip', 'flip-vertical')
        movieCard.innerHTML = '
           
        ' 
    })
}