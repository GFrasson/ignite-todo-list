import { FormEvent, useState } from 'react';
import { PlusCircle, ClipboardText } from 'phosphor-react';
import { v4 as uuidV4 } from 'uuid';

import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css';

interface TaskItem {
  id: string;
  description: string;
  isTaskDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateTask(event: FormEvent): void {
    event.preventDefault();

    const newTask: TaskItem = {
      id: uuidV4(),
      description: newTaskText,
      isTaskDone: false
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  }

  function handleTaskDoneChange(taskId: string): void {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isTaskDone: !task.isTaskDone
        };
      }
      
      return task;
    });

    setTasks(updatedTasks);
  }

  function handleDeleteTask(taskIdToDelete: string): void {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== taskIdToDelete);
    setTasks(tasksWithoutDeletedOne);
  }

  function countDoneTasks(): number {
    const doneTasks = tasks.filter((task) => task.isTaskDone);
    return doneTasks.length;
  }

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <form
          className={styles.creteTaskForm}
          onSubmit={handleCreateTask}
        >
          <input
            id="task"
            name="task"
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            value={newTaskText}
            onChange={(event) => setNewTaskText(event.target.value)}
          />
          <button type="submit" disabled={!newTaskText}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <main className={styles.tasksList}>
          <header className={styles.listHeader}>
            <div className={styles.createdTasks}>
              <span className={styles.createdTasksText}>Tarefas criadas</span>
              <span className={styles.badge}>{tasks.length}</span>
            </div>
            <div className={styles.doneTasks}>
              <span className={styles.doneTasksText}>Concluídas</span>
              <span className={styles.badge}>{countDoneTasks()} de {tasks.length}</span>
            </div>
          </header>

          {
            tasks.length === 0 ? (
              <>
                <div className={styles.emptyTasks}>
                  <ClipboardText size={56} />
                  <p className={styles.emptyTasksTitle}>
                    Você ainda não tem tarefas cadastradas
                  </p>
                  <p>
                    Crie tarefas e organize seus itens a fazer
                  </p>
                </div>
              </>
            ) : (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  description={task.description}
                  isTaskDone={task.isTaskDone}
                  onTaskDoneChange={handleTaskDoneChange}
                  onTaskDelete={handleDeleteTask}
                />
              ))
            )
          }
        </main>
      </div>
    </div>
  )
}

export default App
