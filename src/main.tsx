import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StateContextProvider from "./store/StateContext";
import {
    createBrowserRouter, RouterProvider
} from "react-router-dom";
import {CONTACT_US_ROUTE, FAVORITE_ROUTE, HOME_ROUTE, LAYOUT_ROUTE, MOVIE_DETAILS_ROUTE} from "./routes";
// Needed Component
import Layout from "./layout";
import ErrorPage from "./pages/ErrorPage";
// Lazy Component
const HomePage = React.lazy(()=>import("./pages/HomePage"))
const FavoriteMoviesPage = React.lazy(()=>import("./pages/FavoriteMoviesPage"))
const MovieDetailsPage = React.lazy(()=>import("./pages/MovieDetailsPage"))
const ContactUsPage = React.lazy(()=>import("./pages/ContactUsPage"))

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
            },
            {
                path: CONTACT_US_ROUTE,
                element: <ContactUsPage />
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
