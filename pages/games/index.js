import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
export default function Games() {
	return (
		<>
			<div className={styles.container}>
				<main>
					<h1 className={styles.title}>Choose a game to play & learn!</h1>

					<div className={styles.grid}>
						<Link href='games/snake' className={styles.card}>
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
			</div>
		</>
	);
}
