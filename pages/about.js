import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Work.module.css";
import { bio } from "../js/content";
import { Paragraphs } from "../js/renderers";

export default function About({ path }) {
  return (
    <>
      <h1 className={styles.title}>About MIZI</h1>
      <div>
        <Paragraphs content={bio} />
      </div>
    </>
  );
}
