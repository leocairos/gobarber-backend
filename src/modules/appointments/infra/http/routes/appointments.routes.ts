import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointementsRouter = Router();
const appointementsController = new AppointmentsController();

appointementsRouter.use(ensureAuthenticated);

// appointementsRouter.get('/', async (request, response) => {
//   const appointements = await appointmentsRepository.find();

//   return response.json(appointements);
// });

appointementsRouter.post('/', appointementsController.create);

export default appointementsRouter;
