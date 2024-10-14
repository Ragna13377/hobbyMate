'use server';
import prisma from '@shared/lib/prisma';
import { mockFetchLocationByIp } from '@features/auth/model/mocks/mockFetchLocationByIp';
import { fetchLocationByIp } from '@features/auth/model/fetchLocationByIp';
import { accountSchema, AccountSchemaProps, SignUpSchemaProps } from './schema';
import { cryptPassword } from '@features/auth/utils/cryptUtils';

export const getCityByIp = async () =>
	process.env.NODE_ENV === 'development'
		? await mockFetchLocationByIp()
		: await fetchLocationByIp();

export const registerUser = async (formData: SignUpSchemaProps) => {
	const { password, repeatPassword, hobbies, ...rest } = formData;
	const hashedPassword = await cryptPassword(password);
	const user = await prisma.user.create({
		data: {
			password: hashedPassword,
			...rest,
		},
	});
	// const hobbiesPromises = hobbies.map(async (hobbyName) => {
	// 	const hobby = await prisma.hobby.upsert({
	// 		where: { name: hobbyName },
	// 		update: {},
	// 		create: {
	// 			name: hobbyName,
	// 		},
	// 	});
	//
	// 	await prisma.userHobby.create({
	// 		data: {
	// 			userId: user.id,
	// 			hobbyId: hobby.id,
	// 		},
	// 	});
	// });
	// await Promise.all(hobbiesPromises);
	return user;
};

// export const registerUserAccount = async (account: AccountSchemaProps) => {
// 	const validateAccount = accountSchema.safeParse(account);
// 	if(validateAccount)
// 	await prisma.account.create(account)
// }