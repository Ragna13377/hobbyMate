import { Path } from 'react-hook-form';
import { TFetchDataFunction } from '@shared/types';

export type FetchFunctionMap<T> = Partial<Record<Path<T>, TFetchDataFunction>>;
