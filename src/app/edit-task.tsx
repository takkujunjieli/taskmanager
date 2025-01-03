import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTaskContext } from '../contexts/TaskContext';

export default function EditTaskScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { getTask, updateTask } = useTaskContext();

  const task = getTask(id as string);
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSave = () => {
    if (task) {
      updateTask({
        ...task,
        title,
        description,
      });
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Task Title"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Task Description"
      />
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
}); 