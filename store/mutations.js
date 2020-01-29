export default {
	addToPresentList(state, payload) {
		state.presentList = payload;
	},
	setDataList(state, payload) {
		if (payload.resource === "sections") {
			for (const section of payload.data) {
				const cluster = state.clustersList.find(
					cluster => cluster.id === section.cluster_id
				);
				section.cluster = cluster.name;
			}
		} else if (payload.resource === "persons") {
			for (const user of payload.data) {
				const section = state.sectionsList.find(
					section => section.id === user.section_id
				);
				user.cluster = section.cluster;
				user.section = section.name;
			}
		}
		state[`${payload.resource}List`] = payload.data;
	}
};
