'use client';
import React from 'react';
import OauthDialogUI from '@entities/OauthDialog/ui/OauthDialogUI';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { authSchema, AuthSchemaProps } from '@entities/OauthDialog/shema';
import { defaultAuthValues as defaultValues } from '@entities/OauthDialog/constants';
import { zodResolver } from '@hookform/resolvers/zod';

export const OauthDialog = () => {
	// const mockApiResponse = JSON.stringify({
	// 	city: 'London',
	// });
	// fetch('https://api.ipgeolocation.io/ipgeo?apiKey=6dd9d4ffe70243d2866bf1dcb68438bf&fields=city')
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));
	// const fetchCity = async () =>
	// 	new Promise((resolve) => setTimeout(() => resolve(mockApiResponse), 1000));
	// fetchCity()
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));
	const form = useForm<AuthSchemaProps>({
		defaultValues,
		resolver: zodResolver(authSchema),
	});
	const onSubmit: SubmitHandler<AuthSchemaProps> = () => {
		try {
			form.clearErrors('root');
			console.log('success');
		} catch (err) {
			console.log(err);
			form.setError('root', { message: 'Something went wrong' });
		}
	};
	const onError: SubmitErrorHandler<AuthSchemaProps> = (error) =>
		console.log('Error sending', error);
	return <OauthDialogUI form={form} onSubmit={form.handleSubmit(onSubmit, onError)} />;
};
