import { Router } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointementsRouter = Router();

appointementsRouter.use(ensureAuthenticated);

// appointementsRouter.get('/', async (request, response) => {
//   const appointements = await appointmentsRepository.find();

//   return response.json(appointements);
// });

appointementsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parseDate = parseISO(date);

  const createAppointment = container.resolve(CreateAppointmentService);

  const appointement = await createAppointment.execute({
    provider_id,
    date: parseDate,
  });

  return response.json(appointement);
});

export default appointementsRouter;
