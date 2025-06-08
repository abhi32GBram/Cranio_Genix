// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            {/* Replace h2 with img for the logo */}
            <img
                src=".\public\image_2025-06-08_044401705-Photoroom.png" // Path to your logo image
                alt="CranioGenix Logo"
                className="logo"
            />

            <p className="subtitle">
                Upload an MRI scan to detect potential brain tumors with AI-powered analysis
            </p>
        </header>
    );
};

export default Header;