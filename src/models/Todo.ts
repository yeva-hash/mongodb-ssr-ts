import { Schema, model } from 'mongoose';

interface ITodo {
    title: string,
    completed: boolean
}

const schema: Schema = new Schema<ITodo>({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export default model<ITodo>('Todo', schema);