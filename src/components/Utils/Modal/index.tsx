import { ReactElement } from "react"
import { Overlay } from "@/components/Utils"

import styles from './index.module.scss'

export interface ModalProps {
    isOpen: boolean
    onRequestClose: Function
    children: ReactElement
}

export const Modal = ({ children, ...props }: ModalProps) => {
    return <Overlay {...props}>
        <div className={styles.modalContainer}>
            <div className={styles.childContainer}>
                { children }
            </div>
        </div>
    </Overlay>
}