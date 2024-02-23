import { Routes, Route } from "react-router-dom";
import TaskFeed from "../Modules/TaskFeed";

let routes = [
  {
    element: <TaskFeed />,
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
