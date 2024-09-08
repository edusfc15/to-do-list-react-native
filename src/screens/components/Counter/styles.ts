import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container : {
        flexDirection:'row'
    },

    counterContainer:{
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        marginLeft: 5,
        backgroundColor: '#333333',
        fontWeight: 'bold',
    },

    counter:{
        color: '#FFFFFF',
    },
    
    title: {
		fontWeight: 'bold',
		fontSize: 16,
		fontFamily: 'Roboto',
	},

	concluidasTitle: {
		color: '#8284FA',
		fontWeight: 'bold',
		fontSize: 16,
		fontFamily: 'Roboto'
	},
});