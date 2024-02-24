import { Routes, Route } from "react-router-dom";
import TaskFeed from "../Modules/TaskFeed";
import Settings from "../Modules/Settings";
import Editor from "../Modules/Editor";
import Achievments from "../Modules/Achievments";

let routes = [
  {
    element: <TaskFeed />,
    path: "/",
  },
  {
    element: <Settings />,
    path: "/settings",
  },
  {
    element: <Editor />,
    path: "/editor",
  },
  {
    element: <Achievments />,
    path: "/achievements",
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
