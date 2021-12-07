## Guide to update a link with our API

Actually, we don't expose our GraphQL endpoint for update link. We are working hard to allow it. In the meantime, you can use this endpoint to do it.


<div style={{border: '2px solid red', borderRadius: '4px', padding: '16px', marginBottom: '16px'}}>
  <p>
  If you want to make an official integration, feel free to reach us on our live chat. You can find our chat on the website or within the app! 😊
  </p>
</div>


**HTTP Request**
PUT https://api.switchy.io/v1/links/:LINK_ID


**Minimal curl example**
```
curl 'https://api.switchy.io/v1/links/:LINK_ID' \  
  -X 'PUT' \
  -H 'Content-Type: application/json' \  
  -H 'Api-Authorization: YOUR_TOKEN_HERE'  
  -d \  
  {  
    "link": {  
      "title": "",  
      "description": "",  
      "url": "https://example.com/",  
      "pixels": [],  
      "showGDPR": false,  
      "extraOptionsLinkRotator": [],  
      "extraOptionsGeolocations": [],  
      "tags": []  
    }  
  }  
  --compressed
```
**More complex curl example**
```
curl 'https://api.switchy.io/v1/links/:LINK_ID' \  
  -X 'PUT' \
  -H 'Content-Type: application/json' \  
  -H 'Api-Authorization: YOUR_TOKEN_HERE'  
  -d \  
  {  
    "link": {  
      "title": "My title",  
      "description": "My description",  
      "url": "https://example.com/",  
      "image": "https://example.com/my.jpg",  
      "pixels": [  
        {  
          "createdAt": "2021-01-30T08:03:34.568+00:00",  
          "id": "pixel id",  
          "platform": "twitter",  
          "title": "pixel title",  
          "value": "tixel value",  
          "workspaceId": 5972  
        }  
      ],  
      "showGDPR": true,  
      "extraOptionsGeolocations": [  
        {  
          "url": "https://github.com",  
          "value": "AO"  
        }  
      ],  
      "tags": [  
        "mytag"  
      ],  
      "folderId": 10313,  
      "favicon": "https://example.com/favicon_144x144.png",  
      "linkExpiration": {  
        "enable": true,  
        "timezone": 4,  
        "url": "http://google.com",  
        "end": "2021-12-29T10:03:51.421Z"  
      },  
      "deepLinkingEnable": true,  
      "note": "My Notes",  
      "passwordProtect": {  
        "enable": true,  
        "password": "123"  
      }
    }  
  }  
  --compressed
```

### JSON Parameters

| Parameter | Description      |  Type | Default value |
| -------- | --------- | --------- | --------- |
| link        | Link to create for the redirection | Link     | no default value   |
| autofill  | Server will add automatically open graph metadata  | boolean | true |




### Link type ###

| Parameter | Description      |  Type | Default value |
| -------- | --------- | --------- | --------- |
| url | Url to redirect | String | |
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
| note| Some notes visible in admin panel | String | null | 
| deepLinkingEnable| Enable Deeplink if it is possible | Boolean| false| 
| linkScripts| List of script wihch will be added to a link if linkScriptEnable is true | Int[]| null | 
| linkScriptEnable| Enable linkScripts connected to a link | Boolean| false| 
| masking| Enable link masking | Boolean| false|
| linkExpiration| Set up date then link will be expiried and redirect endpoint | LinkExpiration | null | 
| passwordProtect| Show password protection popup | PasswordProtect| null | 



### Pixel type 

| Parameter | Description      |  Type | Default value |
| -------- | --------- | --------- | --------- |
| platform | **Mandatory** Which platform belongs the pixel | Platform |  |
| value | **Mandatory** Value of the pixel | String |  |
| id | It's the id of your pixel in the database | UUID | randomId() |
| workspaceId |  | integer |  |


### LinkExpiration type 

| Parameter | Description      |  Type | Default value |
| -------- | --------- | --------- | --------- |
| enable| **Mandatory** Is link expiration enabled | Boolean |  |
| end | **Mandatory** link exparation end date - exaxmple: 2021-11-11T06:59:01.499Z | String |  |
| url | **Mandatory** Url the link will be redirected then link become expired | UUID | randomId() |
| timezone | **Mandatory** timezone  | Int |  |

### PasswordProtect type

| Parameter | Description      |  Type | Default value |
| -------- | --------- | --------- | --------- |
| enable | **Mandatory** Is password protection enabled | Boolean |  |
| password| **Mandatory** Password of protected link | String |  |

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
Rate limits: 10.000 links/day; 1.000 links/hour max. For any higher limits needs, please reach us on our chat.
