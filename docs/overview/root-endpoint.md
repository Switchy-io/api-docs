---
title: Communicating with GraphQL
sidebar_label: Root endpoint
---

Because GraphQL operations consist of multiline JSON, Switchy recommends using the Explorer to make GraphQL calls. You can also use cURL or any other HTTP-speaking library.

In REST, HTTP verbs determine the operation performed. In GraphQL, you'll provide a JSON-encoded body whether you're performing a query or a mutation, so the HTTP verb is POST. The exception is an introspection query, which is a simple GET to the endpoint.

To query GraphQL using cURL, make a POST request with a JSON payload. The payload must contain a string called query:

```javascript
curl -H "Api-Authorization: bearer yourtoken" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" https://graphql.switchy.io/v1/graphql
```


export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.4rem',
    }}> {children} </span> );


**Note** The string value of "query" must escape newline characters or the schema will not parse it correctly. For the POST body, use outer double quotes and escaped inner double quotes.

