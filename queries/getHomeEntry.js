export const GET_HOME_ENTRY = `
  query GetLayoutPage($slug: String!) {
    layoutPageCollection(where: {
      slug: $slug
    }, limit: 1) {
      items {
        title
        slug
        description
        videosCollection {
          items {
            title
            filmCategory
            filmName
            filmDescription
            video {
              title
              url
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`
