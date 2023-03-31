import Head from "next/head";
import styles from "../styles/Work.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mizi</title>
      </Head>
      <h1 className={styles.title}>MIZI</h1>
      <img
        src="vinyl.svg"
        style={{
          width: "20rem",
          animation: "rotation 5s infinite linear",
          opacity: 0.5,
          // cursor: "pointer",
        }}
      />
    </>
  );
}
