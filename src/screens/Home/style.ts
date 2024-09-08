import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333',
	},
	top: {
		backgroundColor: '#0D0D0D',
		alignItems: 'center',
		justifyContent: 'center',
		height: '20%'
	},
	body: {
		position: 'relative',
		backgroundColor: '#1A1A1A',
		height: '80%',
	},
	middle: {
		width: '100%',
		flex: 1,
		top: -20,
		zIndex: 1,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	bottom: {
		flex: 8,
		marginTop: 50,
		marginHorizontal: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '90%',
		backgroundColor: 'transparent',
	},
	input: {
		flex: 4,
		height: 45,
		paddingHorizontal: 10,
		borderRadius: 5,
		borderWidth: 1,
		marginRight: 10,
		borderColor: '#0D0D0D',
		backgroundColor: '#262626',
		color: '#FFFFFF',
	},
	button: {
		height: 44,
		width: 44,
		backgroundColor: '#1E6F9F',
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#FFF',
		fontSize: 20,
	},

	list: {
		flex: 2,
		width: '100%',
		paddingHorizontal: 10,
		fontSize: 20,
	},
	listEmptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderTopWidth: 1,
		borderColor: '#333333',
		marginTop: 10,
		padding: 30,
	},

	listEmptyText: {
		color: '#808080',
		marginTop: 10,
		fontWeight: 'bold'
	},
	listEmptySubText: {
		color: '#808080',
	},
	taskHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	counter: {
		color: '#5E60CE',
		backgroundColor: '#333333',
	},

});
