import HomeView from '../views/HomeView/HomeView.vue'
import ProductView from '../views/ProductView/ProductView.vue'
import Layout from '../layout/Layout.vue'

const routes = [
	{
		path: '/',
		component: Layout,

		children: [
      { path: "/", name: "Home", component: HomeView },
      { path: "/product/:id", name: "product", component: ProductView },
    ],
  }
]

export default routes;
