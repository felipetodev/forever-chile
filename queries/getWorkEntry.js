export const GET_WORK_ENTRY = `
  query GetLayoutPage($slug: String!) {
    layoutPageCollection(where: {
      slug: $slug
    }, limit: 1) {
      items {
        title
        slug
        description
        workVideosCollection {
          items {
            sys {
              id
            }
            title
            author
            category
            artDirection
            description
            url
          }
        }
      }
    }
  }
`
