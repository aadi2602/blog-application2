import ReactDOM  from 'react-dom/client';
import { createBrowserRouter,RouterProvider } 
from 'react-router-dom';
import Home from './views/Home/Home'
import "./index.css"
import Blog from './views/Blog/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
       path:'/',
       element:<Home/> 
    },
    {
        path: '/blog/:id',
        element:<Blog />
    }
])

root.render(<RouterProvider router={router}/>);
    
