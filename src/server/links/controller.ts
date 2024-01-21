import { authOptions } from '@/auth';
import clientPromise from '@/lib/mongo';
import { LinkSlug } from '@/types';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';

export const getAllLinks = async () => {
  try {
    const session = await getServerSession(authOptions);
    const client = await clientPromise;
    const collection = client.db('shortlinkdb').collection('links');
    const results = (await collection
      .find({ userId: new ObjectId(session?.user.id) })
      .toArray()) as LinkSlug[];

    return results;
  } catch (error) {
    throw new Error('Error obteniendo links!');
  }
};
export const getLinkByslug = async (slug: string) => {
  try {
    const client = await clientPromise;
    const collection = client.db('shortlinkdb').collection('links');

    const result = (await collection.findOne({
      slug: slug,
    })) as LinkSlug;

    return result;
  } catch (error) {
    throw new Error('Error obteniendo links!');
  }
};

export const createlinkToDb = async (payload: {
  slug: string;
  url: string;
  description?: string | null | undefined;
}) => {
  try {
    const session = await getServerSession(authOptions);
    const client = await clientPromise;
    const collection = client.db('shortlinkdb').collection('links');

    await collection.insertOne({
      ...payload,
      userId: new ObjectId(session?.user.id),
    });
  } catch (error) {
    throw new Error('Error creando link!');
  }
};
