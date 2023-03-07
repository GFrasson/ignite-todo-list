import { PlusCircle } from  'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.creteTaskForm}>
          <input
            id="task"
            name="task"
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
        
        <main className={styles.tasksList}>
          <header className={styles.listHeader}>
            <div className={styles.createdTasks}>
              <span className={styles.createdTasksText}>Tarefas criadas</span>
              <span className={styles.badge}>5</span>
            </div>
            <div className={styles.doneTasks}>
              <span className={styles.doneTasksText}>Concluídas</span>
              <span className={styles.badge}>2 de 5</span>
            </div>
          </header>
          
          <Task />
          <Task />
          <Task />
        </main>
      </div>
    </div>
  )
}

export default App
