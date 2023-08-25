import React from "react";
import { Paper, Box, Typography, Rating } from "@mui/material";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { Link } from "react-router-dom";

const Muicard = ({ card }) => {
  return (
    <Box>
      <Paper elevation={2} sx={{ width: "250px", border: 1, height: "250px" }}>
        <Link to="/mui/go">
          <img
            style={{ width: "100%", height: "100px" }}
            src={card?.image}
            alt=""
          />
        </Link>
        <Typography marginleft={1}>{card?.name}</Typography>
        <Box sx={{ display: "flex", marginBottom: 4 }}>
          <QueryBuilderIcon fontSize="small" marginleft={5}></QueryBuilderIcon>
          <Typography marginleft={1}>{card?.duration} Hours</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Rating
            name="disabled"
            size="small"
            value={card?.rating}
            precision={0.5}
            style={{ alignSelf: "center" }}
          ></Rating>
          <Typography marginleft={1}>{card?.rating}</Typography>
          <Typography marginleft={1}>
            ({card?.numberOfReviews} reviews)
          </Typography>
        </Box>
        <Typography marginleft={1}>From C ${card?.price}</Typography>
      </Paper>
    </Box>
  );
};

export default Muicard;
