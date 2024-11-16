import React, { useEffect, useState } from "react";
import { fetchInfo } from "../utils/api";

const InfoComponent = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetchInfo().then(setInfo).catch(console.error);
    }, []);

    return (
        <div>
            <h1>API Response:</h1>
            {info ? (
                <pre>{JSON.stringify(info, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default InfoComponent;
