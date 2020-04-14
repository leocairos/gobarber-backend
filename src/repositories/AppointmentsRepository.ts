import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface createAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointement =>
      isEqual(date, appointement.date),
    );
    return findAppointment || null;
  }

  public create({ provider, date }: createAppointmentDTO): Appointment {
    const appointement = new Appointment({ provider, date });

    this.appointments.push(appointement);

    return appointement;
  }
}

export default AppointmentsRepository;
