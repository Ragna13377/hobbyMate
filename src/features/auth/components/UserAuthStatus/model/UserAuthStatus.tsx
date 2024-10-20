'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useLocation } from '@shared/hooks/useLocation';
import UserAuthStatusUI from '../ui/UserAuthStatusUI';
import { AuthFormType } from '../types';

export const UserAuthStatus = () => {
	const { status } = useSession();
	const [formType, setFormType] = useState<AuthFormType>('Sign In');
	const handleFormChange = (type: AuthFormType) => setFormType(type);
	useLocation();
	return (
		<UserAuthStatusUI status={status} currentForm={formType} handleFormChange={handleFormChange} />
	);
};
