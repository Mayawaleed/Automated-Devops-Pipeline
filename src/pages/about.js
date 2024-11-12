// src/pages/about.js
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>About Us</h1>
            <p className={styles.description}>
                Welcome to DevOps Pipeline, a web application dedicated to helping teams efficiently manage and scale their projects.
                Our mission is to streamline DevOps processes, offering a range of tools and automation options tailored to meet the 
                demands of growing applications and complex workflows.
            </p>

            <h2 className={styles.subtitle}>Tools and Scripts</h2>
            <p className={styles.text}>
                Our platform integrates essential tools and scripts designed to simplify and optimize project workflows. With these tools, teams can:
            </p>
            <ul className={styles.list}>
                <li>Automate repetitive tasks: Save time and reduce errors by automating build, deployment, and testing processes.</li>
                <li>Enhance collaboration: Through centralized resources and script recommendations, our platform fosters better collaboration across DevOps teams.</li>
                <li>Boost efficiency: Our tools are optimized for performance, reducing bottlenecks and helping teams focus on what matters.</li>
            </ul>

            <h2 className={styles.subtitle}>Automation Scaling</h2>
            <p className={styles.text}>
                As projects grow, so does the need for scalable automation. Our platform includes the <strong>Peak Resource Demand Predictor</strong>, 
                which forecasts resource spikes based on project data, ensuring efficient scaling to meet demand without over-provisioning. 
                With these predictive insights, teams can better allocate resources and enhance performance under high traffic.
            </p>
        </div>
    );
};

export default About;
