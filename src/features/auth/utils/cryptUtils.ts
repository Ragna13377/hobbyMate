'use server';

import bcrypt from 'bcrypt';
import { saltRounds } from '@features/auth/constants';

export const cryptPassword = async (password: string) => await bcrypt.hash(password, saltRounds);

export const comparePassword = async (password: string, hash: string) =>
	await bcrypt.compare(password, hash);
