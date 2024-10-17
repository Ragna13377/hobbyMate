'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useLocation } from '@shared/hooks/useLocation';
import UserAuthStatusUI from '../ui/UserAuthStatusUI';

export const UserAuthStatus = () => {
	const { status } = useSession();
	useLocation();
	return <UserAuthStatusUI status={status} />;
};
