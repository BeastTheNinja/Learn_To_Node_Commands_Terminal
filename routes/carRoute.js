import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    console.log('her er en car page');
    res.send('det her er car page');
})



export { router as carRouter };