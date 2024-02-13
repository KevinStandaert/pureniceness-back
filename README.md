# projet-15-pureniceness-records-back

## Installation

```bash
npm install
```

## File .env

Copy the .env.example file and rename it to .env

Replace the values of the environment variables with your own values

## Installing sqitch

https://sqitch.org/download/

For Ubuntu/Debian users :

```bash
apt-get install sqitch libdbd-pg-perl postgresql-client libdbd-sqlite3-perl sqlite3
```

## File .sqitch.example.conf

Copy the .sqitch.example.conf file and rename it to .sqitch.conf

Replace the values of variables with your own values

## Create a database "pureniceness" (do it only once)

<span style="color:red;">Don't forget to create your local database named pureniceness</span>

## Reset database

```bash
npm run db:reset
```

## Launch the Server

```bash
npm run dev
```
