---
id: how-to-update-a-link
title: How to update a link?
sidebar_label: How to update a link?
---


This is the only one mutation available throught our GraphQL API. 

Basically, our link type is of this form


```graphql
# columns and relationships of "links"
type links {
  createdDate: timestamptz
  description: String
  domain: String!
  extraOptionsGeolocations(
    # JSON select path
    path: String
  ): jsonb
  extraOptionsLinkRotator(
    # JSON select path
    path: String
  ): jsonb
  favicon: String
  folderId: Int
  id: String!
  image: String
  pixels(
    # JSON select path
    path: String
  ): jsonb
  removed: timestamptz
  showGDPR: Boolean
  smartpage(
    # JSON select path
    path: String
  ): jsonb

  smartpageUniq: Int
  tags(
    # JSON select path
    path: String
  ): jsonb
  title: String
  uniq: Int!
  url: String
  userUid: String!

  # An aggregated array relationship
  workspaceId: Int
}
```



The mutation to update the slug of an existing link can be like this:

```graphql
mutation updateSlug($domain: String!, $slug: String, $newSlug: String!) {
  update_links(where: {domain: {_eq: $domain}, id: {_eq: $slug}}, _set: {id: $newSlug}) {
    returning {
      domain
      favicon
      folderId
      id
      image
      url
      workspaceId
    }
  }
}
```


![Update the link inside GraphiQL](https://cdn-std.droplr.net/files/acc_762311/7j6XV5)
