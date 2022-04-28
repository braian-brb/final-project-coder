import express from 'express';
import morgan from 'morgan';

import productsRoutes from './controllers/products/routes.js';
import cartsRoutes from './controllers/carts/routes.js';

const app = express();

app.set('port', process.env.PORT || 3000);

//midleware
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', productsRoutes);
app.use('/carts', cartsRoutes);

export default app;
