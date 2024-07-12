import React from "react";
import { Typography, TextField } from "@mui/material";
import "./Step2.css";

const Step2 = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="step2">
      <div className="step2Container">
        <form className="addressInfoForm">
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>D</p>
            <p>R</p>
            <p>E</p>
            <p>S</p>
            <p>S</p>
            <p style={{ marginRight: "1vmax" }}>S</p>
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
              label="Address Line 1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.addressLine1}
              helperText={errors.addressLine1}
            />
            <TextField
              label="Address Line 2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.city}
              helperText={errors.city}
            />
            <TextField
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.state}
              helperText={errors.state}
            />
            <TextField
              label="Zip Code"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.zip}
              helperText={errors.zip}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
