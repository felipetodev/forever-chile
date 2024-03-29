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
      collectiveBannerCollection {
        items {
          sys {
            id
          }
          title
          image {
            title
            url
          }
        }
      }
      teamCollection {
        items {
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
      categoriesColumn1Collection {
        items {
          sys {
            id
          }
          title
          image {
            title
            url
          }
        }
      }
      categoriesColumn2Collection {
        items {
          sys {
            id
          }
          title
          image {
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
        imageRowOne {
          imageUrl
          image {
            title
            url
          }
        }
        imageRowTwo {
          imageUrl
          image {
            title
            url
          }
        }
      }
    }
  }
}
`
