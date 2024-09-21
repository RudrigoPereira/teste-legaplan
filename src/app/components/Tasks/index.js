import styles from "./tasks.module.scss";
import TaskItem from "./TaskItem";

export default function Tasks({ tasks, setTasks }) {

    // Função para marcar/desmarcar tarefas
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Função para remover uma tarefa
    const deleteTask = (id, e) => {
        e.stopPropagation();
        setTasks(tasks.filter(task => task.id !== id));
    };

    const openTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div className={styles.tasks}>
            <div>
                <h4>Suas tarefas de hoje</h4>
                {openTasks.length === 0 ? (
                    <p className={styles.emptyMessage}>Nenhuma tarefa aberta.</p>
                ) : (
                    <ul className={styles.taskList}>
                        {openTasks.map(task => (
                            <TaskItem 
                                key={task.id}
                                task={task}
                                toggleTask={toggleTask}
                                deleteTask={deleteTask}
                            />
                        ))}
                    </ul>
                )}
            </div>

            <div>
                <h4>Tarefas finalizadas</h4>
                {completedTasks.length === 0 ? (
                    <p className={styles.emptyMessage}>Nenhuma tarefa finalizada.</p>
                ) : (
                    <ul className={styles.taskList}>
                        {completedTasks.map(task => (
                            <TaskItem 
                                key={task.id}
                                task={task}
                                toggleTask={toggleTask}
                                deleteTask={deleteTask}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
