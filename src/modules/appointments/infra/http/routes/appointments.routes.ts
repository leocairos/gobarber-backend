import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointementsRouter = Router();
const appointementsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointementsRouter.use(ensureAuthenticated);

appointementsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointementsController.create,
);
appointementsRouter.get('/me', providerAppointmentsController.index);

export default appointementsRouter;
