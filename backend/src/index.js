const express = require('express');
const routes = require ('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


 app.listen(3333);


/**
 * NPM = INSTALAR UM PACOTE
 * NPX = EXECUTAR UM PACOTE
 * 
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota apôs "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 */

/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */


/**
 * Driver:  SELECT * FORM users
 * Query Builder: table('users').select('*').where()
 *
 */


