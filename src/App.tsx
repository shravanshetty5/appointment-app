import React, { useState } from 'react';
import './App.css';
import { AppointmentForm } from './AppointmentForm';
import { AppointmentList } from './AppointmentList';
import { Router, Link, RouteComponentProps } from '@reach/router';
import { AppointmentDetails } from './AppointmentDetails';
interface AppointmentData {
    date: string;
    time: string;
    subject: string;
    details: string;
    id: string;
}

function App() {
    const [appointmentState, setAppointmentState] = useState<AppointmentData>({
        date: '',
        time: '',
        subject: '',
        details: '',
        id: '',
    });

    return (
        <div className="App">
            <header>
                <menu>
                    <ul
                        style={{
                            display: 'flex',
                            listStyleType: 'none',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        {[
                            { path: '/', value: 'Add an appointment' },
                            {
                                path: 'appointment-list',
                                value: 'Current appointments',
                            },
                        ].map((item) => (
                            <li key={item.path}>
                                <Link to={item.path}>{item.value}</Link>
                            </li>
                        ))}
                    </ul>
                </menu>
            </header>
            <main>
                <Router>
                    <AppointmentForm
                        path="/"
                        appointmentState={appointmentState}
                        setAppointmentState={setAppointmentState}
                    ></AppointmentForm>
                    <AppointmentList path="appointment-list"></AppointmentList>
                    <AppointmentDetails path="appointment/:appointmentID"></AppointmentDetails>
                    <NotFound default />
                </Router>
            </main>
        </div>
    );
}

const NotFound: React.FC<RouteComponentProps> = () => (
    <div>Sorry, nothing here.</div>
);

export { App };
export type { AppointmentData };
