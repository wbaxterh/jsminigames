import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/CustomHeader";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Javascript Mini Games</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<main>
					<h1 className={styles.title}>
						Welcome to <a href='/games'>Javascript Mini Games!</a>
					</h1>

					<p className={styles.description}>
						Let's learn the fun way, if you are <code>document.ready() </code>
					</p>

					<div className={styles.grid}>
						<a href='#' className={styles.card}>
							<h3>Documentation &rarr;</h3>
							<p>
								Find in-depth information about Javascript Mini Games and the
								code behind them.
							</p>
						</a>

						<a href='games' className={styles.card}>
							<h3>Play & Learn &rarr;</h3>
							<p>
								Learn about javascript in an interactive gaming course with
								quizzes!
							</p>
						</a>

						<a href='#' className={styles.card}>
							<h3>Examples &rarr;</h3>
							<p>
								Discover and deploy boilerplate example javascript gaming
								projects.
							</p>
						</a>

						<a href='#' className={styles.card}>
							<h3>Questions? &rarr;</h3>
							<p>
								We are here to help answer any and all questions you can throw
								at us.
							</p>
						</a>
					</div>
				</main>
			</div>
		</>
	);
}
