import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Work.module.css";

export default function About({ path }) {
  return (
    <>
      <h1 className={styles.title}>About MIZI</h1>
      <div>
        Georgios Mizithras aka "MIZI" is a musician, sound artist and creative
        programmer. He is active both as a composer and a performer in a range
        of fields, including acousmatic music, improvisation, sound art, music
        for theatrical plays, audiovisual installations and radio art. His
        current research revolves around the idea of “media rummaging”, the
        constant intuitive exploration of different playback, recording and
        transmission media, creating works based on the unique properties of
        different sound media. He's part of the KEDiMouRa Collective and the
        experimental music ensemble Trigger Happy. He's a curator and producer
        of the radio art internet platform loskop.radio. His radio works have
        been featured on the temporary art radio station "Radiophrenia".
        Notably, he has performed at “Irtijal '19” Festival (Beirut, 2019),
        “Borderline Festival” (Athens, 2019), “Rhubaba” Gallery (Edinburgh,
        2018), “Klingt Gut” Festival (Hamburg, 2017). <br /> He has studied at
        De Montfort University's Music Technology and Innovation department
        (Leicester), is a graduate of composition at the Music Studies
        department of the Ionian University and holds a Master's degree in
        Musicology: Music Technology from the National and Kapodistrian
        University of Athens. He’s currently a PhD student at the Music Studies
        department of the Ionian University.
      </div>
    </>
  );
}
