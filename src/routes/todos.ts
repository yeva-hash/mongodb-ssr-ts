import { Router, Request, Response } from 'express';
import Todo from '../models/Todo';
import { Document } from 'mongoose';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const todos: Document[] = await Todo.find({});
        res.render('index', {
            title: 'Todos list',
            isIndex: true,
            todos: todos.map(todo => todo.toObject())
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/create', (req: Request, res: Response) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

router.post('/create', async (req: Request, res: Response) => {
    const todo = new Todo({
        title: req.body.title
    })

    await todo.save();
    res.redirect('/');
})

export default router;