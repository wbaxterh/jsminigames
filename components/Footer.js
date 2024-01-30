import React, { Component } from "react";
import styles from "./layout.module.css";

function Footer() {
	// Combine class from CSS module with a global class
	const footerClass = `${styles.footer} bg-dark`;
	const linkClass = `${styles.linkTheme} text-light`;
	return (
		<footer className={footerClass}>
			<a href='https://weshuber.com' className={linkClass}>
				Made with love ♥
			</a>
			{/* <img src="/vercel.svg" alt="Vercel" className={styles.logo} /> */}
		</footer>
	);
}
export default Footer;
