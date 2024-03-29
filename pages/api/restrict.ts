import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import authOptions from './auth/[...nextauth]';
import { updateCrushes, updateForbidden } from '../../database/controllers';
import { Session } from 'next-auth';
import { connect } from '../../database/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse<String[] | String>) {
    const session: Session | null = await unstable_getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send('Unauthorized');
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    await connect();

    const body = JSON.parse(req.body);
    const crushes = updateCrushes(session.user, body.crushes);
    const forbidden = updateForbidden(session.user, body.forbidden);
    const resp: String[] = await Promise.all([crushes, forbidden]);

    return res.status(200).json(resp);
}
