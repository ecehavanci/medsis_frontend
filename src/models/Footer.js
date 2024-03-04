// Footer.js
import React from 'react';
import styles from './home.module.css';

function Footer() {
    return (
        <footer>
            <p style={{ fontSize: '10px' }}>&copy; 2024 YBS @ IEU. All rights reserved.</p>
            <div class={styles.contact_us}>
                <p style={{ fontSize: '14px' }}>For any inquiries, please email us <a href="mailto:mobile.ieu@ieu.edu.tr">mobile.ieu@ieu.edu.tr</a> or <a
                    href="mailto:ybs@ieu.edu.tr">ybs@ieu.edu.tr</a> </p>
            </div>
        </footer>
    );
}

export default Footer;
