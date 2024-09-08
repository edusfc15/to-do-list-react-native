import { View, Text, TouchableOpacity } from "react-native";
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
	name: string;
	onRemove: () => void;
	isChecked: boolean;
	onCheck: () => void;
}

export function Task({ name, onRemove, isChecked, onCheck }: Props) {

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.taskItem}>
				<BouncyCheckbox

					fillColor="#5E60CE"
					unFillColor="transparent"
					isChecked={isChecked}
					onPress={onCheck}
					textContainerStyle={{
						display: 'none'
					}}
				/>
				<Text
					style={[
						styles.taskItemName,
						isChecked ? styles.checked : styles.taskItemName,
					]}
				>{name}
				</Text>
				<TouchableOpacity onPress={onRemove}>
					<Icon name="delete" size={24} color="gray" />
				</TouchableOpacity>
			</TouchableOpacity>
		</View>
	)
}