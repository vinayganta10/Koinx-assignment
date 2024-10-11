# Koinx-assignment

# KoinX Backend Internship Assignment

## Assignment Objective

Develop a server-side application using Node.js and MongoDB, completing the following tasks.

---

## Task 1

- Implement a **background job** that fetches the **current price in USD**, **market cap in USD**, and **24-hour change** of 3 cryptocurrencies: Bitcoin, Matic, and Ethereum.
- Store this data in a database, and the job should run **once every 2 hours**.
- You can fetch the cryptocurrency details from the CoinGecko API. Use their documentation: [CoinGecko API Docs](https://docs.coingecko.com/v3.0.1/reference/introduction).
- **Hint**: CoinGecko IDs for the required coins are `bitcoin`, `matic-network`, and `ethereum`.

---

## Task 2 - API for Latest Cryptocurrency Stats

This task implements an API endpoint `/stats` that returns the latest data about the requested cryptocurrency.


### Query Parameters:

```json
{
  "coin": "bitcoin" // Could be one of the above 3 coins (bitcoin, matic-network, ethereum)
}
```

### Response:

```json
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
```

## Task 3

- Implement an API, `/deviation`, that will return the standard deviation of the price of the requested cryptocurrency for the last 100 records stored by the background service in the database.
- For example, consider the database only has 3 records for `bitcoin`, each with a price of 40000, 45000, 50000 respectively. Then the result should return 4082.48.


### Query Parameters:

```json
{
  "coin": "bitcoin" // Could be one of the above 3 coins (bitcoin, matic-network, ethereum)
}
```

### Response:

```json
{
	"deviation": 4082.48
}
```