import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333333'
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
		height: '80%'
	},
	middle: {
		width: '100%',
		flex: 1,
		top: -20,
		zIndex: 1,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent'
	},
	bottom: {
		flex: 8,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '90%',
		backgroundColor: 'transparent'
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
});
