import styles from "./modalConfirmDelete.module.scss";

export default function ModalConfirmDelete({ closeModal, deleteTask, task }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles.modalActions}>
          <button onClick={closeModal}>Cancelar</button>
          <button onClick={deleteTask}>Deletar</button>
        </div>
      </div>
    </div>
  );
}
