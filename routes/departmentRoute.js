import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    console.log('Afdelingsliste');
    res.send('Afdelingsliste');
})

router.get('/:region', (req, res) => {
    const region = req.params.region;
    console.log(`Afdelinger i region: ${region}`);
    res.send(`Afdelinger i region: ${region}`);
})


export { router as departmentRouter };