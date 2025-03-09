// src/pages/_app.js

import '../styles/upload.css'; // Ensure this path is correct
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // If you want to include the Footer as well
import '../styles/upload.css'; 
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
