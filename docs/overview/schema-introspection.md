---
title: Discovering the GraphQL API
sidebar_label: Schema instrospection
---

GraphQL is introspective. This means you can query a GraphQL schema for details about itself.

- Query __schema to list all types defined in the schema and get details about each:

```
query {
  __schema {
    types {
      name
      kind
      description
      fields {
        name
      }
    }
  }
}
```


- Query __type to get details about any type:

```
query {
  __type(name: "links") {
    name
    kind
    description
    fields {
      name
    }
  }
}
```


- You can also run an introspection query of the schema via a GET request:

```
curl -H "Api-Authorization: your-token" https://graphql.switchy.io/v1
```

The results are in JSON, so we recommend pretty-printing them for easier reading and searching.

For more information about performing queries, see the guide "[How to query your first data](/docs/guides/how-to-query)".