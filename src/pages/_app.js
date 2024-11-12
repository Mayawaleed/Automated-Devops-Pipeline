// src/pages/_app.js

import '../styles/upload.css'; // Ensure this path is correct
import Navbar from '../components/NavBar';
import Footer from '../components/Footer'; // If you want to include the Footer as well

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Navbar />
        <Component {...pageProps} />
        <Footer /> {/* Include Footer here for consistency across all pages */}
    </>
);
}

export default MyApp;
