import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-secondary btn-lg text-accent">{children}</button>
    );
};

export default PrimaryButton;