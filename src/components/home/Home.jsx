import { Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/form");
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="introduction">
          <Typography variant="h3">Hi, and Welcome</Typography>
          <Typography variant="h5">
            This is a responsive multi-step form with three steps, ensuring data
            validation, error handling, and navigation controls using React.js.
          </Typography>
        </div>
        <Button
          variant="outlined"
          endIcon={<TrendingFlatIcon />}
          onClick={handleGetStarted}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default Home;
