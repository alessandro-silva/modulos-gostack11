import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessiosController from '../controllers/SessionsController';

const sessionsController = new SessiosController();

const sessionsRouter = Router();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionsRouter;
