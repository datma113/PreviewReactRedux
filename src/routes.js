import Product from "./components/Product";
import Shop from "./components/Shop";
import NotFound from './components/NotFound'


const routes = [
     {path: "/", component: Product, exact: true},
     {path: "/shop", component: Shop, exact: true},
     {path: "", component: NotFound, exact: true},
]

export default routes