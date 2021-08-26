import { BrowserRouter } from "react-router-dom";
import Routes from "../../Routes/Routes";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default RouterProvider;
