import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userRoute } from "./routes/userRoute";
import Layout from "./Layout/Layout";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {userRoute.map((item, index) => {
            return <Route key={index} path={item.path} element={item.component}></Route>
          })}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
