// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { isValidPhone } from "../../validation/phoneValidation";

const Login = () => {

  const [phone, setPhone] = useState(""); // user types only 9 digits (e.g. 912345678)

  const { startLogin, pendingPhone } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  console.log("Render Login - pendingPhone:", pendingPhone);
  console.log("Current phone input:", phone);
  console.log("Is phone valid?", isValidPhone(phone));


  //  Handle submit
  const handleSubmit = (e) => {

    e.preventDefault();

    // 1) Validate local format
    if (!isValidPhone(phone)) {
      showToast("Invalid phone format", "error");
      return;
    }

    // 2) Normalize to +251 format
    const fullPhone = `+251${phone}`;

    // 3) Try to start login (sets pendingPhone in context if found)
    if (startLogin(fullPhone)) {
      showToast(` OTP sent to ${fullPhone}`, "success");
      navigate("/otp");
    } else {
      showToast(" Phone not found in system!", "error");
    }
  };


  return (
    <div className="flex flex-col items-center bg-light-background 
                    justify-center h-screen space-y-5">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 sm:border-2
                      sm:border-slate-300 sm:rounded-lg sm:p-6 
                      sm:shadow-md sm:mx-auto sm:pb-15">

        {/*  Logo + Intro */}
        <div className="text-center mb-0">
          <img
            src={assets.logo_X}
            alt="X-Equb Logo"
            className="w-52 h-52 mx-auto mb-3"
          />
          <h2 className="text-2xl font-bold mb-2">Welcome to X-Equb</h2>
          <p className="text-[15px] text-gray-600 mb-4">
            Smart, Simple, and Secure – Equb Made Easy for You
          </p>
        </div>


        {/*  Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-center space-y-4 mb-4"
        >
          <div className="flex flex-col items-center w-full gap-2 mb-2">
            {/* Phone Input with +251 prefix */}
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 pr-1.5 border-r-2 border-gray-300 text-gray-600">
                +251
              </span>
              <input
                type="text"
                placeholder="912345678"
                value={phone}
                maxLength={9}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // digits only
                  setPhone(value);
                }}
                className="w-full p-4 pl-16 border rounded-lg focus:outline-light-btns-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-light-btns-primary text-gray-800 
                       p-2 px-10 rounded-lg hover:bg-light-btns-secondary_hoverd"
          >
            Next
          </button>
        </form>


        {/* for demo purposes only */}
        <div className="mt-4">
          <h1 className="text-sm text-center text-gray-500">   2 Sample Users (for demo):</h1>
          <p className="text-sm text-center text-gray-500">
            login for: <strong>{"912345678"}</strong>
          </p>
          <p className="text-sm text-center text-gray-500">
            or login for: <strong>{"922334455"}</strong>
          </p>
          <div className="text-center text-xs text-gray-400 mt-1">
            ( OTP will work - no SMS sent but you can add  4-digit code to test for for first user: <strong>1234</strong>  and for second user: <strong>5678</strong> )
          </div>


        </div>


      </div>

    </div>
  );
};

export default Login;
