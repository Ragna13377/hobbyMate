'use server';
import prisma from '@shared/lib/prisma';
import { guardedFetch } from '@shared/api/helpers';
import { accountSchema, AccountSchemaProps, userSchema } from '@features/auth/schema';
import { cryptPassword } from '@features/auth/utils/cryptUtils';
import { SignUpSchemaResponse } from '@features/auth/components/SignUpForm/schema';

export const registerUser = async (formData: SignUpSchemaResponse) => {
	const { repeatPassword, hobbies, ...rest } = formData;
	if (rest.password !== repeatPassword) return;
	const user = await createUser(rest);
	if (user) {
		const res = await Promise.all([
			await createUserHobbies(hobbies, user.id),
			await createUserAccount({
				userId: user.id,
				type: 'credentials',
				provider: 'credentials',
				providerAccountId: user.id,
			}),
		]);
		if (res[0].length < 1) console.log('Hobbies not created');
		if (!res[1]) {
			await prisma.user.delete({ where: { id: user.id } });
			console.log('Account not created');
			return;
		}
	}
	return user;
};

export const createUser = async (
	formData: Omit<SignUpSchemaResponse, 'hobbies' | 'repeatPassword'>
) => {
	const { password, ...rest } = formData;
	const hashedPassword = await cryptPassword(password);
	return await guardedFetch({
		requestFn: async () =>
			prisma.user.create({
				data: {
					password: hashedPassword,
					...rest,
				},
			}),
		schema: userSchema,
		fromPrisma: true,
	});
};

export const createUserHobbies = async (hobbies: string[], userId: string) => {
	const hobbiesPromises = hobbies.map(async (hobbyName) => {
		const hobby = await prisma.hobby.upsert({
			where: { name: hobbyName },
			update: {},
			create: {
				name: hobbyName,
			},
		});

		return prisma.userHobby.create({
			data: {
				userId,
				hobbyId: hobby.id,
			},
		});
	});
	return await Promise.all(hobbiesPromises);
};

export const createUserAccount = async (account: Omit<AccountSchemaProps, 'id'>) =>
	guardedFetch({
		requestFn: async () =>
			prisma.account.create({
				data: {
					...account,
				},
			}),
		schema: accountSchema,
		fromPrisma: true,
	});
