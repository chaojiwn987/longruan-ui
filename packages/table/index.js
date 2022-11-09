import LRTable from "./src/table.vue"

LRTable.install = function(Vue){
	Vue.component(LRTable.name,LRTable)
}
export default LRTable