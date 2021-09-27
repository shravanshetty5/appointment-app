import React from 'react';
import { AppointmentData } from './App';
interface AppointmentFormProps {
    setAppointmentState: React.Dispatch<React.SetStateAction<AppointmentData>>;
    appointmentState: AppointmentData;
}

const AppointmentForm: React.FC<AppointmentFormProps> = (props) => {
    const { appointmentState, setAppointmentState } = props;

    const handleAppointmentChange = (
        key: keyof AppointmentData,
        value: string
    ) => {
        setAppointmentState((state) => {
            const newState = {
                ...state,
            };
            newState[key] = value;
            return newState;
        });
    };

    const handleAddAppointment = (event: any) => {
        event.preventDefault();
        //add appointment to local storage
        let appointments: AppointmentData[] = JSON.parse(
            localStorage.getItem('myAppointments') ?? '[]'
        );
        const id = `${appointments.length}`;
        appointments.push({
            ...appointmentState,
            id,
        });
        localStorage.setItem('myAppointments', JSON.stringify(appointments));
        setAppointmentState({
            date: '',
            time: '',
            subject: '',
            details: '',
            id: '',
        });
    };
    return (
        <form
            id="appointment-form"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            onSubmit={handleAddAppointment}
        >
            <label htmlFor="appointment-date">Select appointment date</label>
            <input
                type="date"
                id="appointment-date"
                value={appointmentState.date}
                onChange={(e) =>
                    handleAppointmentChange('date', e.target.value)
                }
            />
            <label htmlFor="appointment-time">Select appointment time</label>
            <input
                type="time"
                id="appointment-time"
                value={appointmentState.time}
                onChange={(e) =>
                    handleAppointmentChange('time', e.target.value)
                }
            />
            <label htmlFor="appointment-subject">
                Select appointment subject
            </label>
            <input
                type="text"
                id="appointment-subject"
                maxLength={200}
                value={appointmentState.subject}
                onChange={(e) =>
                    handleAppointmentChange('subject', e.target.value)
                }
            />
            <label htmlFor="appointment-details">
                Select appointment details
            </label>
            <textarea
                id="appointment-details"
                value={appointmentState.details}
                onChange={(e) =>
                    handleAppointmentChange('details', e.target.value)
                }
            />
            <input
                id="add-appointment"
                type="submit"
                value="Add Appointment"
            ></input>
        </form>
    );
};

export { AppointmentForm };
