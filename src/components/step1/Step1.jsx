import { Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

import "./Step1.css";

const Step1 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="step1">
      <div className="step1Container">
        <form className="personalInfoForm">
          <Typography variant="h4">
            <p>P</p>
            <p>E</p>
            <p>R</p>
            <p>S</p>
            <p>O</p>
            <p>N</p>
            <p>A</p>
            <p style={{ marginRight: "1vmax" }}>L</p>
            <p>I</p>
            <p>N</p>
            <p>F</p>
            <p>O</p>
            <p>R</p>
            <p>M</p>
            <p>A</p>
            <p>T</p>
            <p>I</p>
            <p>O</p>
            <p>N</p>
          </Typography>
          <div>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
