import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<title>Javascript Mini Games</title>
					<link rel='icon' href='/favicon.ico' />
					{/* Meta tags for SEO */}
					<meta
						name='description'
						content='Play and learn with Javascript Mini Games. A collection of fun mini games built with JavaScript, complete with code examples and documentation.'
					/>
					<meta
						name='keywords'
						content='JavaScript, Mini Games, Learn Coding, Code Examples, Documentation'
					/>
					<meta name='author' content='Wes Huber' />
					{/* Open Graph tags for social sharing */}
					<meta property='og:title' content='Javascript Mini Games' />
					<meta
						property='og:description'
						content='Play and learn with Javascript Mini Games. A collection of fun mini games built with JavaScript, complete with code examples and documentation.'
					/>
					<meta property='og:image' content='/path/to/your-image.jpg' />{" "}
					{/* Replace with your image path */}
					<meta
						property='og:url'
						content='https://javascriptminigames.com'
					/>{" "}
					{/* Replace with your website URL */}
					{/* Twitter Card tags */}
					<meta name='twitter:card' content='summary_large_image' />
					<meta name='twitter:title' content='Javascript Mini Games' />
					<meta
						name='twitter:description'
						content='Play and learn with Javascript Mini Games. A collection of fun mini games built with JavaScript, complete with code examples and documentation.'
					/>
					<meta name='twitter:image' content='/jsMiniGames.png' />{" "}
					{/* Replace with your image path */}
					{/* Add your Google Fonts link here */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Varela+Round&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
