import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    console.log('Afdelingsliste');
    res.send('Afdelingsliste');
})

router.get('/:region', (req, res) => {
    res.send(`Afdelinger i region: ${req.params.region}`);
})


export { router as departmentRouter };