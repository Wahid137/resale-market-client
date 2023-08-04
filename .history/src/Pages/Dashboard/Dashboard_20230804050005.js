import React from 'react';

const Dashboard = () => {
    return (
        <div className='m-10'>
            <input type="range" min={0} max="100" value="10" className="range" />
        </div>
    );
};

export default Dashboard;