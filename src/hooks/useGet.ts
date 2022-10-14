import useSWR from 'swr';
import { get } from '../utils';

const useGet = <T>(url) => useSWR<T>(url, get);

export default useGet;
