import { useState } from 'react';
import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

function Task() {
    const [isTaskDone, setIsTaskDone] = useState(false);

    return (
        <div className={`${styles.task} ${isTaskDone && styles.done}`}>
            <label className={styles.checkboxContainer}>
                <input
                    checked={isTaskDone}
                    type="checkbox"
                    className={styles.check}
                    onChange={() => setIsTaskDone(!isTaskDone)}
                />
                <span className={styles.checkmark}>
                    <span className={styles.checkmarkHoverBackground}></span>
                    {
                        isTaskDone && <Check weight='bold' size={10} />
                    }
                </span>
            </label>

            <p className={styles.description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nihil itaque dolorum ipsam, voluptates iste praesentium nesciunt.
            </p>

            <button className={styles.deleteTask}>
                <Trash />
            </button>
        </div>
    );
}

export { Task };
