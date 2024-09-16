  import React, { Suspense } from "react";

const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));

import { Outlet } from "react-router-dom";
import ScrollButton from "./ScrollButton";
import PageLoader from "./loader/PageLoader";
export default function Layout() {
  return (
    <div className='flex flex-col min-h-[100vh] '>
      <Suspense fallback={<PageLoader />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
      <ScrollButton />
    </div>
  );
}
