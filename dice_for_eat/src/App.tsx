import Main from './canvas/Main'
import { Main as Main2 } from './tempNameForUI'
import styles from './App.module.scss'

function App() {
	return (
		<>
			<Main className={styles.canvas} />
			<Main2 />
		</>
	)
}

export default App
