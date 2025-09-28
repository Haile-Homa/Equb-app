import React, { createContext, useContext, useState } from "react";
import { userDummyData } from "../db/data";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  
  const [stage, setStage] = useState("phone"); // "phone" | "otp"
  const [user, setUser] = useState(null); // logged-in user
  const [error, setError] = useState("");

  // Step 1: check phone
  const checkPhone = (phone, fullName) => {
    let foundUser = userDummyData.find((u) => u.phone === phone);

    if (foundUser) {
      // ✅ Existing user → log in directly
      setUser(foundUser);
      setStage("phone");
      setError("");
      return { exists: true };
    } else {
      // ❌ New user → create in dummy DB with OTP
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      const newUser = {
        _id: "u" + (userDummyData.length + 1),
        fullName: fullName || "New User",
        phone,
        otp,
        isVerified: false,
      };
      userDummyData.push(newUser);

      console.log("📲 Dev OTP:", otp); // log OTP for testing
      setStage("otp");
      setError("");
      return { exists: false };
    }
  };

  // Step 2: verify OTP
  const verifyOtp = (phone, otp) => {
    const foundUser = userDummyData.find((u) => u.phone === phone && u.otp === otp);
    if (foundUser) {
      foundUser.isVerified = true; // mark as verified
      setUser(foundUser);
      setStage("phone");
      setError("");
      return true;
    } else {
      setError("❌ Invalid OTP.");
      return false;
    }
  };

  // logout
  const logout = () => {
    setUser(null);
    setStage("phone");
    setError("");
  };

  return (
    <AuthContext.Provider
      value={{ stage, user, error, checkPhone, verifyOtp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
