"use client"
import { useState } from "react";
import styles from "./page.module.scss";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import ModalAddTask from "./components/ModalAddTask";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Função para adicionar nova tarefa
  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Tasks tasks={tasks} setTasks={setTasks} />
        <button className={styles.addTaskButton} onClick={openModal}>
          Adicionar nova tarefa
        </button>
      </main>
      {isModalOpen && <ModalAddTask closeModal={closeModal} addTask={addTask}/>}
    </div>
  );
}
