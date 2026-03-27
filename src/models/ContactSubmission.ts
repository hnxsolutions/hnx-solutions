import { Schema, model, models } from "mongoose";

export interface ContactSubmissionDoc {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
  status: "new" | "read" | "responded";
  source: "contact_form";
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSubmissionSchema = new Schema<ContactSubmissionDoc>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    projectType: {
      type: String,
      required: true,
      trim: true,
    },
    budget: {
      type: String,
      required: false,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
    status: {
      type: String,
      enum: ["new", "read", "responded"],
      default: "new",
      required: true,
      index: true,
    },
    source: {
      type: String,
      enum: ["contact_form"],
      default: "contact_form",
      required: true,
    },
    ipAddress: {
      type: String,
      required: false,
    },
    userAgent: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

contactSubmissionSchema.index({ status: 1, createdAt: -1 });

export const ContactSubmission =
  models.ContactSubmission ||
  model<ContactSubmissionDoc>("ContactSubmission", contactSubmissionSchema);
