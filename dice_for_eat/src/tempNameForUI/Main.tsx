import { Button, ButtonType } from './components/Button'
import styles from './Main.module.scss'

function Main() {
    return (
        <div className={styles.container}>
            <div>temp</div>
            <div className={styles.buttons}>
                <Button>Бросить кубики</Button>
                <Button type={ButtonType.secondary}>Уточнить блюдо</Button>
            </div>
        </div>
    )
}

export default Main
