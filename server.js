const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions');
const categoryRoutes = require('./routes/categories');
const planRoutes = require('./routes/plans');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: 'https://finance-manager-eosin.vercel.app',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/plans', planRoutes);

app.get('/', (req, res) => {
    res.status(200).json({message: "всё норм"})
})

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
