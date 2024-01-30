import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Javascript Mini Games</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={styles.container}>
				<main>
					<h1 className={styles.title}>About Us</h1>
					<div className={`${styles.grid} text-left justify-content-left`}>
						<h3 className='text-left'>Our mission </h3>
						<p>
							Is to make games in Javascript, React, or other frameworks- that
							not only work well, but are actually fun to play. We want to use
							these games to help other developers learn how to code in a fun
							way by following tutorials on how to build them, modding them, or
							building on top of them.
						</p>
					</div>
				</main>
			</div>
		</>
	);
}
