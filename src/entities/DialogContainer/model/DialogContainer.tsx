'use client';
import React, { useState } from 'react';
import { DialogContainerProps } from '@entities/DialogContainer/types';
import { DialogContext } from '../hooks/useDialogContext';
import DialogContainerUI from '../ui/DialogContainerUI';

export const DialogContainer = (props: DialogContainerProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<DialogContext.Provider value={{ setIsOpen }}>
			<DialogContainerUI open={isOpen} setOpen={setIsOpen} {...props} />
		</DialogContext.Provider>
	);
};
