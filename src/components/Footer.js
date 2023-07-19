import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 py-4 text-white">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} SpaceX Dashboard. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
