import React, { useEffect, useState } from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    
    const [volunteers, setVolunteers] = useVolunteers([]);
    
    return (
        <div>
            <h3>Volunteers Activities:{volunteers.length}</h3>
                <div className="activity-container">
                  {
                    volunteers.map(activity => <Activity
                    key={activity._id}
                    activity={activity}
                    ></Activity>)
                  }
                </div>
        </div>
    );
};

export default Main;