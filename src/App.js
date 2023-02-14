import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./ErrorPage";
import Enter from "./Components/LoginSignup/Enter";
import Dashboard from "./Components/Dashboard/Dashboard";
import GetSchedule from "./Components/GetSchedules/GetSchedule";
import Options from "./Components/Dashboard/Options";
import MakeTags from "./Components/TagGenerator/MakeTags";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Enter />} errorElement={<ErrorPage/>}/>
    <Route path="/dashboard" element={<Dashboard />} errorElement={<ErrorPage/>}>
      <Route path="" element={<Options/>}/>
      <Route path="generateSchedule" element={<GetSchedule/>}/>
      <Route path="generateTags" element={<MakeTags/>}/>
    </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
