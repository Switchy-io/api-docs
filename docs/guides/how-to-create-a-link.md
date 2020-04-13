---
id: how-to-create-a-link
title: How to create a link?
---

## Guide to create a link with our API

Actually, we don't expose our GraphQL endpoint for creating link. We are working hard to allow it. In the meantime, you can use this endpoint to do it.


**HTTP Request**
POST https://api.switchy.io/v1/links/create



### JSON Parameters

| Parameter | Description      |  Type | Default value |
| -------- | --------- | --------- | --------- |
| link        | Link to create for the redirection | Link     | no default value   |
| autofill  | Server will add automatically open graph metadata, no custom metadata  | boolean | false |




### Link type ###

| Parameter | Description      |  Type | Default value |
| -------- | --------- | --------- | --------- |
| url | **Mandatory** Url to redirect | String | |
| domain | Domain name of the link | String | hi.switchy.io |
| id | Alias slug, it's the id of your link (domainName/id)| String | randomId() |
| -------- | --------- | --------- | --------- |
| title | Used for the open graph title | String | null (can be autofill with the autofill parameter) |
| description | Used for the open graph description | String | null (can be autofill with the autofill parameter)|
| image | Used for the open graph description, must be an url | String | null (can be autofill with the autofill parameter) |
| -------- | --------- | --------- | --------- |
| favicon | | String | null |
| extraOptionsGeolocations | | jsonb | [] |
| extraOptionsLinkRotator | | jsonb | [] |
| folderId | | Int | null |
| pixels | Used for pixelling your short link and retargeting purpose | Pixel[] | [] |
| showGDPR | Display the GDPR popup if pixels are presents | Boolean | false |
| tags | Used for searching and sorting in the dahsboard | String[] | [] |
| -------- | --------- | --------- | --------- |
| createdDate |  | timestamptz | now() |
| removed | | timestamptz | null | 


### Pixel type 

| Parameter | Description      |  Type | Default value |
| -------- | --------- | --------- | --------- |
| platform | **Mandatory** Which platform belongs the pixel | Platform |  |
| value | **Mandatory** Value of the pixel | String |  |
| id | It's the id of your pixel in the database | UUID | randomId() |
| workspaceId |  | integer |  |


### Platform type

```
type Platform =
  | 'linkedin'
  | 'facebook'
  | 'gtm'
  | 'quora'
  | 'pinterest'
  | 'twitter'
  | 'ga'
  | 'bing'
  | 'nexus'
  | 'adroll'
  | 'adwords';
```