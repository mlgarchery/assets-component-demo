import Doughnut from './doughnut'
import ProgressBar from '../components/progress-bar'
import Table from '../components/table'

import styles from '../styles/assets.module.scss'

export default function Assets({}){
    return (
        <div className={styles.assets}>
            <Doughnut />
            <div>
                <span>A text</span> <ProgressBar percentage={50} />
            </div>
            <Table></Table>
        </div>
    )
}
