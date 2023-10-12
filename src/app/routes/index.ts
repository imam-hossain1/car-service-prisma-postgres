import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { serviceRoutes } from '../modules/service/service.route';
import { bookingRoutes } from '../modules/booking/booking.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes
  },
  {
    path: "/service",
    route: serviceRoutes
  },
  {
    path: "/booking",
    route: bookingRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
