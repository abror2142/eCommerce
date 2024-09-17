import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home from "./containers/Home";
import Layout from "./hocs/Layout";


const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
    </Route>
)

export const router = createBrowserRouter(routes)