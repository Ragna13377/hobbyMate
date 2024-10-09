'use client';
import React from 'react';
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { Autocomplete } from '@entities/Autocomplete';
import { BadgeProvider } from '@shared/providers/BadgeProvider';
import { AutocompleteProps } from '@entities/Autocomplete/types';

export type AutocompleteFieldProps<T extends FieldValues>  = AutocompleteProps & {
  field: ControllerRenderProps<T, Path<T>>;
  hasBadges?: boolean;
}

const AutocompleteField = <T extends FieldValues>({hasBadges, field, ...rest}: AutocompleteFieldProps<T>) => {
  const commonProps = {
    ...rest,
    ref: field.ref,
    formBlur: field.onBlur,
    formChange: field.onChange
  }
  return hasBadges ? (
    <BadgeProvider defaultValues={field.value}>
      <Autocomplete {...commonProps} initialValue={field.value} />
    </BadgeProvider>
  ) : (
    <Autocomplete {...commonProps} initialValue={field.value} />
  )
};

export default AutocompleteField;