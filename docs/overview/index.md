---
title: Overview
sidebar_label: Introduction
---

We have a GraphQL API for queries and some API Rest endpoints for few mutations.

Here are some quick links to get you up and running with the GraphQL API:

- [Authentication](/docs/overview/authentication)
- [Root endpoint](/docs/overview/root-endpoint)
- [Schema introspection](/docs/overview/schema-introspection)


## About GraphQL

The GraphQL data query language is:

- A specification. The spec determines the validity of the schema on the API server. The schema determines the validity of client calls.

- Strongly typed. The schema defines an API's type system and all object relationships.

- Introspective. A client can query the schema for details about the schema.

- Hierarchical. The shape of a GraphQL call mirrors the shape of the JSON data it returns. Nested fields let you query for and receive only the data you specify in a single round trip.

- An application layer. GraphQL is not a storage model or a database query language. The graph refers to graph structures defined in the schema, where nodes define objects and edges define relationships between objects. The API traverses and returns application data based on the schema definitions, independent of how the data is stored.


## Why Switchy is using GraphQL

Switchy chose GraphQL for our API because it offers significantly more flexibility for our integrators. The ability to define precisely the data you want—and only the data you want—is a powerful advantage over REST API endpoints. GraphQL lets you replace multiple REST requests with a single call to fetch the data you specify.


## About the GraphQL schema reference

The docs in the sidebar are generated from the Switchy GraphQL schema. All calls are validated and executed against the schema. Use these docs to find out what data you can call:

- Allowed operations: **queries**.

- Schema-defined types: **scalars, objects, enums, interfaces, unions, and input objects**.


For other information, such as authentication and rate limit details, check out the guides.

## Requesting support

For questions, bug reports, and discussions about Switchy Apps, and API development, feel free to reach us on our live chat. You can find our chat on the website or within the app! 😊

Consider reaching out directly using the live chat for:
- guaranteed response from Switchy staff
- support requests involving sensitive data - or private concerns
- feature requests
- feedback about Switchy products
