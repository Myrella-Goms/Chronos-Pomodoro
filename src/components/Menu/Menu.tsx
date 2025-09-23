import { HomeIcon, Settings, Sun, TimerIcon } from 'lucide-react'
import styles from './Menu.module.css'


export function Menu(){
    return(
        <div className={styles.menu}>
            <a className={styles.menuIcons} href="">
                <HomeIcon/>
            </a>
            <a className={styles.menuIcons} href="">
                <TimerIcon/>
            </a>
            <a className={styles.menuIcons} href="">
                <Settings />
            </a>
            <a className={styles.menuIcons} href="">
                <Sun />
            </a>
        </div>
    )
}