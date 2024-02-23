import { Routes, Route } from "react-router-dom";
import Test from "../Test";

let routes = [
  {
    element: <Test />,
    path: "/",
  },
];

const MyRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default MyRouter;
