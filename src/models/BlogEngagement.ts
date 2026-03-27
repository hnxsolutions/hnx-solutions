import { Schema, model, models } from "mongoose";

export interface BlogEngagementDoc {
  slug: string;
  likes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
}

const blogEngagementSchema = new Schema<BlogEngagementDoc>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    likes: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    comments: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

blogEngagementSchema.index({ updatedAt: -1 });

export const BlogEngagement =
  models.BlogEngagement ||
  model<BlogEngagementDoc>("BlogEngagement", blogEngagementSchema);
