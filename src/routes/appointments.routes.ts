import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

const appointementsRouter = Router();

const appointments: Appointment[] = [];

appointementsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointments.find(appointement =>
    isEqual(parseDate, appointement.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }
  const appointement = new Appointment(provider, parseDate);

  appointments.push(appointement);

  return response.json(appointement);
});

export default appointementsRouter;
