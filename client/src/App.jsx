// src/App.js

import AppRoutes from "./routes/AppRoutes";


export default function App() {
  return (

    <div className="min-h-screen  flex flex-col
                bg-light-background lg:w-[500px] lg:text-sm lg:mx-auto  
                border-x-2 border-gray-300  "
                >
      {/* Navbar always visible */}
      {/* <Navbar /> */}

      {/* Routes */}
      <main className="flex-1 p-4">
        <AppRoutes />
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>

  );
}
