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
| GET          | /api/users                     | Returns All Users       |
| GET          | /api/users/:id                 | Returns User By ID      |
| PUT          | /api/users/:id                 | Update User             |
| DELETE       | /api/users/:id                 | Remove User             |
