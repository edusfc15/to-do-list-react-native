import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    title: string;
    titleColor: string;
    count: number;
}

export function Counter({ title, count,titleColor }: Props) {

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
            <View style={styles.counterContainer}>
                <Text style={styles.counter}>{count}</Text>
            </View>
        </View>
    )
}