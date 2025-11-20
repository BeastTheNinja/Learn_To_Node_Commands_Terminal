import { Router } from "express";

const router = Router();

router.get('/', (req, res) =>{
    console.log('Om os side');
    res.send('Om os side');
})
export { router as aboutRouter };