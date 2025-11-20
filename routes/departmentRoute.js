import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    console.log('Afdelingsliste');
    res.send('Afdelingsliste');
})

router.get('/jylland', (req, res) => {
    console.log('Afdelinger i Jylland');
    res.send('Afdelinger i Jylland');
})
router.get('/fyn', (req, res) => {
    console.log('Afdelinger i Fyn');
    res.send('Afdelinger i Fyn');
})
router.get('/sjaelland', (req, res) => {
    console.log('Afdelinger i Sjaelland');
    res.send('Afdelinger i Sjaelland');
})

export { router as departmentRouter };