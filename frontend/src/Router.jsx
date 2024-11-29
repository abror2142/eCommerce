import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home from "./containers/Home";
import Layout from "./hocs/Layout";
import Detail from "./containers/Detail";
import ProductCreate from "./containers/ProductCreate";

const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="product/create" element={<ProductCreate />} />
    </Route>
)

export const router = createBrowserRouter(routes)