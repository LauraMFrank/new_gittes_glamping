import styles from "./footer.module.css";



const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContent}>
                
                <div className={styles.Icons}>
                    <img className={styles.soMeIcons} src="../assets/icons/icons8-facebook-24.svg" alt="icons" />
                    <img className={styles.soMeIcons} src="../assets/icons/icons8-instagram-24.svg" alt="icons" />
                </div>
                <div className={styles.logoBox}>
                    <p className={styles.name}>Gittes Glamping</p>
                    <img className={styles.logo} src="../assets/logo.png" alt="" />
                </div>

            </div>
        </footer>
    )
}

export default Footer;