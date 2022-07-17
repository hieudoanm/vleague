# (Postgre) SQL

## Aggregate Functions

```sql
-- COUNT
SELECT COUNT(*) FROM table_name;
-- SUM
SELECT SUM(column_name) FROM table_name;
-- MIN
SELECT MIN(column_name) FROM table_name;
-- MAX
SELECT MAX(column_name) FROM table_name;
-- AVG
SELECT AVG(column_name) FROM table_name;
-- ROUND
SELECT ROUND(column_name, int) FROM table_name;
-- GROUP BY
SELECT group_column_name, AVG(column_name) FROM table_name GROUP BY group_column_name;
-- HAVING (e.g.)
SELECT price,
   ROUND(AVG(downloads)),
   COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;
```

## Multiple Tables

```sql
-- (INNER) JOIN
SELECT * FROM table_name_1 JOIN table_name_2 ON table_name_1.column_name = table_name_2.column_name;
-- LEFT JOIN
SELECT * FROM table_name_1 LEFT JOIN table_name_2 ON table_name_1.column_name = table_name_2.column_name;
-- CROSS JOIN
SELECT * FROM table_name_1 CROSS JOIN table_name_2;
-- UNION
SELECT * FROM table_name_1 UNION SELECT * FROM table_name_2;
-- WITH (e.g.)
WITH previous_query AS (
  SELECT customer_id,
    COUNT(subscription_id) AS 'subscriptions'
  FROM orders
  GROUP BY customer_id
)
SELECT customers.customer_name, previous_query.subscriptions
FROM previous_query
JOIN customers
ON previous_query.customer_id = customers.customer_id;
```

## Query Manipulation

```sql
-- Create --
CREATE TABLE table_name (
  column_name DATA_TYPE PRIMARY KEY, -- uniquely identify
  column_name DATA_TYPE UNIQUE, -- A table can have multiple UNIQUE rows.
  column_name DATA_TYPE NOT NULL, -- column must have a value.
  column_name DATA_TYPE DEFAULT "" -- column takes an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column.
);
-- Insert--
INSERT INTO table_name (column_name, column_name, column_name) VALUES (value, value, value);
-- Add new column to table --
ALTER TABLE table_name ADD COLUMN column_name DATA_TYPE;
-- Update --
UPDATE table_name SET column_name = value WHERE column_name = value;
-- Delete --
DELETE FROM table_name WHERE column_name = value;
-- Query all columns --
SELECT * FROM table_name;
-- Query by (list of) column(s) --
SELECT column_name, column_name FROM table_name;
-- AS
SELECT column_name AS "Display Name", column_name AS "Display Name" FROM table_name
-- DISTINCT
SELECT DISTINCT column_name FROM table_name;
-- WHERE
SELECT * FROM table_name WHERE column_name (=|!=|>|<|>=|<=) value;
-- LIKE 1 (_ for wildcard)
SELECT * FROM table_name WHERE column_name LIKE 'va_ue';
-- LIKE 2 (% for wildcard)
SELECT * FROM table_name WHERE column_name LIKE '%value%';
-- NULL
SELECT * FROM table_name WHERE column_name IS NULL;
SELECT * FROM table_name WHERE column_name IS NOT NULL;
-- BETWEEN
SELECT * FROM table_name WHERE column_name BETWEEN value1 AND value2;
-- AND
SELECT * FROM table_name WHERE column_name = value1 AND column_name = value2;
-- OR
SELECT * FROM table_name WHERE column_name = value1 OR column_name = value2;
-- ORDER BY
SELECT * FROM table_name ORDER BY column_name (DESC);
-- LIMIT
SELECT * FROM table_name LIMIT int;
-- CASE
SELECT name,
  CASE
    WHEN column_name = value1 THEN new_value1
    WHEN column_name = value2 THEN new_value2
    ELSE default_value
  END AS "Display Name"
FROM table_name;
```
