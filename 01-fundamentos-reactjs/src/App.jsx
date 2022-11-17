
import Header from "./componentes/Header"
import Post from "./Post"
import Sidebar from "./componentes/Sidebar"
import "./global.css"

import styles from "./App.module.css"
const App = () => {

  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author="João Victor"
          content="Estou estudando React"
        />
        <Post
          author="Fulano"
          content="Também estou estudando React!"
        />
      </main>
    </div>
  </div>
  )
}

export default App
