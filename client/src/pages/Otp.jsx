import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";


const Otp = () => {

  const { verifyOtp, error, tempUser } = useAuth();
  const { showToast } = useToast();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [resendTimer, setResendTimer] = useState(60);
  const inputsRef = useRef([]);


  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => showToast(error, "error"), 100);
    }
    return () => clearTimeout(timeout);
  }, [error, showToast]);




  // Handle OTP input change
  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };


  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    verifyOtp(otp.join(""));
  };


  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-light-background ">


      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-2xl w-80 text-center"
      >

        <h2 className="text-xl font-bold mb-2">Verification Code</h2>

        <p className="text-sm text-gray-600 mb-4">
          Please enter the code we sent you via sms <br />
          <span className="font-semibold">{tempUser?.phone}</span>
        </p>


        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-3 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              className="w-12 h-12 border rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>


        {/* Verify Button */}
        <button
          type="submit"
          className="w-full bg-light-btns-primary  
                   text-white py-2 rounded-lg hover:bg-light-btns-secondary_hoverd"
        >
          Next
        </button>


        {/* Resend OTP */}
        <p className="text-sm text-gray-500 mt-4">
          Didn’t receive a code?{" "}
          <button
            type="button"
            disabled={resendTimer > 0}
            onClick={() => setResendTimer(60)}
            className={`font-semibold ${resendTimer > 0 ? "text-gray-400" : "text-light-btns-primary"
              }`}
          >
            Resend {resendTimer > 0 && `(${resendTimer}s)`}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Otp;



/* 

bg-light-btns-primary

 hover:bg-light-btns-secondary_hoverd



*/