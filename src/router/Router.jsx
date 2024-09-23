import { createBrowserRouter } from "react-router-dom";
import {lazy } from "react";
import Layout from '../layout/Layout'

const MainPage = lazy(() => import("../pages/main/MainPage"))
const CreatorPage = lazy(() => import("../pages/creator/CreatorPage"))
const TimelinePage = lazy(() => import("../pages/timeline/TimeLinePage"))
const InformationPage = lazy(() => import("../pages/information/InformationPage"))
const EventPage = lazy(() => import("../pages/event/EventPage"))
const AdminPage = lazy(() => import("../pages/admin/AdminPage"))

const Router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/creator",
        element: <CreatorPage />
      },
      {
        path: "/timeline",
        element: <TimelinePage />
      },
      {
        path: "/info",
        element: <InformationPage />
      },
      {
        path: "/event",
        element: <EventPage />
      },
      {
        path: "/admin",
        element: <AdminPage />
      }
    ],
  }
  ]);

export default Router;