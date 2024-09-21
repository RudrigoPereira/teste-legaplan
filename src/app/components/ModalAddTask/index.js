import { useState } from "react";
import styles from "./modalAddTask.module.scss";

export default function ModalAddTask({ closeModal, addTask }) {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim()) {
        addTask(taskText); 
        closeModal(); 
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Nova Tarefa</h2>
                <div>
                    <label>Título</label>
                    <input
                    type="text"
                    placeholder="Digite"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    />
                </div>
                <div className={styles.modalActions}>
                    <button onClick={closeModal}>Cancelar</button>
                    <button onClick={handleAddTask}>Adicionar</button>
                </div>
            </div>
        </div>
    );
}
