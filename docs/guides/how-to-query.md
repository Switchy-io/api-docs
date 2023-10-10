---
id: how-to-query
title: How to query your first data?
sidebar_label: How to query your first data?
---


## Know what you query

Basically, you can just get what you can query with the [introspection request.](/docs/overview/schema-introspection)

A good way to play with our graphQL API is to try it with [Altair GraphQL Client](https://altair.sirmuel.design/).

![Altair software](https://cdn-std.droplr.net/files/acc_762311/SoragR)


## Tuto to use graphQL API with Altair GraphQL Client 

1. Download the software at [https://altair.sirmuel.design/](https://altair.sirmuel.design/)

2. Set the corresponding configuration :
- Setup the graphQL url (**https://graphql.switchy.io/v1/graphql**)
- Put the **Api-Authorization** header and put your corresponding **token**.
- Reload the docs, to have the graphQL schema corresponding to your access.


![Setup your header](https://cdn-std.droplr.net/files/acc_762311/AYLLaN)

3. **(Optional but awesome)**, In the settings part, you can activate the experimental mode and add the **altair-graphql-plugin-graphql-explorer** plugin. It will allow you to write your graphQL queries and mutations with few clicks.


![Graphql-explorer](https://cdn-std.droplr.net/files/acc_762311/vfaEzp)


## Get some datas corresponding to the token with one single query

```graphql
query SomeDatas {
  workspaces {
    companyName
    activateRgpdEverywhere
    createdDate
    id
    name
  }
  domains(where: {removedDate: {_is_null: true}}) {
    createdDate
    name
  }
}

```


