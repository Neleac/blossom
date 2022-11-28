import styles from '../styles/JournalEntry.module.css'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBold, 
    faItalic,
    faUnderline,
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faTextSlash,
} from '@fortawesome/free-solid-svg-icons'




function JournalEntry() {
    return (
        <div id={styles.section}>
        <div id={styles.body}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className= {`${styles.first} ${styles.box}`}>
                        <input className={styles.input} id="font-size" type="number" value="16" min="1" max="100" onChange="f1(this)" />
                    </div>
                    <div className={`${styles.second} ${styles.box}`}>
                        <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faBold}/>
                        </button>
                        <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faItalic}/>
                        </button>
                        <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faUnderline}/>
                        </button>
                    </div>
                    <div className={`${styles.third} ${styles.box}`}>
                        <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faAlignLeft}/>
                        </button>
                        <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faAlignCenter}/>
                        </button>
                        <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faAlignRight}/>
                        </button>
                    </div>
                    <div className={`${styles.fourth} ${styles.box}`}>
                        <button className={styles.button} type="button">aA</button>
                        <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faTextSlash}/>
                        </button>
                        <input type="color"/>
                    </div>
                </div>
            </div>
            <br />
                <div className={styles.textareas}>
                    <div className={styles.col}>
                        <textarea id={styles.textarea1} placeholder="Your text here "></textarea>
                    </div>
                    <div className={styles.col}>
                        <textarea id={styles.textarea1} placeholder="Your text here "></textarea>
                    </div>
                </div>
        </div>
        </div>
        
    )
}

export default JournalEntry