import React from "react";
import { Button, dividerClasses } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "./Navbar";
import Muicard from "./Muicard";
import { Container } from "@mui/material";
import CardData from "./CardData";
const MuiFile = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ border: 1 }}>
        {CardData.map((val, ind) => {
          return (
            <div key={ind}>
              <div>{val.name}</div>
              <div style={{ display: "flex" }}>
                {val.tours.map((val, ind) => {
                  return (
                    <div key={ind}>
                      <Muicard card={val} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default MuiFile;
