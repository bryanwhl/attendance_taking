export default {
	addToPresentList(state, payload) {
		state.presentList = payload;
	},
	setDataList(state, payload) {
		state[`${payload.resource}List`] = payload.data;
	},
	deleteFromDataList(state, payload) {
		const resourceList = state[`${payload.name.toLowerCase()}sList`];
		const indexToBeDeleted = resourceList.findIndex(
			resource => resource.id === payload.id
		);
		resourceList.splice(indexToBeDeleted, 1);
	}
};
