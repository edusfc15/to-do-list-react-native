import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './styles.ts';

type Props = {
	name: string;
	onRemove: () => void;
}

export function Task({ name, onRemove }: Props) {
	return (
		<View style={styles.container}>
			<Text>{name}</Text>
			<TouchableOpacity onPress={onRemove}>
				<Text></Text>
			</TouchableOpacity>
		</View>
	)
}