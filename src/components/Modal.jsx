import { useState } from "react"
import styles from './modal.module.css'

export function Modal({ onPress, toDisplay }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {isOpen &&
                <div
                    onClick={() => setIsOpen(false)}
                    className={styles.container}
                >
                    {toDisplay}
                </div>
            }
            <div onClick={() => setIsOpen(true)}>{onPress}</div>
        </div>
    )
}