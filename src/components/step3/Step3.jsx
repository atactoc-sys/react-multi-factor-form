import { Divider, Typography } from "@mui/material";
import React from "react";
import "./Step3.css";

const Step3 = ({ formData }) => {
  return (
    <div className="step3">
      <div className="step3Container">
        <Typography variant="h4">Confirmation</Typography>

        <div>
          <Typography variant="h6">Review Your Information</Typography>
          <Divider />
          <div className="pInfo">
            <Typography>Name: {formData.name}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Phone: {formData.phone}</Typography>
          </div>
          <Divider variant="middle" />
          <div className="address">
            <Typography>Address Line 1: {formData.addressLine1}</Typography>
            <Typography>Address Line 2: {formData.addressLine2}</Typography>
            <Typography>City: {formData.city}</Typography>
            <Typography>State: {formData.state}</Typography>
            <Typography>Zip Code: {formData.zip}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
