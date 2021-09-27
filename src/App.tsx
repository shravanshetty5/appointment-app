import React, { useState } from 'react';
import './App.css';
import { AppointmentForm } from './AppointmentForm';
import { AppointmentList } from './AppointmentList';
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
                            'Schedule an appointment',
                            'Current appointments',
                        ].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </menu>
            </header>
            <main>
                <AppointmentForm
                    appointmentState={appointmentState}
                    setAppointmentState={setAppointmentState}
                ></AppointmentForm>
                <AppointmentList></AppointmentList>
            </main>
        </div>
    );
}

export { App };
export type { AppointmentData };
