import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-secondary bg-transparent text-accent">{children}</button>
    );
};

export default PrimaryButton;