export default {
	async getAll({ commit }, resource) {
		const retData = await this.$http.$get(`getAll${resource}`);
		const payload = {
			data: retData,
			resource: resource.toLowerCase()
		};
		commit(`setDataList`, payload);
	}
};
