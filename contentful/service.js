const contentful = async (slug, query) => {
  try {
    const result = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            slug,
          },
        }),
      }
    );
    const { data } = await result.json();
    const [pageContainer] = data.layoutPageCollection.items;
    return pageContainer
  } catch (e) {
    console.error(e);
    return {};
  }
}

module.exports = { contentful }
