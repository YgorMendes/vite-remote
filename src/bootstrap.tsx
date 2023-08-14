import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// contexts
// import AuthContextProvider from "host/AuthContextProvider";
// import { UserProvider } from "host/UserAuth";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //   <BrowserRouter>
  //     <AuthContextProvider>
  //       <UserProvider>
  <App />
  //       </UserProvider>
  //     </AuthContextProvider>
  //   </BrowserRouter>
);
