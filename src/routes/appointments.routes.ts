import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointementsRouter = Router();

appointementsRouter.use(ensureAuthenticated);

appointementsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointements = await appointmentsRepository.find();

  return response.json(appointements);
});

appointementsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parseDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointement = await createAppointment.execute({
    provider_id,
    date: parseDate,
  });

  return response.json(appointement);
});

export default appointementsRouter;
