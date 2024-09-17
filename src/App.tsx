import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Modal from "./components/Modal/Modal"; // Modal komponentini import qilyapmiz

const queryClient = new QueryClient();

const Home = React.lazy(() => import("./pages/home/Home"));
const Post = React.lazy(() => import("./pages/post"));
const Category = React.lazy(() => import("./pages/category/Category"));
const Search = React.lazy(() => import("./pages/search/Search"));
const About = React.lazy(() => import("./pages/about/About"));
const Ads = React.lazy(() => import("./pages/ads/Ads"));

const AppLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Modal faqat "/" (Home) sahifasida ochilishi uchun
    if (location.pathname === "/") {
      setShowModal(false); 
      const timer = setTimeout(() => {
        setShowModal(true); 
      }, 7000); 

      return () => clearTimeout(timer);
    } else {
      setShowModal(false); 
    }
  }, [location]);

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <>
      <Layout />

      {/* Modalni faqat Home sahifasida ko'rsatish */}
      {location.pathname === "/" && (
        <Modal showModal={showModal} handleClose={handleCloseModal} />
      )}
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/ads",
        element: <Ads />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
