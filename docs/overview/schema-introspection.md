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


- You can also run a full introspection request of the schema:

```
query IntrospectionQuery {
          __schema {
            queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
              ...FullType
        }
        directives {
              name
          description
          locations
          args {
                ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
          kind
      name
      description
      fields(includeDeprecated: true) {
            name
        description
        args {
              ...InputValue
        }
        type {
              ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields {
            ...InputValue
      }
      interfaces {
            ...TypeRef
      }
      enumValues(includeDeprecated: true) {
            name
        description
        isDeprecated
        deprecationReason
      }
      possibleTypes {
            ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
          name
      description
      type { ...TypeRef }
      defaultValue
    }

    fragment TypeRef on __Type {
          kind
      name
      ofType {
            kind
        name
        ofType {
              kind
          name
          ofType {
                kind
            name
            ofType {
                  kind
              name
              ofType {
                    kind
                name
                ofType {
                      kind
                  name
                  ofType {
                        kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
```

The results are in JSON, so we recommend pretty-printing them for easier reading and searching.

For more information about performing queries, see the guide "[How to query your first data](/docs/guides/how-to-query)".