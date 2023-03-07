import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
    id: string;
    description: string;
    isTaskDone: boolean;
    onTaskDoneChange: (taskId: string) => void;
    onTaskDelete: (taskIdToDelete: string) => void;
}

function Task({ id, description, isTaskDone, onTaskDoneChange, onTaskDelete }: TaskProps) {
    return (
        <div className={`${styles.task} ${isTaskDone && styles.done}`}>
            <div className={styles.contentContainer}>
                <label className={styles.checkboxContainer}>
                    <input
                        checked={isTaskDone}
                        type="checkbox"
                        className={styles.check}
                        onChange={() => onTaskDoneChange(id)}
                    />
                    <span className={styles.checkmark}>
                        <span className={styles.checkmarkHoverBackground}></span>
                        {
                            isTaskDone && <Check weight='bold' size={10} />
                        }
                    </span>
                </label>

                <p className={styles.description}>{description}</p>
            </div>

            <button
                className={styles.deleteTask}
                onClick={() => onTaskDelete(id)}
            >
                <Trash />
            </button>
        </div>
    );
}

export { Task };
