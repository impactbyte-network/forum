# API

--------------------------------------------------------------------------------

## Connect to Database

### Local

```sh
mongo
```

### MongoDB Atlas

- Connection:
  - Type: Direct Connection
  - Name: YourPreferredName
  - Address: databasename-shard-00-00-sppjs.mongodb.net
  - Port: 27017
- Authentication:
  - [x] Perform Authentication
  - Database: admin
  - User Name: yourusername
  - Password: yourpassword
  - Auth Mechanism: SCRAM-SHA-1
- SSL:
  - [x] Use SSL protocol

--------------------------------------------------------------------------------

## REST API

Root: `/api`

### Auth

Method | Endpoint | Description
-------|----------|------------
POST   | `/auth/signup` | Sign up with new user data (public)
POST   | `/auth/login`  | Login with user data (public)
POST   | `/auth/check`  | Check token (public)

### Users

Method | Endpoint | Description
-------|----------|------------
GET    | `/users`     | Get all (public)
GET    | `/users/:id` | Get one (public)
DELETE | `/users/:id` | Delete one (only admin/authenticated)
PUT    | `/users/:id` | Update one (only authenticated)

### Questions

Method | Endpoint | Description
-------|----------|------------
GET    | `/questions`     | Get all (public)
GET    | `/questions/:id` | Get one (public)
POST   | `/questions`     | Post one (only authenticated)
DELETE | `/questions/:id` | Delete one (only question creator)
PUT    | `/questions/:id` | Update one (only question creator)

Method | Endpoint | Description
-------|----------|------------
GET    | `/questions/:q_id/answers`       | Get all answers (public)
GET    | `/questions/:q_id/answers/:a_id` | Get one answer (public)
POST   | `/questions/:q_id/answers`       | Post one answer (only authenticated)
DELETE | `/questions/:q_id/answers/:a_id` | Delete one (only question creator)
PUT    | `/questions/:q_id/answers/:a_id` | Update one (only question creator)
