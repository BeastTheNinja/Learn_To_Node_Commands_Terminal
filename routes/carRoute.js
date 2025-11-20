import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    console.log('liste af biler');
    res.send('liste af biler');
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    console.log(`Bil detaljer ${id}`);
    res.send(`Bil detaljer: ${id}`);
})


export { router as carRouter };