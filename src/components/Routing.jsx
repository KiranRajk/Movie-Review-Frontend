import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../../config/ProtectedRoute";
import Authpage from "../pages/Authpage/Authpage";
import UserHome from "../pages/UserHome/UserHome";
import MovieCards from "./MovieCards/MovieCards";




const router = createBrowserRouter([
    {
        path: '/' ,
        element : <Authpage/>
    }, 
    {
        path : '/home',
        element : <ProtectedRoute element={<UserHome/>}/>
    }
])

const Routing = () => {
    return  <RouterProvider router={router} />
}

export default Routing