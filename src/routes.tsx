import { Navigate, useRoutes } from "react-router-dom"
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';

const Paths = () => {
    let routes = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/store",
            element: <Store />
        },
        {
            path: "/about",
            element: <About />
        },
    ])

    return routes
}

export default Paths