import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%'
	},
	taskItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		marginVertical: 5,
		backgroundColor: '#333333',
		borderRadius: 8,
		minHeight: 60
	},
	
	taskItemName: {
		color: '#FFFFFF',
		fontSize: 16,
		fontFamily: 'Roboto',
		textAlign: 'left',
		flex: 1,
		flexWrap: 'wrap',
		marginLeft: 10
	},

	checked: {
		textDecorationLine: 'line-through',
	},
});
