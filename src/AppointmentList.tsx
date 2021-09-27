import React from 'react';
import { AppointmentData } from './App';

const AppointmentList: React.FC = (props) => {
    const appointmentList: AppointmentData[] = JSON.parse(
        localStorage.getItem('myAppointments') ?? '[]'
    );
    return (
        <div id="appointment-list">
            {appointmentList.map((appointment) => {
                return (
                    <div id="appointment-row" key={appointment.id}>
                        <span>{appointment.date}</span>
                        <span>{appointment.subject}</span>
                    </div>
                );
            })}
        </div>
    );
};

export { AppointmentList };
