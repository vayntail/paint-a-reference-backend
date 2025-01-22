# Paint-A-Reference REST API
This is the backend API database for my project. It contains four models: Users, Comments, Refs, Studies. It also includes fetching a third-party api from [imgbb](https://imgbb.com/) to upload images and create links.

Comments and studies are currently not being used and still under development.

## Refs
### Get all ref photos
`GET /api/refs`
    Returns a list of refs
    
### Create a new ref photo
`POST /api/refs`
    Returns a ref object
#### Response
    {"_id":"678fbe365b3b07d56ba36956",
    "imageUrl":"https://i.ibb.co/d2k16mX/9ee4870f3515.png",
    "type":"Animation",
    "tags":[],
    "uploadedBy":"678fbe225b3b07d56ba36952",
    "favedUsers":[],
    "studies":[],
    "uploadDate":"2025-01-21T15:33:10.505Z",
    "createdAt":"2025-01-21T15:33:10.506Z",
    "updatedAt":"2025-01-21T15:33:10.506Z","__v":0}
    
### Get a specific ref
`GET /api/refs/:id`
    Returns a ref object by id
    
### Edit a ref photo
`PUT /api/refs/:id`
    Return the changed ref
    
### Delete a ref photo
`DELETE /api/refs/:id`
    Returns a deleted message

### Favorite a ref
`POST /api/refs/:id/fav`
    Returns the favorited ref

---

## Users
### Get all users
`GET /api/users`
    Returns a list of users
    
### Create a user
`POST /api/users`
    Returns a new user object
    
### Delete a user
`GET /api/user/:id`
    Returns a user object by id
    
### Set user to moderator
`PUT /api/user/:id/moderator`
    Return the user
    






