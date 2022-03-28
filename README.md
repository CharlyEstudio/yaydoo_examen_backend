<p align="center">
  <a href="https://yaydoo.com/es/" target="blank"><img src="https://careers.yaydoo.com/wp-content/uploads/2021/10/Yaydoo_Logo_Color_Black.png" width="320" alt="YayDoo Logo" /></a>
</p>

## Description

Technical knowledge test for the position of FullStack Developer Senior. It is very important to have Docker in the team and, in turn, the FrontEnd project at the same level as the BackEnd.

## Manual Installation

```bash
$ npm install
```

### Running the app

#### Create file .env

Create the .env file at the root level of this project folder.

```bash
# Global
API=YayDooLocal
HOST=localhost
PORT=9090

# Crendentials MySQL
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=yaydoo_db
DATABASE_USER=root
DATABASE_PASSWORD=12345
DATABASE_KEEP_CONNECTION_ALIVE=false

# TypeORM
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=localhost
TYPEORM_PORT=3306
TYPEORM_USERNAME=root
TYPEORM_PASSWORD=12345
TYPEORM_DATABASE=yaydoo_db
TYPEORM_LOGGING=true
TYPEORM_SYNCHRONIZE=false
TYPEORM_ENTITIES=src/**/**/*.entity.ts
TYPEORM_MIGRATIONS=src/db/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=src/db/migrations

# Seeds
TYPEORM_SEEDING_FACTORIES=src/db/factories/**/*{.ts,.js}
TYPEORM_SEEDING_SEEDS=src/db/seeds/**/*{.ts,.js}

# JSONWebToken
JWT_SECRET=secret-daydoo
JWT_EXPIRES_IN=12h

# Crypto Hash
BYCRYPT_HASH=scret-hash
```

```bash
# create database at mysql 8.0.28 in the port 3306, with the same password as
# in the DATABASE_USER environment file. 
$ create database yaydoo_db;

# generate and run migrations
$ npm run mg:r

# generate users fake with seeds (100)
$ npm run seed:run
# use any user to access, use the email field and the password is 12345.

# create scripts file
$ npm run build

# production mode
$ npm run start:prod
```

## Answers

### Algorithms

The algorithm test was carried out in the file [yaydoo_examen_algoritmos_CARLOS_RAMIREZS](yaydoo_examen_algoritmos_CARLOS_RAMIREZ.js) that is in this project.

### Design patterns

La prueba de patrones de diseño se realizó en el archivo [patrones_diseno.md](patrones_diseno.md) que se encuentra en este proyecto.

## Stay in touch

- Author - [Charly Ramírez](https://github.com/CharlyEstudio)

## License

Nest is [MIT licensed](LICENSE).
