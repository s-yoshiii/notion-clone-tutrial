import { Box, TextField } from "@mui/material";
import React from "react";

const Resister = () => {
  return (
    <Box component="form">
      <TextField
        fullWidth
        id="username"
        name="username"
        label="お名前"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="パスワード"
        margin="normal"
        type="password"
        required
      />
      <TextField
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        label="確認用パスワード"
        margin="normal"
        type="password"
        required
      />
    </Box>
  );
};

export default Resister;
