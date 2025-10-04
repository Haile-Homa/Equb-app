import { Outlet, useLocation } from "react-router-dom";

//  Main page navbars
import NavbarHome from "./NavbarHome.jsx";
import NavbarProfile from "./NavbarProfile.jsx";
import NavbarSettings from "./NavbarSettings.jsx";
import NavbarNotifications from "./NavbarNotifications.jsx";
import NavbarHistory from "./NavbarHistory.jsx";
import NavbarJoinedEqub from "./NavbarJoinedEqub.jsx";

//  Subpage navbars
import NavbarTerms from "./NavbarTerms.jsx";

//  Dynamic routes
import NavbarEqubList from "./NavbarEqubList.jsx";

import Footer from "./Footer.jsx";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  // Decide which navbar to render
  let NavbarComponent = null;

  // 🌐 Main pages
  if (path === "/") NavbarComponent = NavbarHome;
  else if (path === "/profile") NavbarComponent = NavbarProfile;
  else if (path === "/settings") NavbarComponent = NavbarSettings;
  else if (path === "/notifications") NavbarComponent = NavbarNotifications;
  else if (path === "/history") NavbarComponent = NavbarHistory;

  // 🔗 Dynamic routes (Equb lists)
  else if (path.startsWith("/equbs/type/") || path.startsWith("/equbs/category/")) {
    NavbarComponent = NavbarEqubList;
  }

  // 📄 Terms page
  else if (path.startsWith("/terms/")) {
    NavbarComponent = NavbarTerms;
  }

  // ✅ Shared navbar for all specific /equb/:equbId/... routes + /help
  else if (
    /^\/equb\/[^/]+$/.test(path) ||                 // /equb/:equbId
    /^\/equb\/[^/]+\/joined$/.test(path) ||        // /equb/:equbId/joined
    /^\/equb\/[^/]+\/payment$/.test(path) ||       // /equb/:equbId/payment
    /^\/equb\/[^/]+\/members$/.test(path) ||       // /equb/:equbId/members
    /^\/equb\/[^/]+\/lottery$/.test(path) ||       // /equb/:equbId/lottery
    /^\/equb\/[^/]+\/info$/.test(path) ||          // /equb/:equbId/info
    path === "/help"                                // /help
  ) {
    NavbarComponent = NavbarJoinedEqub;
  }

  // 🌟 Default → NavbarHome
  else NavbarComponent = NavbarHome;
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Navbar */}
      <NavbarComponent />

      {/* Main content area */}
      <main
        className="
          flex-grow
          w-full
          mt-16
          md:mt-20
          pb-24
          overflow-auto     
          lg:pl-64       
          lg:pr-24     
        "
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};



export default Layout;









//  //  Subpages (joined equb)
//   else if (path === "/joinedEqub/lottery") NavbarComponent = NavbarLottery;
//   else if (path === "/joinedEqub/info") NavbarComponent = NavbarInfo;
//   else if (path === "/joinedEqub/help") NavbarComponent = NavbarHelp;





// import Navbar from "./Navbar.jsx";
// import Footer from "./Footer.jsx";
// import { Outlet } from "react-router-dom";

// const Layout = () => (
//   <div className="flex flex-col min-h-screen ">
//     <Navbar />
//     <main className="flex-grow mt-16 pb-24 overflow-auto ">
//       <Outlet /> {/* Route content appears here */}
//     </main>
//     <Footer />
//   </div>
// );

// export default Layout;



