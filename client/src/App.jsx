// src/App.js
import React from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col app-wrapper
              lg:mx-auto  
      "
    >
  
      <main className="flex-grow ">
        <AppRoutes />
      </main>


    </div>
  );
}
