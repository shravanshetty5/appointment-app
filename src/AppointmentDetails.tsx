import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { AppointmentData } from './App';
interface AppointmentDetailsProps extends RouteComponentProps {
    appointmentID?: string;
}
const AppointmentDetails: React.FC<AppointmentDetailsProps> = (props) => {
    const appointmentList: AppointmentData[] = JSON.parse(
        localStorage.getItem('myAppointments') ?? '[]'
    );
    const currentAppointment = appointmentList.find(
        (app) => app.id === props.appointmentID
    );
    return currentAppointment ? (
        <>
            <div>Title: {currentAppointment.subject}</div>
            <div>Date: {currentAppointment.date}</div>
            <div>Time: {currentAppointment.time}</div>
            <div>Details: {currentAppointment.details}</div>
        </>
    ) : (
        <div>Appointment not found</div>
    );
};

export { AppointmentDetails };
