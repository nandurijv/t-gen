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
import Options from "./Components/Dashboard/Options";
import IndexOfSchedule from "./Components/GenerateSchedules/IndexOfSchedule";
import Tags from "./Components/GenerateSchedules/Actions/Tags";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Enter />} errorElement={<ErrorPage/>}/>
    <Route path="/dashboard" element={<Dashboard />} errorElement={<ErrorPage/>}>
      <Route path="" element={<Options/>}/>
      <Route path="generateSchedule" element={<IndexOfSchedule/>}/>
      <Route path="generateTags" element={<Tags/>}/>
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
