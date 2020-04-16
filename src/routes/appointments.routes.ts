import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointementsRouter = Router();

appointementsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointements = await appointmentsRepository.find();

  return response.json(appointements);
});

appointementsRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointement = await createAppointment.execute({
      provider,
      date: parseDate,
    });

    return response.json(appointement);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointementsRouter;
