import { TFetchDataFunction } from '@entities/Autocomplete/types';
import { Path } from 'react-hook-form';

export type FetchFunctionMap<T> = Partial<Record<Path<T>, TFetchDataFunction>>;
