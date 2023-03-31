import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Work.module.css";
import { bio } from "../content";
import { Paragraphs } from "../renderers";

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
