import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
  query GetProducts {
    products(first: 6) {
      edges {
        node {
          id
          name
          thumbnail {
            url
          }
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;