---
title: Authentication with GraphQL and the REST API
sidebar_label: Authentication
---


To communicate with the GraphQL  and the REST server, you'll need a bearer token.

Each token is dedicated by workspace, so with one token, you can only access to the corresponding workspace data.

### How to get a token?

You just have to follow this steps:

1. Login to [Switchy.io](https://switchy.io/)
1. Go to the workspace that you want to use with the API
1. Go into the settings page then select the **integrations** tab
1. Click over the button **Generate a token**


### How to use the token?
You just have to provide for each request an **Api-Authorization**. 

For example with curl

```bash
curl -H "Api-Authorization: your-token" -X POST -d " \
 { \
   \"query\": \"query {  workspaces {     companyName     createdDate     id     name   }}\" \
 } \
" https://graphql.switchy.io/v1
```

