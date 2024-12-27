import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import HomePage from '../components/HomePage';
import SignupComponent from '../components/SignupComponent';

export const BrowserRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/signup",
                element:<SignupComponent/>
            }
        ]
    }
]);

