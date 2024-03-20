import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Product, { loader as singleProductLoader } from "../Pages/Product";
import Cart  from "../Pages/Cart";
import Signup from "../Pages/Signup";
import Login  from "../Pages/Login";
import Profile ,{loader as profileLoader} from "../Pages/Profile";
import AddProduct ,{loader as addProductLoader} from "../Pages/AddProduct";




const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
       
        children:[
            {
                path:'',
                element:<Home/>
            },{
                path:'products',
                element:<Products/>
                
            },
            {
            path:'products/:productId',
            element:<Product/>,
            loader:singleProductLoader
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:"login",
                element:<Login/>,
               
            },
            {
                path:'profile',
                element:<Profile/>,
                loader:profileLoader
            },{
                path:"add-product",
                element:<AddProduct/>,
                loader:addProductLoader
            }
            
        ]
    }
  ]);

  export default router;