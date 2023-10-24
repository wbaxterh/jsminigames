import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
export default function Games() {
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
				<meta name="twitter:image" content="/jsMiniGames.png" />{" "}
				{/* Replace with your image path */}
			</Head>
			<Header />
			<div className={styles.container}>
				<main>
					<h1 className={styles.title}>Choose a game to play & learn!</h1>

					<div className={styles.grid}>
						<Link href="games/snake" className={styles.card}>
							<h3>Snake &rarr;</h3>
							<p>
								Navigate a growing snake through a grid to collect food, but
								avoid colliding with the walls or yourself in this classic
								arcade game.
							</p>
						</Link>

						{/* <a href="games" className={styles.card}>
							<h3>Play & Learn &rarr;</h3>
							<p>
								Learn about javascript in an interactive gaming course with
								quizzes!
							</p>
						</a>

						<a href="#" className={styles.card}>
							<h3>Examples &rarr;</h3>
							<p>
								Discover and deploy boilerplate example javascript gaming
								projects.
							</p>
						</a>

						<a href="#" className={styles.card}>
							<h3>Questions? &rarr;</h3>
							<p>
								We are here to help answer any and all questions you can throw
								at us.
							</p>
						</a> */}

						
					</div>
				</main>
				<Footer />
			</div>
		</>
	);
}
