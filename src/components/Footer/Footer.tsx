import React from 'react';

const Footer: React.FC = () => {
    return (
        <div data-test="component-footer" className="mt-5 px-3 py-2 border-top footer" style={{ backgroundColor: "gainsboro" }}>
            &copy; 2020
        </div>
    )
}

export default Footer;