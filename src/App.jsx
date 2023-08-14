// import React from "react";

// views

// styles
import { UserProvider } from "host/UserAuth";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Routers } from "./routes";

// import AuthContextProvider from "host/AuthContextProvider";

const TodoApp = () => {
  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <UserProvider>
          <Routers />
        </UserProvider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
};

export default TodoApp;
