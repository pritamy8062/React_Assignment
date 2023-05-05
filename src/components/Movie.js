import React from "react";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import Summary from "./Summary";

function Movie(props) {
  console.log(props);
  const navigate = useNavigate();
  return (
    <div className="movie_card">
      <div>Name: {props.name}</div>
      <div>Rating: {props.rating}</div>
      <div>Language: {props.language}</div>
      <div>Premiered: {props.premiered}</div>
      {props.image !== null && (
        <div className="self-center">
          <img className="photo" alt="no_pic" src={props.image.original}></img>
        </div>
      )}
      {
        <Button
          onClick={() => {
            navigate("/summary", {
              state: { Summary: props.summary, name: props.name },
            });
          }}
          variant="contained"
        >
          Read More
        </Button>
      }
    </div>
  );
}

export default Movie;
