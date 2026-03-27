import { Schema, model, models } from "mongoose";

export interface BlogUserLikeDoc {
  slug: string;
  userId: string;
  likedAt: Date;
}

const blogUserLikeSchema = new Schema<BlogUserLikeDoc>(
  {
    slug: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    likedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

blogUserLikeSchema.index({ userId: 1, slug: 1 }, { unique: true });

export const BlogUserLike =
  models.BlogUserLike || model<BlogUserLikeDoc>("BlogUserLike", blogUserLikeSchema);
