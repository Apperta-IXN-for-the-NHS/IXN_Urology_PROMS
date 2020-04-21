import { Document } from "mongoose";

interface Medication extends Document {
    name: string;
    dosage: string;
    date: Date;
    // user: mongoose-autopopulate
}