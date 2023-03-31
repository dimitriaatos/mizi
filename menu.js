import works from "./works";

const menu = [
  ...works.reduce((categories, work) => {
    const { slug, title } = work;
    let index = categories.findIndex((el) => el?.title == work.category);
    if (index == -1) {
      index =
        categories.push({
          title: work.category,
          children: [],
        }) - 1;
    }
    categories[index].children.push({
      slug,
      title,
    });
    return categories;
  }, []),
  {
    title: "About",
    slug: "about",
  },
];

export const labels = {
	year: 'Production Year',
	release: 'Release',
	medium: 'Medium',
}

export default menu;
