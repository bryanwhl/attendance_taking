export default {
	getSectionById: state => id => {
		const section = state.sectionsList.find(section => section.id === id);
		if (section !== undefined) return section;
		else return "";
	},
	getClusterById: state => id => {
		const cluster = state.clustersList.find(cluster => cluster.id === id);
		if (cluster !== undefined) return cluster;
		else return "";
	}
};
