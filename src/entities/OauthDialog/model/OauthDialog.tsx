'use client';
import React from 'react';
import OauthDialogUI from '@entities/OauthDialog/ui/OauthDialogUI';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { authSchema, AuthSchemaProps } from '@entities/OauthDialog/shema';
import { defaultAuthValues as defaultValues } from '@entities/OauthDialog/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { getCity, getCityMock } from '@features/ipgeolocation/services/getCity';

export const OauthDialog = async () => {
	// getCityMock().then(data => console.log(data));
	// getCity().then(data => console.log(data));
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
