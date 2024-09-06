
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Task } from '../components/Task';

import { styles } from './style';

export function Home() {

  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../../../assets/Logo.png')} />
      </View>
      <View style={styles.body}>
        <View style={styles.middle}>
          <View style={styles.row}>
            <TextInput placeholderTextColor="#808080" style={styles.input} placeholder="Adicionar nova tarefa" />
            <TouchableOpacity style={styles.button}>
              <Image source={require('../../../assets/plus.png')} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.bottom}>

          <FlatList
            data={tasks}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Task
                key={item}
                name={item}
                onRemove={() => {
                  setTasks((oldTasks) => oldTasks.filter((task) => task !== item));
                }
                }
              />
            )}

          >

          </FlatList>

        </View>
      </View>
    </View>
  );
}
