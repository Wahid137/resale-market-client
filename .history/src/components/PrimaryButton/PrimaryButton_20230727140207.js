import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-secondary text-black">{children}</button>
    );
};

export default PrimaryButton;