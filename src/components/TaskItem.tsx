import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Task } from '../interfaces';

interface TaskItemProps {
  task: Task;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggleStatus, onDelete }: TaskItemProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push({ pathname: "task-details", params: { taskId: task.id } })}
    >
      <View style={styles.taskItem}>
        <View style={styles.taskContent}>
          {/* Status toggle button */}
          <TouchableOpacity 
            onPress={() => onToggleStatus(task.id)}
            style={styles.statusIcon}
          >
            <MaterialIcons 
              name={task.status === "completed" ? "check-circle" : "radio-button-unchecked"} 
              size={24} 
              color={task.status === "completed" ? "#4CAF50" : "#757575"}
            />
          </TouchableOpacity>
          
          {/* Task title and description */}
          <View style={styles.taskTextContent}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text>{task.description}</Text>
          </View>
          
          {/* Action buttons */}
          <View style={styles.rightActions}>
            <TouchableOpacity 
              style={styles.editButton}
              onPress={() => router.push(`/edit-task?id=${task.id}`)}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => onDelete(task.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskItem: { 
    padding: 16, 
    borderBottomWidth: 1, 
    borderColor: "#ccc",
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTextContent: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
  taskTitle: { 
    fontWeight: "bold" 
  },
  rightActions: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  statusIcon: {
    padding: 4,
  },
}); 