export const GET_WORK_ENTRY = `
  query GetLayoutPage($slug: String!) {
    workPageCollection(where: {
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
            client
            category
            discipline
            vimeoEmbedUrl
            description
            workImage {
              sys {
                id
              }
              url
            }
            pdf {
              title
              url
            }
          }
        }
        footer {
          copyright
          email
          primaryNumber
          primaryAddress
          primaryGoogleAddressUrl
          secondaryNumber
          secondaryAddress
          secondaryGoogleAddressUrl
        }
      }
    }
  }
`
