import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointementsRouter = Router();
const appointementsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointementsRouter.use(ensureAuthenticated);

appointementsRouter.post('/', appointementsController.create);
appointementsRouter.get('/me', providerAppointmentsController.index);

export default appointementsRouter;
