import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const DialogContext = createContext<
	{ setIsOpen: Dispatch<SetStateAction<boolean>> } | undefined
>(undefined);
export const useDialogContext = () => {
	const context = useContext(DialogContext);
	if (!context) {
		throw new Error('useDialogContext must be used within DialogProvider');
	}
	return context;
};
