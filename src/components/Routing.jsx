import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {ProtectedRoute, AdminRoute} from "../../config/ProtectedRoute";
import Authpage from "../pages/Authpage/Authpage";
import UserHome from "../pages/UserHome/UserHome";
import MovieCards from "./MovieCards/MovieCards";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import AdminDashboard from "../pages/Admin/AdminDashboard/AdminDashboard";
import AdminNavbar from "./AdminNavBar/AdminNavBar";
import AddMovieAdmin from "../pages/Admin/AdminAddMovie/AddMovieAdmin";
import AdminLayout from "../pages/Admin/Root";
import UserManagement from "../pages/Admin/UserManagement/UserManagement";




const router = createBrowserRouter([
    {
        path: '/' ,
        element : <Authpage/>
    }, 
    {
        path : '/home',
        element : <ProtectedRoute element={<UserHome/>}/>
    },{
        path: '/movieDetails/:id',
        element : <ProtectedRoute element={<MovieDetails/>} />
    }, {
        path: '/admin',
        element :  <AdminRoute element={<AdminLayout/>} />,
        children : [
            {
                path : '',
                element : <AdminRoute element={<AdminDashboard/>} />
            },
            {
                path :'addMovie',
                element : <AdminRoute element={<AddMovieAdmin/>}/>
            },
            {
                path:'userManage',
                element : <AdminRoute element={<UserManagement/>} />
            }

        ]
    }
])

const Routing = () => {
    return  <RouterProvider router={router} />
}

export default Routing