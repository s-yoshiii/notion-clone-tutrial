import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/imges/notion-logo.png";

const authLayout = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={logo}
            style={{
              width: 100,
              height: 100,
              marginBottom: 3,
            }}
            alt=""
          />
          Notionクローン開発
        </Box>
        authLayout
        <Outlet />
      </Container>
    </div>
  );
};

export default authLayout;
