import gql from 'graph-tag'

export const ALL_POSTS = gql`

query {
  posts {
    id
    title
    author
  }
}

`

