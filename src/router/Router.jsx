import { createBrowserRouter } from "react-router-dom";
import {lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"))
const CreatorPage = lazy(() => import("../pages/CreatorPage"))
const TimelinePage = lazy(() => import("../pages/TimeLinePage"))
const InformationPage = lazy(() => import("../pages/InformationPage"))
const EventPage = lazy(() => import("../pages/EventPage"))
const AdminPage = lazy(() => import("../pages/AdminPage"))

const Router = createBrowserRouter([
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
]);

export default Router;