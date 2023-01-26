import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (to) => {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			}
		} else {
			return { top: 0 }
		}
	},
})

export default router
