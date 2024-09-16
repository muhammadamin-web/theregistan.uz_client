import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import lazy correctly
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const Home = React.lazy(() => import("./pages/home/Home"));
const Post = React.lazy(() => import("./pages/post"));
const Category = React.lazy(() => import("./pages/category/Category"));
const Search = React.lazy(() => import("./pages/search/Search"));
const About = React.lazy(() => import("./pages/about/About"));
const Ads = React.lazy(() => import("./pages/ads/Ads"));

const router = createBrowserRouter([
  {
    element: <Layout />,
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
