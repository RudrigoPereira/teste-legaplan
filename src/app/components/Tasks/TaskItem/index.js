"use client";
import { FiTrash } from "react-icons/fi";
import styles from "./taskItem.module.scss";

export default function TaskItem({ task, toggleTask, openModalDelete }) {
    return (
        <li className={styles.taskItem} onClick={() => toggleTask(task.id)}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? styles.completed : ""}>{task.text}</span>
            <FiTrash 
                className={styles.deleteIcon} 
                onClick={(e) => {
                    e.stopPropagation();
                    openModalDelete(task);
                }} 
            />
        </li>
    );
}
