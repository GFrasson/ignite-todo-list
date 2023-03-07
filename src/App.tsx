import { PlusCircle } from  'phosphor-react';

import { Header } from './components/Header';

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
      </div>
    </div>
  )
}

export default App
