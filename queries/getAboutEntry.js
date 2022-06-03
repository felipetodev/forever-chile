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
        logoImage1 {
          url
          title
        }
        logoImage2 {
          url
          title
        }
      }
    }
  }
}
`
