import styles from "./app.module.css"

import { Tip } from "./components/Tip"
import { Header } from "./components/Header"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"

export default function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />

        <Tip tip="Linguagem de programação dinamica" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
        </div>

        <h4>Palpites</h4>

        <div>
          <Input autoFocus maxLength={1} placeholder="?" />
        </div>
      </main>
    </div>
  )
}
