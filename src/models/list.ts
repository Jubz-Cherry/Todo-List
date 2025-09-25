import { Schema, model } from "mongoose";

export interface IList {
    id: String
    tittle: String
    completed: Boolean 
    createdAt: Date
}

const todoSchema = new Schema<IList>({
    tittle: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

export const List = model<IList>("List", todoSchema)

