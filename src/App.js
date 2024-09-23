import { RouterProvider } from "react-router-dom";
import "./scss/style.scss";
import Router from "./router/Router";
import { Suspense } from "react";
import Loading from './components/Loading'

const App = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={Router} />
    </Suspense>
  );
};

export default App;
