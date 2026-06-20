import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/MainLayout/MainLayout";
// import { HomePage } from "../pages/HomePage/HomePage";
// import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage/HomePage').then(module => ({ default: module.HomePage })));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage').then(module => ({ default: module.MoviesPage })) );




export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
           <Route path="/" element={<MainLayout/>}> 
                 <Route index element={<HomePage/>}/>
                <Route path="movies" element={<MoviesPage/>}/>
           </Route>
        </Routes></Suspense>
    );
};