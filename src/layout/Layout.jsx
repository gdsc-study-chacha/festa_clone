import React from "react";

import { Outlet ,useLocation} from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  // AdminPage 경로일 경우 Footer를 렌더링하지 않음
  const showFooter = location.pathname !== '/admin';
  
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
