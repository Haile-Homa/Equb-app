import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { isValidPhone } from "../validation/phoneValidation";


const Login = () => {
  const { checkPhone, sendOtp, error } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Show toast if there's an error from context
  useEffect(() => {
    if (error) showToast(error, "error");
  }, [error, showToast]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Validate name
    // if (!name.trim()) {
    //   showToast("❌ Enter your name", "error");
    //   return;
    // }

    // Validate phone
    if (!isValidPhone(phone)) {
      showToast("❌ Enter a valid phone (9XXXXXXXX)", "error");
      return;
    }

    const fullPhone = "+251" + phone;

    // Check if user already exists
    const result = await checkPhone(fullPhone);

    if (result.exists) {
      showToast(`✅ Welcome back, ${result.user.fullName}`, "success");
      navigate("/home"); // Redirect existing user
    } else {
      // Send OTP to new user
      await sendOtp(fullPhone, name);
      showToast("📲 OTP sent! Check console for dev OTP", "info");

      // Pass phone & name to OTP page
      navigate("/otp", { state: { phone: fullPhone, name } });
    }
  };



  return (
    <div className="flex flex-col items-center bg-light-background 
                    justify-center h-screen space-y-5   ">

      <div className=" w-full sm:w-3/4 md:w-2/3 lg:w-1/2 sm:border-2
                    sm:border-slate-300 sm:rounded-lg sm:p-6 
                      sm:shadow-md sm:mx-auto sm:pb-15  ">

        <div className="text-center mb-0">
        
          <img
            src={assets.logo_X}
            alt="X-Equb Logo"
            className="w-52 h-52 mx-auto mb-3"
          />

          <h2 className="text-2xl font-bold mb-2 text-center">
            Welcome to the X-Equb
          </h2>

          <p className="text-[15px] text-gray-600 mb-4">Smart, Simple, and Secure – Equb Made Easy for You</p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-center space-y-4 mb-4"
        >
          <div className="flex flex-col items-center w-full gap-2 mb-2">
            {/* Name Input */}
            {/*             <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 pl-4 border rounded-lg focus:outline-blue-500"
            /> */}

            {/* Phone Input with +251 prefix */}
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 pr-1.5 border-r-2 border-gray-300 text-gray-600">
                +251
              </span>
              <input
                type="text"
                placeholder="914*****"
                value={phone}
                maxLength={9}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setPhone(value);
                }}
                className="w-full p-4 pl-16 border rounded-lg focus:outline-light-btns-primary"
              />
            </div>
          </div>

          {/* Remove inline error message if using toast only */}
          <button
            type="submit"
            className="bg-light-btns-primary text-gray-800 
                        p-2 px-10 rounded-lg hover:bg-light-btns-secondary_hoverd"
          >
            Next
          </button>
        </form>
      </div>

    </div>
  );
};

export default Login;