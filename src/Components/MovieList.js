import React from 'react';
import MovieCard from './MovieCard';

function MovieList({LofMovies}) {
  return (<div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}} >
{LofMovies.map(el=><MovieCard key={el.id} title={el.title} description={el.description} image={el.posterURL} rating={el.rating} />)}
  </div>);
}

export default MovieList;

