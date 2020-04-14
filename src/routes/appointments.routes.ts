import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointementsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointementsRouter.get('/', (request, response) => {
  const appointements = appointmentsRepository.all();

  return response.json(appointements);
});

appointementsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointement = createAppointment.execute({
      provider,
      date: parseDate,
    });

    return response.json(appointement);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointementsRouter;
