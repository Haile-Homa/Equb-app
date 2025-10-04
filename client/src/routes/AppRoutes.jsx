// src/routes/AppRoutes.js
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../components/Layout/Layout";
import Loading from "../pages/Loading";


// Lazy-loaded pages/components
const LoginPage = lazy(() => import("../pages/Auth/Login"));
const OtpPage = lazy(() => import("../pages/Auth/Otp"));
const Home = lazy(() => import("../pages/Home"));
const EqubList = lazy(() => import("../pages/EqubList/EqubList.jsx"));
const TermsPolicy = lazy(() => import("../pages/Terms/TermsPolicy"));
const ProfilePage = lazy(() => import("../pages/Profile/Profile"));
const HistoryPage = lazy(() => import("../pages/History"));
const SettingsPage = lazy(() => import("../pages/Settings"));
const JoinedEqub = lazy(() => import("../pages/JoinedEqub"));
const Payment = lazy(() => import("../components/joinedEqub/payments/Payment"));
const Members = lazy(() => import("../components/joinedEqub/EqubMembers/MembersPage"));
const Lottery = lazy(() => import("../components/joinedEqub/Lottery/Lottery"));
const Info = lazy(() => import("../components/joinedEqub/EqubInfo/EqubInfoPage.jsx"));
const Help = lazy(() => import("../components/joinedEqub/Help/Help"));
const Equb = lazy(() => import("../components/joinedEqub/EqubDetails/Equb.jsx"));
const Notifications = lazy(() => import("../pages/notifications.jsx"));


// test in prupose for laoding animations 
const SlowTest = lazy(() => import("../pages/SlowTest.jsx"));


export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* Public/Auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />

        {/* Test routes */}
        <Route path="/slow" element={<SlowTest />} />

        {/* Main routes wrapped with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/equbs/type/:type" element={<EqubList />} />
          <Route path="/equbs/category/:category" element={<EqubList />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/terms/:equbId" element={<TermsPolicy />} />
          <Route path="/equb/:equbId/joined" element={<JoinedEqub />} />
          <Route path="/equb/:equbId" element={<Equb />} />
          <Route path="/equb/:equbId/payment" element={<Payment />} />
          <Route path="/equb/:equbId/members" element={<Members />} />
          <Route path="/equb/:equbId/lottery" element={<Lottery />} />
          <Route path="/equb/:equbId/info" element={<Info />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
