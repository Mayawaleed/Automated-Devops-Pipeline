// src/pages/_app.js
import '../styles/upload.css'; // Ensure this path is correct
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
