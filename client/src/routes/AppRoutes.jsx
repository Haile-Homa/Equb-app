import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Notifications from "../components/notifications/notifications.jsx";

// pages
import LoginPage from "../pages/Login";
import OtpPage from "../pages/Otp";
import Home from "../pages/Home";
import EqubList from "../components/equb/EqubList.jsx";
import TermsAndPolicy from "../components/TermsAndPolicy/TermsAndPolicy";

// import EqubDetailPage from "../pages/EqubDetailPage";
import ProfilePage from "../pages/Profile";
 import HistoryPage from "../pages/History";
import SettingsPage from "../pages/Settings";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Public/Auth routes (without Layout) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/otp" element={<OtpPage />} />

      {/* Main routes (with Layout wrapper) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
         <Route path="/equbs/type/:type" element={<EqubList />} />
        <Route path="/equbs/category/:category" element={<EqubList />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} /> 
         {/* <Route path="/terms" element={<TermsAndPolicy />} /> */}
            <Route path="/terms/:equbId" element={<TermsAndPolicy />} />
      </Route>
    </Routes>
  );
}
