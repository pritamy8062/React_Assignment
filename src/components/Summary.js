import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import parse from "html-react-parser";
import { Button } from "@mui/material";
import BookTicket from "./BookTicket";
function Summary() {
  const [form, setForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      {" "}
      <div className="flex flex-col gap-10 justify-center items-center border border-white p-16 m-10">
        <div className="text-3xl text-bold ">{location.state.name}</div>
        <div>{parse(location.state.Summary)}</div>
      </div>
      <div className="">
        {form === false ? (
          <Button
            variant="contained"
            onClick={() => {
              setForm(true);
            }}
          >
            Book Ticket
          </Button>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {form === true && <BookTicket name={location.state.name}></BookTicket>}
      </div>
    </div>
  );
}

export default Summary;
