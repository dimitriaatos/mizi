export const Paragraphs = ({ content }) => {
  return content.map((paragraph, index) => (
    <p key={index} style={{ marginBottom: "0.5rem" }}>
      {paragraph}
    </p>
  ));
};
