import React, { useEffect, useState } from "react";
import Header from "./Header";
import Movie from "./Movie";

function MainApp() {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all#")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setmovies(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="movies">
        {movies.map((data) => {
          return (
            <Movie
              key={data.show.id}
              name={data.show.name}
              rating={data.show.rating.average}
              language={data.show.language}
              premiered={data.show.premiered}
              image={data.show.image}
              summary={data.show.summary}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainApp;
