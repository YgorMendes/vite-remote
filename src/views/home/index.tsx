import React, { useContext, useEffect, useState } from "react";

// contexts
// import useAuth from "host/useAuth";
// import { useUser } from "host/UserAuth";
import { useUserKeycloack } from "host/useUserKeycloack";
// import Title from "host/Title";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const { getUserName, userIsAuthenticate, userAllowedApps } = useUserKeycloack();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(getUserName());
    console.log(userIsAuthenticate());
    console.log(userAllowedApps());
    const havePermission = userAllowedApps()?.findIndex((app: any) => app.title === "Product A")
    console.log(havePermission)

    if (havePermission == -1) {
      window.location.href = "http://localhost:3000/home"
    }
  }, [useUserKeycloack]);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-3xl text-gray-800">Product A</h1>

          <div
            className="flex items-center justify-center py-2 px-4 rounded bg-blue-600 text-white cursor-pointer"
            onClick={() => navigate("/product-a/details")}
          >
            Details
          </div>
        </div>
        <p className="text-gray-700">
          Bem vindo,{" "}
          <span className="font-bold">
            {getUserName() ? getUserName() : "Usuário não encontrado"}
            {/* <Title /> */}
          </span>
        </p>
      </div>
    </div>
  );
};

export { HomeView };
