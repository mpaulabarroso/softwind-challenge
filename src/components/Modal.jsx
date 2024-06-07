import { useState } from "react"
import styles from './modal.module.css'

export function Modal({ onPress, toDisplay }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {isOpen &&
                <div className={styles.container}>
                    <div className={styles.content}>
                        {toDisplay}
                        <button onClick={() => setIsOpen(false)} className={styles.modalButton}>close</button>
                    </div>
                </div>
            }
            <div onClick={() => setIsOpen(true)}>{onPress}</div>
        </div>
    )
}