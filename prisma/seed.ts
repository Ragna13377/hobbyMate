import { PrismaClient } from '@prisma/client';
import countries from './seeds/countrySeed.json';
import hobbies from './seeds/hobbySeed.json';
import news from './seeds/newsSeed.json';

const prisma = new PrismaClient();
const countrySeed = async () => {
	await Promise.all([
		prisma.country.createMany({ data: countries }),
		prisma.hobby.createMany({ data: hobbies }),
		prisma.news.createMany({ data: news }),
	]);
};
countrySeed()
	.catch((e) => console.log(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
