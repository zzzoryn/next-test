import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const {data, error, isLoading} = useSWR('/api/user', fetcher);

  if (error) return <div>ошибка загрузки</div>;
  if (isLoading) return <div>загрузка...</div>;
  return <div>привет, {data.name}!</div>;
}
