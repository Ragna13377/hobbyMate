'use client';
import React, { useEffect, useState } from 'react';
import { capitalize, toTitleCase } from '@shared/utils/stringUtils';
import { Button } from '@shared/ui/Button';
import ButtonWithImage from '@shared/ui/ButtonWithImage';
import { Input } from '@shared/ui/Input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@shared/ui/Form';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@shared/ui/Dialog';
import { AuthDialogUIProps } from '@entities/OauthDialog/types';
import {
	authFormSteps,
	defaultAuthValues as defaultValues,
	oauthButtons,
} from '@entities/OauthDialog/constants';
import { handleSignIn } from '@features/auth/model/oauth';
import style from './style.module.scss';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { authSchema, AuthSchemaProps } from '@entities/OauthDialog/shema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from '@shared/ui/Separator';
import { mockFetchCity } from '@features/auth/model/mocks/mockFetchCity';

const OauthDialogUI = ({}: AuthDialogUIProps) => {
	const [step, setStep] = useState(0);
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
	const {
		formState: { errors },
	} = form;
	useEffect(() => {
		mockFetchCity().then((data) => form.setValue('location', data?.city || ''));
	}, [form]);
	useEffect(() => {
		form.setFocus(authFormSteps[step].inputFields[0].name, { shouldSelect: true });
	}, [form, step]);
	const handleNextStep = async () => {
		if (step < authFormSteps.length) {
			const fieldsToValidate = authFormSteps[step].inputFields;
			const validityResult = await Promise.all(
				fieldsToValidate.map(({ name }) => form.trigger(name))
			);
			const allValid = validityResult.every((v) => v);
			if (allValid) {
				setStep((s) => s + 1);
			}
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='link' size='clear'>
					Sign in
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className='gap-3.5'>
					<DialogTitle>Start your journey!</DialogTitle>
					<DialogDescription className='text-accent'>
						{authFormSteps[step].description}
					</DialogDescription>
				</DialogHeader>
				<div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit, onError)}>
							<div className='flex flex-col gap-5'>
								{authFormSteps[step].inputFields.map(({ name, type, placeholder }) => (
									<FormField
										key={name}
										control={form.control}
										name={name}
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-base'>
													{errors[name]?.message ? errors[name]?.message : toTitleCase(name)}
												</FormLabel>
												<FormControl>
													<Input
														type={type}
														placeholder={placeholder ?? toTitleCase(name)}
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>
								))}
								<Button
									onClick={handleNextStep}
									type={step < authFormSteps.length ? 'button' : 'submit'}
									className={style.button}
								>
									{authFormSteps[step].buttonText ?? 'Continue'}
								</Button>
								{step === 0 && (
									<>
										<Separator>Or</Separator>
										<div className='flex flex-col gap-5'>
											{oauthButtons.map(({ image, provider }) => (
												<ButtonWithImage
													key={provider}
													image={image}
													imageSize={30}
													onClick={() => handleSignIn(provider)}
												>
													Start with {capitalize(provider)}
												</ButtonWithImage>
											))}
										</div>
									</>
								)}
							</div>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default OauthDialogUI;
