
import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Task } from '../components/Task';
import { styles } from './style';
import { Counter } from '../components/Counter';

type TaskType = {
  description: string;
  isChecked: boolean;
};

export function Home() {

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [completeTasks, setCompleteTasks] = useState(0);

  function handleTaskAdd() {

    const taskAlreadyExists = tasks.some(task => task.description === taskDescription.trim());

    if (taskAlreadyExists) {
      Alert.alert('Tarefa duplicada', 'Você já adicionou essa tarefa.');
      return;
    }

    setTasks(prevState => [
      ...prevState,
      { description: taskDescription.trim(), isChecked: false }
    ]);
    setTaskDescription('');
  }

  function handleCheckTask(taskIndex: number) {
    setTasks(prevTasks =>
      prevTasks.map((task, index) => {
        if (index === taskIndex) {
          const updatedTask = { ...task, isChecked: !task.isChecked };
          setCompleteTasks(prevCount => updatedTask.isChecked ? prevCount + 1 : prevCount - 1);
          return updatedTask;
        }
        return task;
      })
    );
  }

  const isAddButtonDisabled = taskDescription.trim().length === 0;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('@assets/Logo.png')} />
      </View>
      <View style={styles.body}>
        <View style={styles.middle}>
          <View style={styles.row}>
            <TextInput
              onChangeText={setTaskDescription}
              value={taskDescription}
              placeholderTextColor="#808080"
              style={styles.input}
              placeholder="Adicionar uma nova tarefa" />
            <View>
              <TouchableOpacity
                onPress={handleTaskAdd}
                style={styles.button}
                disabled={isAddButtonDisabled}
              >
                <Image source={require('@assets/plus.png')} />

              </TouchableOpacity>
            </View>

          </View>

        </View>

        <View style={styles.bottom}>

          <View style={styles.taskHeader}>

            <Counter title="Criadas: " count={tasks.length} titleColor={'#4EA8DE'} />
            <Counter title="Concluídas: " count={completeTasks} titleColor={'#8284FA'} />
          </View>

          <FlatList
            style={styles.list}
            data={tasks}
            keyExtractor={(item) => item.description}
            renderItem={({ item, index }) => (
              <Task
                key={item.description}
                name={item.description}
                onCheck={() => handleCheckTask(index)}
                isChecked={item.isChecked}
                onRemove={() => {
                  setTasks(oldTasks => oldTasks.filter((_, i) => i !== index));
                  if (item.isChecked) setCompleteTasks(prevCount => prevCount - 1);
                }}
              />
            )}
            ListEmptyComponent={() => (
              <View style={styles.listEmptyContainer}>
                <Image source={require('../../../assets/Clipboard.png')} />
                <Text style={styles.listEmptyText}>
                  Você ainda não tem tarefas cadastradas.
                </Text>
                <Text style={styles.listEmptySubText}>
                  Adicione uma nova tarefa acima.
                </Text>
              </View>

            )}

          >

          </FlatList>

        </View>
      </View>
    </View>
  );
}
