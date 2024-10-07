import { TFetchDataFunction } from '@entities/AutocompleteSearch/types';
import { Path } from 'react-hook-form';

export type FetchFunctionMap<T> = Partial<Record<Path<T>, TFetchDataFunction>>;
