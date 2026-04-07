import { notFound } from 'next/navigation';

export async function fetchOrNotFound<T>(fetcher: () => Promise<T | null>): Promise<T> {
	const data = await fetcher();
	if (!data) notFound();
	return data;
}
