import React, { createContext, useContext, useState } from 'react';
import { Task } from '../interfaces';

// Define the shape of our context
interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  toggleTaskStatus: (id: string) => void;
  getTask: (id: string) => Task | undefined;
}

// Create context with undefined default value
const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  // Initialize tasks with some default data
  const [tasks, setTasks] = useState<Task[]>([
    { 
      id: "1", 
      title: "Leetcode", 
      description: "5 questions today", 
      status: "pending" 
    },
    { 
      id: "2", 
      title: "Sleep", 
      description: "At least 8 hours", 
      status: "completed" 
    },
  ]);

  // Add a new task with a unique ID
  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now().toString(), // Use timestamp as unique ID
      title,
      description,
      status: "pending",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  // Update existing task while preserving others
  const updateTask = (updatedTask: Task) => {
    setTasks((prev) => 
      prev.map((task) => task.id === updatedTask.id ? updatedTask : task)
    );
  };

  // Remove task by ID
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Toggle task status between 'pending' and 'completed'
  const toggleTaskStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id 
          ? { ...task, status: task.status === "pending" ? "completed" : "pending" }
          : task
      )
    );
  };

  // Find task by ID
  const getTask = (id: string) => tasks.find((task) => task.id === id);

  return (
    <TaskContext.Provider value={{ 
      tasks, 
      addTask, 
      updateTask, 
      deleteTask, 
      toggleTaskStatus,
      getTask 
    }}>
      {children}
    </TaskContext.Provider>
  );
}

// Custom hook to use task context with type safety
export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
} 