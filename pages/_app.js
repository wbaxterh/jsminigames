import Layout from "../components/Layout"; // Import the Layout component
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
