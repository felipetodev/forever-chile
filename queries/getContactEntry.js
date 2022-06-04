export const GET_CONTACT_ENTRY = `
query GetLayoutPage($slug: String!) {
  contactPageCollection(where: {
    slug: $slug
  }, limit: 1) {
    items {
      title
      formMessage
      slug
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
