import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { authSchema, AuthSchemaProps } from '@entities/OauthDialog/shema';
import { authFormSteps, defaultAuthValues as defaultValues } from '@entities/OauthDialog/constants';
import OauthDialogUI from '@entities/OauthDialog/ui/OauthDialogUI';
import { mockFetchCity } from '@features/auth/model/mocks/mockFetchCity';
import { fetchCity } from '@features/auth/model/fetchCity';
import { TAuthStep } from '@entities/OauthDialog/types';

export const OauthDialog = async () => {
	// fetchCity().then((data) => console.log(data));
	// mockFetchCity().then((data) => console.log(data));
	return (
	<OauthDialogUI
		// form={form}
		// onSubmit={form.handleSubmit(onSubmit, onError)}
	/>
	);
};
// if (typeof window === 'undefined') {
// 	console.log('Компонент отрендерен на сервере');
// } else {
// 	console.log('Компонент отрендерен на клиенте');
// }
