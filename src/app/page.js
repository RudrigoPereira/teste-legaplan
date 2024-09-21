"use client"
import { useState } from "react";
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
    closeModalDelete(); // Fechar modal após a exclusão
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* <Tasks tasks={tasks} setTasks={setTasks} /> */}
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
