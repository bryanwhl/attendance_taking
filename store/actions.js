export default {
	async getAll({ commit }, resource) {
		const retData = await this.$http.$get(`getAll${resource}`);
		const payload = {
			data: retData,
			resource: resource.toLowerCase()
		};
		commit("setDataList", payload);
	},
	async update({ commit }, resource) {
		await this.$http.$put(`update${resource.name}`, resource.data);
	},
	async createResource({ commit }, resource) {
		await this.$http.$post(`add${resource.name}`, resource.data);
	},
	async deleteResource({ commit }, resource) {
		await this.$http.$delete(`delete${resource.name}/${resource.id}`);
		commit("deleteFromDataList", resource);
	}
};
