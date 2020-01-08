# BackEnd

## Models

### Users

```
{
    
    username: string,  *REQUIRED*   
    password: string  *REQUIRED*
    
}
```
# Endpoints

## Users

| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| POST         | /api/auth/register                  | Creates User            |
| POST         | /api/auth/login                     | Creates JWT             |
| GET          | /api/auth/logout                    | logs out of session      |
| GET          | /api/users/:id                 | Returns User By ID      |
| PUT          | /api/users/:id                 | Update User             |
| DELETE       | /api/users/:id                 | Remove User             |

# API

## Auth Routes:

### POST
`/api/register`

- Expects Following Shape

```
{
    full_name: string, *REQUIRED*
    email: string,     *REQUIRED*
    password: string,  *REQUIRED*
    phone: string,     *OPTIONAL*
    location: string   *OPTIONAL*
}
```

`/api/login`

- Expects Following Shape

```
{
    email: string,   *REQUIRED*
    password: string *REQUIRED*
}
```

## User Routes

### GET

`api/users`

- Returns All Users In Database

`api/users/:id`

- Returns User That Matches ID

### PUT

`api/users/:id`

- Updates User Information

- Expects Following Shape, Only One Field Required

```
{
    username: string,  *OPTIONAL*
    password: string,  *OPTIONAL*
    
}
```

### Delete

`api/users/:id`

- Removes User From Database That Matches ID