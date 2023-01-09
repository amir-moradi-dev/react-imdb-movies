import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from "./layout";
import StateContextProvider from "./store/StateContext";
import {
    BrowserRouter as Router,
    Routes,
    Route, createBrowserRouter, RouterProvider
} from "react-router-dom";
import FavoriteMoviesPage from "./pages/FavoriteMoviesPage";
import {FAVORITE_ROUTE, HOME_ROUTE, LAYOUT_ROUTE, MOVIE_DETAILS_ROUTE} from "./routes";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: LAYOUT_ROUTE,
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: HOME_ROUTE,
                element: <HomePage />,
            },
            {
                path: FAVORITE_ROUTE,
                element: <FavoriteMoviesPage />
            },
            {
                path: MOVIE_DETAILS_ROUTE,
                element: <MovieDetailsPage />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StateContextProvider>
            <RouterProvider router={router} />
        </StateContextProvider>
    </React.StrictMode>,
)



// REACT-ROUTER => OLDER ( I Liked Jsx style more )
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <React.StrictMode>
//         <StateContextProvider>
//             <Router>
//                 <Routes>
//                     <Route path={'/'} element={<Layout/>}>
//                         <Route index element={<HomePage />}/>
//                         <Route path={HOME_ROUTE} element={<HomePage />} />
//                         <Route path={FAVORITE_ROUTE} element={<FavoriteMoviesPage /> }/>
//                         <Route path={MOVIE_DETAILS_ROUTE}>
//                             <Route path={':imdbID'} element={<MovieDetailsPage />} />
//                         </Route>
//                     </Route>
//                 </Routes>
//             </Router>
//         </StateContextProvider>
//     </React.StrictMode>,
// )
