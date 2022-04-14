export const GET_ABOUT_ENTRY = `
query GetLayoutPage($slug: String!) {
  aboutPageCollection(where: {
    slug: $slug
  }, limit: 1) {
    items {
      title
      slug
      mainTitle
      description
      videoBanner {
        url
        title
      }
      videoBannerDescription
      blueBannerTitle
      teamCollection {
        items {
          title
          image {
            title
            url
          }
          fullName
          discipline
          description
          sys {
            id
          }
          timelineCollection {
            items {
              sys {
                id
              }
              name
              year
            }
          }
        }
      }
    }
  }
}
`
