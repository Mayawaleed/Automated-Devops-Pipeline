// src/pages/dashboard.js
import Navbar from '../components/NavBar';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <p>Here you can view your project predictions and recommendations.</p>
            {/* This is where you would display predictions and recommendations */}
        </div>
    );
};

export default Dashboard;
