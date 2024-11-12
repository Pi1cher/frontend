import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CreateHeroPage from "./pages/CreateHeroPage";
import SuperheroesPage from "./pages/SuperheroesPage";
import SuperheroInfoPage from "./pages/SuperheroInfoPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children:[
            {
                path:'', element: <SuperheroesPage/>
            },
            {
                path: ':_id', element: <SuperheroInfoPage/>
            },
            {
                path: 'create', element: <CreateHeroPage/>
            }
        ]
    }
])

export {
    router
}