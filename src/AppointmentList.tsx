import { Link, RouteComponentProps } from '@reach/router';
import React from 'react';
import { AppointmentData } from './App';
const AppointmentList: React.FC<RouteComponentProps> = (props) => {
    const appointmentList: AppointmentData[] = JSON.parse(
        localStorage.getItem('myAppointments') ?? '[]'
    );
    return (
        <div
            id="appointment-list"
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            {appointmentList.map((appointment) => {
                return (
                    <Link
                        to={`/appointment/${appointment.id}`}
                        id="appointment-row"
                        key={appointment.id}
                    >
                        <span>{appointment.date}</span>
                        <span>{appointment.subject}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export { AppointmentList };
