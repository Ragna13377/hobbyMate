'use server';
import prisma from '@shared/lib/prisma';
import { guardedFetch } from '@shared/api/helpers';
import { AccountSchemaProps, userSchema } from '@features/auth/schema';
import { cryptPassword } from '@features/auth/utils/cryptUtils';
import { SignUpSchemaResponse } from '@features/auth/components/SignUpForm/schema';

export const registerUser = async (formData: SignUpSchemaResponse) => {
	const { repeatPassword, hobbies, ...rest } = formData;
	if (rest.password !== repeatPassword) return null;
	const user = await guardedFetch({
		requestFn: async () => createUser(rest),
		schema: userSchema,
		fromPrisma: true,
	});
	// if (!user || !user.id) return null
	// const userHobbies = await createUserHobbies(hobbies, user.id);
	// const userAccount = await createUserAccount({
	// 	userId: user.id,
	// 	type: 'credentials',
	// 	provider: 'credentials',
	// 	providerAccountId: '',
	// 	access_token: '',
	// 	refresh_token: '',
	// 	expires_at: 0,
	// 	token_type: '',
	// 	scope: '',
	// 	id_token: '',
	// 	session_state: '',
	// })
	return user;
};

export const createUser = async (
	formData: Omit<SignUpSchemaResponse, 'hobbies' | 'repeatPassword'>
) => {
	const { password, ...rest } = formData;
	const hashedPassword = await cryptPassword(password);
	return prisma.user.create({
		data: {
			password: hashedPassword,
			...rest,
		},
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

		await prisma.userHobby.create({
			data: {
				userId,
				hobbyId: hobby.id,
			},
		});
	});
	return await Promise.all(hobbiesPromises);
};

export const createUserAccount = async (account: AccountSchemaProps) =>
	prisma.account.create({
		data: {
			...account,
		},
	});
