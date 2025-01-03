import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export function AddTaskButton() {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.addButton}
      onPress={() => router.push('/add-task')}
    >
      <MaterialIcons name="add-circle" size={48} color="#007bff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    padding: 8,
  },
}); 