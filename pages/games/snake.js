import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SnakeGame from "../../components/SnakeGame";

export default function Snake() {
	return (
		<>
			<Head>
				<title>Javascript Mini Games</title>
				<link rel="icon" href="/favicon.ico" />
				{/* Meta tags for SEO */}
				<meta
					name="description"
					content="Play and learn with Javascript Mini Games. A collection of fun mini games built with JavaScript, complete with code examples and documentation."
				/>
				<meta
					name="keywords"
					content="JavaScript, Mini Games, Learn Coding, Code Examples, Documentation"
				/>
				<meta name="author" content="Wes Huber" />
				{/* Open Graph tags for social sharing */}
				<meta property="og:title" content="Javascript Mini Games" />
				<meta
					property="og:description"
					content="Play and learn with Javascript Mini Games. A collection of fun mini games built with JavaScript, complete with code examples and documentation."
				/>
				<meta property="og:image" content="/path/to/your-image.jpg" />{" "}
				{/* Replace with your image path */}
				<meta
					property="og:url"
					content="https://javascriptminigames.com"
				/>{" "}
				{/* Replace with your website URL */}
				{/* Twitter Card tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Javascript Mini Games" />
				<meta
					name="twitter:description"
					content="Play and learn with Javascript Mini Games. A collection of fun mini games built with JavaScript, complete with code examples and documentation."
				/>
				<meta name="twitter:image" content="/path/to/your-image.jpg" />{" "}
				{/* Replace with your image path */}
			</Head>
			<Header />
			<div className={styles.container}>
				<main>
					<h1 className={styles.title}>Welcome to the Snake Game.</h1>

					<div className={styles.grid}>
						<SnakeGame />
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}
