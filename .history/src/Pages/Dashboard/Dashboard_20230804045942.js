import React from 'react';

const Dashboard = () => {
    return (
        <div className='mt-10'>
            <input type="range" min={0} max="100" value="40" className="range" />
        </div>
    );
};

export default Dashboard;