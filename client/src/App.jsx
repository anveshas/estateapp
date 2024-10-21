import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import {Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
// import { listPageLoader, singlePageLoader } from "./lib/loaders";
import AboutPage from "./routes/aboutPage/aboutPage";
import ContactPage from "./routes/contactPage/contactPage";
import AgentPage from "./routes/agentPage/agentPage";

import Footer from "./routes/footer/footer";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/agent",
          element: <AgentPage />
        },
        {
          path:"/list",
          element:<ListPage/>,
          // loader: listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          // loader: singlePageLoader,
        },
        
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth/>,
      children: [
        {
          path:"/profile",
          element:<ProfilePage/>,
          // loader: profilePageLoader;
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage />
        },
      ]
    }
  ]);

  return (
    // <RouterProvider router={router}/>
    <div>
    <RouterProvider router={router} />
    <Footer />
  </div>
  );
}

export default App;
