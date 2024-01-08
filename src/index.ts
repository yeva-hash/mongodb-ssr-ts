import express, {Application} from 'express';
import mongoose from 'mongoose';
import { create, ExpressHandlebars } from 'express-handlebars';
import todoRoutes from './routes/todos';

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

const app: Application = express();
const hbs: ExpressHandlebars = create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }))

app.use(todoRoutes);

async function start(): Promise<void> {
    try {
        await mongoose.connect(''); 
        app.listen(PORT, () => {
            console.log(`Starting on PORT: ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

start();