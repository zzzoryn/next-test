import useSWR from 'swr';
import styles from '../components/Text.module.css';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const {data, error, isLoading} = useSWR('/api/user', fetcher);

  if (error) return <div className={styles.text}>ошибка загрузки</div>;
  if (isLoading) return <div className={styles.text}>загрузка...</div>;
  return <div className={styles.text}>привет, {data.name}!</div>;
}
