import styles from '../styles/JournalEntry.module.css'
import Image from 'next/image'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBold,
    faItalic,
    faUnderline,
    faAlignLeft,
    faAlignCenter,
    faAlignRight,
    faTextSlash,
    faHome,
    faUser,
    faImage
} from '@fortawesome/free-solid-svg-icons'


function JournalEntry() {
    return (
        <div id={styles.section}>
            <div id={styles.navbar}>
                <Image id={styles.logo} src="/logo_filled.png" alt="logo" width="60" height="60" />

                <div id={styles.jetitle}>
                    My Journal Entry
                </div>


                <div id={styles.navbuttons}>
                    <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faHome} />
                    </button>

                    <button className={styles.button} type="button">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                </div>
            </div>


            <div id={styles.body}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={`${styles.first} ${styles.box}`}>
                            <input className={styles.input} id="font-size" type="number" value="16" min="1" max="100" onChange="f1(this)" />
                        </div>
                        <div className={`${styles.second} ${styles.box}`}>
                            <button className={styles.button} type="button">
                                <FontAwesomeIcon icon={faBold} />
                            </button>
                            <button className={styles.button} type="button">
                                <FontAwesomeIcon icon={faItalic} />
                            </button>
                            <button className={styles.button} type="button">
                                <FontAwesomeIcon icon={faUnderline} />
                            </button>
                        </div>
                        <div className={`${styles.third} ${styles.box}`}>
                            <button className={styles.button} type="button">
                                <FontAwesomeIcon icon={faAlignLeft} />
                            </button>
                            <button className={styles.button} type="button">
                                <FontAwesomeIcon icon={faAlignCenter} />
                            </button>
                            <button className={styles.button} type="button">
                                <FontAwesomeIcon icon={faAlignRight} />
                            </button>
                        </div>
                        <div className={`${styles.fourth} ${styles.box}`}>
                            <button className={styles.button} type="button">aA</button>
                            <button className={styles.button} type="button">
                                <FontAwesomeIcon icon={faTextSlash} />
                            </button>
                            <input type="color" />
                        </div>

                        <div className={`${styles.fifth} ${styles.box}`}>
                            <button className={styles.button} type="button">
                                <FontAwesomeIcon icon={faImage} />
                            </button>
                        </div>
                    </div>
                </div>
                <br />
                <div className={styles.textareas}>
                    <div className={styles.col}>
                        <textarea id={styles.textarea1} placeholder="Start writing "></textarea>
                    </div>

                    <div className={styles.col} id={styles.textarea2}>
                        <div className={styles.reflectiontitle} id={styles.textarea2}>
                            My Reflections
                        </div>
                        <hr />
                        <div className={styles.textarea3}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</div>
                    </div>
                </div>
            </div>

            <div id={styles.buttonbox}> 
                <button type='button' className={styles.buttonstyle}>
                    Save
                </button>
            </div>
        </div>

    )
}

export default JournalEntry