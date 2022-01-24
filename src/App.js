import React, { useState } from 'react';
import AddNewMovie from './Components/AddNewMovie';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import { data } from './data';

function App() {
  const [movies, setMovies] = useState(data);
  const addNewMovie=(x)=>{
    return setMovies([...movies,x])
  }
  const filterMovie=(y)=>{
    return  setMovies(movies.filter(el => (el.title.toLowerCase().includes(y.toLowerCase())) ||
     (el.rating.toString().includes(y))))
  }
 
  return (
  <div>
<Filter filter={filterMovie} />
<AddNewMovie addFunction={addNewMovie} />
<MovieList LofMovies={movies} />
  </div>
  );
}

export default App;
