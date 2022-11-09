import LRTable from "../packages/table/index.js"
import LRInput from "../packages/input/index.js"

const components = [
	LRTable,
	LRInput
]

const install = function (Vue){
	components.forEach(component=>{
		Vue.component(component.name,component)
	})
}

if(typeof window !=='undefined'&&window.Vue){
	install(window.Vue)
}

export default {
	install
}