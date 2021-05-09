import express, { Router } from 'express';
import { check, validationResult } from 'express-validator';
const router: Router = Router();

// @route   POST api/vehicle
// @desc    Test route
// @access  Public
router.post('/', (req: express.Request, res: express.Response) => {
    console.log(req);
});
