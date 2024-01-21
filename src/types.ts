import { ObjectId } from 'mongodb';

export type LinkSlug = {
  _id: ObjectId;
  url: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
};
