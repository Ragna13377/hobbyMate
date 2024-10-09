import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@shared/ui/Dialog';
import { Button } from '@shared/ui/Button';
import { DialogContainerUIProps } from '../types';

const DialogContainerUI = ({
    open,
    setOpen,
    title,
    trigger: { text, variant = 'default', size = 'default' },
    children
  }: DialogContainerUIProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size}>
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='h-min'>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogContainerUI;