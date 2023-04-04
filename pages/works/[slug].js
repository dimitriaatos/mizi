import styles from "../../styles/Work.module.css";
import { works } from "../../content";
import { labels } from "../../menu";
import { Paragraphs } from "../../renderers";
import EmbeddedMedia from "../../components/EmbeddedMedia";

export default function Work({ work }) {
  return (
    <>
      <h1 className={styles.title}>{work.title}</h1>
      <div className={styles.container}>
        <EmbeddedMedia
          link={work.embed || Object.values(work.documentation)[0]}
        />
        {Object.entries(labels).map(([key, label]) => {
          return (
            <div key={key}>
              <span className={styles.key}>{label}</span>: {work[key]}
            </div>
          );
        })}
        <div>
          <span className={styles.key}>Documentation: </span>
          {Object.entries(work.documentation).map(
            ([key, link], index, { length }) => {
              return (
                <span key={index}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    {key}
                  </a>
                  {length - 1 != index ? ", " : ""}
                </span>
              );
            }
          )}
        </div>
        {<Paragraphs content={work.description} />}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {work.images.map((path, index) => {
            return <img key={index} src={path} style={{ width: "20rem" }} />;
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {
      work: works.find((work) => work.slug == context.params.slug),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: works.map((work) => `/works/${work.slug}`),
    fallback: false,
  };
};
