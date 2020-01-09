# BackEnd

## Models

### Users

```
{
    
    username: string,  *REQUIRED*   
    password: string  *REQUIRED*
    
}
```
### Strain

```
{
    user_id: int,               *REQUIRED*
    strain_name: string,        *REQUIRED*
    strain_type: string,        *REQUIRED*
    strain_description: string, *REQUIRED*
}
```

### Notes

```
{
    strain_id: int,         *REQUIRED*
    title: string,         *REQUIRED*
    note: string,          *REQUIRED*
    
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

## Strain
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/strain/:id/strain            | Get All User Strains     |
| GET          | api/strain/:id/strain/:strain_id | Get Specific User Strain |
| POST         | api/strain/:id/strain            | Add User Strain          |
| PUT          | api/strain/:id/strain/:strain_id | Update User Strain       |
| DELETE       | api/strain/:id/strain/:strain_id   | Remove User Strain     |

## Notes
| Request Type | Endpoint                       | Description             |
|:------------:|:------------------------------:|:-----------------------:|
| GET          | api/note/:strain_id            | Get All Strain Notes     |
| GET          | api/note/:strain_id/:note_id   | Get Specific Strain Note |
| POST         | api/note/:strain_id            | Add Note For Strain      |
| PUT          | api/note/:strain_id/:note_id   | Update Note Information |
| DELETE       | api/note/:strain_id/:note_id   | Remove Plant Note       |

# API

## Auth Routes:

### POST
`/api/register`

- Expects Following Shape

```
{
    username: string, *REQUIRED*
    password: string,  *REQUIRED*
    
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

## Strain Routes

### GET

`api/strain/:id/strain`

- Returns All Strains That Matches User By `id`

`api/strain/:id/strain/:strain_id`

- Returns A Specific Strain That Matches `strain_id` By User that Matches `id`

### POST

`api/strain/:id/strain`

- Expects The Following Shape
- Field `user_id` Should Match `id`

```
{
    
    strain_name: string,          *REQUIRED*
    strain_type: string,          *REQUIRED*
    strain_description: string,   *REQUIRED*
    user_id: int,                 *REQUIRED*
}
```

### PUT

`api/strain/:id/strain/:strain_id`

- Updates Strain Information
- Expects Following Shape
- Only One Field Required Per Request

```
{
    id: int,                      *OPTIONAL*
    strain_name: string,          *OPTIONAL*
    strain_type: string,          *OPTIONAL*
    strain_description: string,   *OPTIONAL*
    user_id: int,                 *OPTIONAL*
}
```

### DELETE

`api/strain/:id/strain/:strain_id`

- Removed Task That Matches `strain_id` By User That Matches `id`

## Note Routes

### GET

`api/note/:strain_id`

- Returns All Notes Associated With The Strain That Matches `strain_id`

`api/note/:strain_id/:note_id`

- Returns A Note That Matches `note_id` By The Strain That Matches `strain_id`

### POST

`api/note/:strain_id`

- Adds A Note To The Strain That Matches `Strain_id`
- Field `strain_id` Should Match `strain_id`
- Expects The Following Shape

```
{
    
    title: string,         *REQUIRED*
    note: string,          *REQUIRED*
    strain_id: int,         *REQUIRED*
}
```

### PUT

`api/note/:strain_id/:note_id`

- Updates Note Information That Matches `note_id` By Strain That Matches `strain_id`

- Expects Following Shape, Only One Field Required Per Request

```
{
    
    title: string,         *OPTIONAL*
    note: string,          *OPTIONAL*
    strain_id: int,         *OPTIONAL*
}
```

### DELETE

`api/note/:strain_id/:note_id`

- Removes The Note That Matches `note_id` By The Strain That Matches `strain_id` From The Database