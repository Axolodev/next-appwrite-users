import useSWR from 'swr';
import { APIResponses } from '../types';
import { get } from '../utils';

const useGet = <T>(url) => useSWR<T | APIResponses.Error>(url, get);

export default useGet;
