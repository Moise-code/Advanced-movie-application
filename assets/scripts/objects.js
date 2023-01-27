
// first lets just access html elements
const addMovieBtn = document.querySelector('#add-movie-btn');
const searchMovieBtn = document.querySelector('#search-btn');

// lets create the array to push in movie object
const Movies = []
// function to add movie

const addMovieHandler = () =>{
// target the input values first

const movieTitle = document.querySelector('#title').value.trim();
const extraName = document.querySelector('#extra-name').value.trim();
const extraValue = document.querySelector('#extra-value').value.trim();
// so we are going to check if the inputs values are empty//

if(movieTitle === '' ||
  extraName === '' ||
  extraValue === ''){
    // we stop in case all inputs are empty.
    return
  }

  // we are going to create a movie object to hold both title extraname and extra-value

  const newMovie = {
    // here since we don't to add extraname as a property and assign extra value to it
    // we are going to create an inside object withing this object
    info : {
      title : movieTitle,
      // what we do here we called the value of extraname to be a key in info object then assign to it extraValue as a value.
      [extraName] : extraValue
    }

  }
  Movies.push(newMovie);
  renderMovies();
}

// function to render the movies and displays it to the dom

// const renderMovies = () =>{

//   // lets target the ul to append li in the end

//  const movieList = document.querySelector('#movie-list');
//  if(Movies.length === 0){
//    movieList.classList.remove('visible')
//   } else{
//     movieList.classList.add('visible');
//   }
//   movieList.innerHTML = '';
//   // now lets out put the movies by using foreach

//   Movies.forEach((movie) =>{
//     // then we create new document in the movie list 
//     const movieElement = document.createElement('li');
//     // to take element to add
//     movieElement.textContent = movie.info.title;
//     movieList.append(movieElement)
//   });

// }

// function to renders movies on the UI

const renderMovies = () =>{
  // we are going first to target the ul holder of movies
  const MovieList = document.querySelector('#movie-list');

  // if statement to check if movie array contains any element
  
  if(Movies.length === 0){
    MovieList.classList.remove('visible')
  } else{
    MovieList.classList.add('visible');
  }
  MovieList.innerHTML = '';
// then to append to the list we first add a li in the ul
const MovieElement = document.createElement('li')
// adding a foreach methos to add each movies title.
Movies.forEach((movie) =>{
  
  MovieElement.textContent = movie.info.title;
  MovieList.append(MovieElement);
})

}
addMovieBtn.addEventListener('click', addMovieHandler)