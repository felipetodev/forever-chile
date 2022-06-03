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
