// src/pages/_app.js

import '../styles/upload.css'; // Ensure this path is correct
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // If you want to include the Footer as well

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
