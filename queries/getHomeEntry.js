export const GET_HOME_ENTRY = `
  query GetLayoutPage($slug: String!) {
    homePageCollection(where: {
      slug: $slug
    }, limit: 1) {
      items {
        title
        slug
        description
        homeVideosCollection {
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
