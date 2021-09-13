// {
//     type: 'INCREASE_COUNT'
// }
// {
//     type: 'DECREASE_COUNT'
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_To_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";


//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_To_FAVOURITE,
    movie
  };
}
export function removeFromFavourites(movie){
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie
  };
}
export function setShowFavourites(val){
  return {
    type: SET_SHOW_FAVOURITES,
    val
  };
}

