import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Contact route works!');
    console.log('contact page');
})

export { router as contactRouter };