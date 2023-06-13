import React from "react";
import { Outlet } from "react-router-dom";

const authLayout = () => {
  return (
    <div>
      authLayout
      <Outlet />
    </div>
  );
};

export default authLayout;
