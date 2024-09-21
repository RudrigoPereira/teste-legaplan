"use client"
import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import ModalAddTask from "./components/ModalAddTask";
import ModalConfirmDelete from "./components/ModalConfirmDelete";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Carregar as tarefas do Local Storage quando o componente é montado
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, []);

  // Salvar as tarefas no Local Storage sempre que o estado de tasks mudar
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openModalDelete = (task) => {
    setTaskToDelete(task);
    setIsModalDeleteOpen(true);
  };
  const closeModalDelete = () => setIsModalDeleteOpen(false);

  // Função para adicionar nova tarefa
  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Função para remover uma tarefa
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    closeModalDelete();
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Tasks tasks={tasks} setTasks={setTasks} openModalDelete={openModalDelete} />
        <button className={styles.addTaskButton} onClick={openModal}>
          Adicionar nova tarefa
        </button>
      </main>

      {isModalOpen && <ModalAddTask closeModal={closeModal} addTask={addTask}/>}
      {isModalDeleteOpen && (
        <ModalConfirmDelete 
          closeModal={closeModalDelete} 
          deleteTask={() => deleteTask(taskToDelete.id)} 
          task={taskToDelete}
        />
      )}
    </div>
  );
}
