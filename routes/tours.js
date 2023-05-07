import express from 'express';
import { createTour, deleteTour, getAllTour, getSingleTour, updatedTour,getTourBySearch, getFeaturedTour, getTourCounts } from '../controllers/tourController.js';

import { verifyHotel } from '../utils/verifyToken.js';

const router = express.Router();

//create new tour
router.post('/',verifyHotel, createTour);

//update tour
router.put('/:id', verifyHotel, updatedTour);

//Delete tour
router.delete('/:id', verifyHotel, deleteTour);

//get sigle tour
router.get('/:id',  getSingleTour);

//get all tours
router.get('/', getAllTour);

//get tours by Search
router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTour);
router.get('/search/getTourCount', getTourCounts);

export default router;