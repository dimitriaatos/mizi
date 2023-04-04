const embedMap = {
  "www.youtube.com": (url) =>
    `https://www.youtube-nocookie.com/embed/${url.searchParams.get("v")}`,
  "vimeo.com": (url) =>
    `https://player.vimeo.com/video${url.pathname}?h=6c62652a1b&byline=0&portrait=0`,
  "soundcloud.com": (url) =>
    `https://w.soundcloud.com/player/?${new URLSearchParams({
      url: url.href,
      color: "7c7973",
      auto_play: false,
      hide_related: false,
      show_comments: true,
      show_teaser: true,
    }).toString()}`,
  "bandcamp.com": (url) => url,
};

const getIframeSrc = (link) => {
  const url = new URL(link);
  return [embedMap?.[url.hostname]?.(url), url];
};

const EmbeddedMedia = ({ link }) => {
  const [embedLink, url] = getIframeSrc(link);
  return (
    embedLink && (
      <iframe
        width="100%"
        style={{
          ...(url.hostname !== "bandcamp.com" ? { aspectRatio: "16 / 9" } : {}),
          userSelect: "none",
          border: "none",
        }}
        src={embedLink}
        allow={[
          "accelerometer",
          "autoplay",
          "clipboard-write",
          "encrypted-media",
          "gyroscope",
          "picture-in-picture",
          "fullscreen",
        ].join("; ")}
      />
    )
  );
};

export default EmbeddedMedia;
