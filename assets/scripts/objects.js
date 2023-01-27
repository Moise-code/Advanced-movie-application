
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
  console.log(newMovie);
}

addMovieBtn.addEventListener('click', addMovieHandler)