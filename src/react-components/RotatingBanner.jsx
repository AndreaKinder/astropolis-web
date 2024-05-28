import React, { useState, useEffect } from 'react';

const RotatingBanner = () => {
    const [index, setIndex] = useState(0);
    const banners = ["Proximamente", "Anuncio 2", "Anuncio 3"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="banner">
            <h1>{banners[index]}</h1>
        </div>
    );
};

export default RotatingBanner;