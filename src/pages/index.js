import styles from '../components/Text.module.css';

export default function Index({data}) {
  return <div className={styles.text}>привет, {data.name}!</div>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://master--creative-nasturtium-9bf5e9.netlify.app/api/user`);
  const data = await res.json();

  // Pass data to the page via props
  return {props: {data}};
}
