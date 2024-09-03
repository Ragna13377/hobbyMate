import { Button } from '@shared/ui/Button';
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
import OauthAuthorization from 'src/entities/OauthDialog/components/OauthAuthorization';
import { AuthDialogUIProps, TAuthFields } from '@entities/OauthDialog/types';
import { useState } from 'react';
import style from './style.module.scss';

const OauthDialogUI = ({ form, onSubmit }: AuthDialogUIProps) => {
	const {
		formState: { errors },
		trigger,
	} = form;
	const [step, setStep] = useState(0);
	const handleNextStep = async () => {
		const validationFields: { [key: number]: (keyof TAuthFields)[] } = {
			0: ['username'],
			1: ['password', 'repeatPassword'],
			2: ['location', 'hobbies'],
		};
		if (step < 2) {
			const fieldsToValidate = validationFields[step];
			const validityResult = await Promise.all(fieldsToValidate.map((f) => trigger(f)));
			const allValid = validityResult.every((v) => v);
			if (allValid) setStep((s) => s + 1);
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='link'>Sign in</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Start your journey!</DialogTitle>
					<DialogDescription />
				</DialogHeader>
				<div>
					<Form {...form}>
						<form onSubmit={onSubmit}>
							<div className='flex flex-col gap-5'>
								{step === 0 && (
									<FormField
										control={form.control}
										name='username'
										render={({ field }) => (
											<FormItem>
												<FormLabel className='text-base'>
													{errors.username?.message ? errors.username?.message : 'Username'}
												</FormLabel>
												<FormControl>
													<Input placeholder='Username' {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
								)}
								{step === 1 && (
									<>
										<FormField
											control={form.control}
											name='password'
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														{errors.password?.message ? errors.password?.message : 'Password'}
													</FormLabel>
													<FormControl>
														<Input type='password' placeholder='Password' {...field} />
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name='repeatPassword'
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														{errors.repeatPassword?.message
															? errors.repeatPassword?.message
															: 'Repeat Password'}
													</FormLabel>
													<FormControl>
														<Input type='password' placeholder='Repeat Password' {...field} />
													</FormControl>
												</FormItem>
											)}
										/>
									</>
								)}
								{step === 2 && (
									<>
										<FormField
											control={form.control}
											name='location'
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														{errors.location?.message ? errors.location?.message : 'Location'}
													</FormLabel>
													<FormControl>
														<Input placeholder='Location' {...field} />
													</FormControl>
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name='hobbies'
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														{errors.hobbies?.message ? errors.hobbies?.message : 'Hobbies'}
													</FormLabel>
													<FormControl>
														<Input placeholder='Hobbies' {...field} />
													</FormControl>
												</FormItem>
											)}
										/>
									</>
								)}
								<Button
									onClick={handleNextStep}
									type={step < 2 ? 'button' : 'submit'}
									variant={'default'}
									size={'default'}
									className={style.button}
								>
									{step === 0 ? 'Get started' : 'Continue'}
								</Button>
								{step === 0 && (
									<>
										<div className='relative my-5 h-[2px] bg-muted-foreground'>
											<p className='absolute top-0 left-1/2 -translate-y-1/2 backdrop-blur-sm'>
												Or
											</p>
										</div>
										<OauthAuthorization />
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
