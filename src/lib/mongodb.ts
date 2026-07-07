import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ?? process.env.mongodb_Uri;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || "hnx-technologies";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const globalCache = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cache: MongooseCache = globalCache.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!globalCache.mongooseCache) {
  globalCache.mongooseCache = cache;
}

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable.");
  }

  if (
    !MONGODB_URI.startsWith("mongodb://") &&
    !MONGODB_URI.startsWith("mongodb+srv://")
  ) {
    throw new Error(
      'Invalid MONGODB_URI. It must start with "mongodb://" or "mongodb+srv://".'
    );
  }

  if (cache.conn) {
    return cache.conn;
  }

  try {
    if (!cache.promise) {
      cache.promise = mongoose.connect(MONGODB_URI, {
        dbName: MONGODB_DB_NAME,
        serverSelectionTimeoutMS: 15000,
      });
    }

    cache.conn = await cache.promise;
    return cache.conn;
  } catch (error) {
    cache.conn = null;
    cache.promise = null;
    throw error;
  }
}