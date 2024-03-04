import React from 'react';
import styles from './home.module.css';
import medsis_favicon from '../images/medsis_favicon.ico';
import app_store_img from '../images/Play_Store.png';
import play_store_img from '../images/App_Store.png';
import Footer from './Footer';
import Header from './Header';


function Container() {
    const containerStyle = {
        backgroundColor: "#f0ecec",
        overflowY: "auto",
        minHeight: "100vh",
        display: "flex",
        flex: 1,
        // height:"max-content",
        // width:"100%",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    };

    return (
        <div style={containerStyle}>
            <Header />
            <AboutSection />
            <div style={{flex:1}}></div>
            <Footer />
        </div>
    );
}

function AboutMedSIS() {
    return (
        <div>
            <h2>About MedSIS</h2>
            <div style={{ height: '10px' }}></div>
            <img src={medsis_favicon} alt="MedSIS pic" className={styles.center_img} width="150px" />
            <p>
                The MedSIS (Medical Student Internship Information System) application was developed within the Software and Automation Department of IUE (Izmir University of Economics) to facilitate the documentation processes of medical department's internships.
            </p>
            <p>
                MedSIS (Tıp Öğrenci Staj Bilgi Sistemi) uygulaması, İEÜ (İzmir Ekonomi Üniversitesi) Yazılım ve Otomasyon Bölümü'nde, tıp bölümünün staj süreçlerinin belgelendirme işlemlerini kolaylaştırmak amacıyla geliştirilmiştir.
            </p>
        </div>
    );
}

function AppLinks() {
    return (
        <div className={styles.app_links}>
            <h3>Get Our App</h3>
            <p>Download our app from the following stores:</p>
            <a href="https://play.google.com/store/apps/details?id=your_app_id" target="_blank" rel="noopener noreferrer">
                <img src={play_store_img} alt="Google Play Store" />
                <p>Google Play Store</p>
            </a>
            <a href="https://apps.apple.com/us/app/your-app/id1234567890" target="_blank" rel="noopener noreferrer">
                <img src={app_store_img} alt="App Store" />
                <p>App Store</p>
            </a>
        </div>
    );
}

function AboutSection() {
    return (
        <section className={styles.container}>
            <AboutMedSIS />
            <AppLinks />
        </section>
    );
}

export default Container;


