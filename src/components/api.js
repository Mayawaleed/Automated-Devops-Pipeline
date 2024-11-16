export const fetchInfo = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/info/");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
