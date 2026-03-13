-- contraints are rules that we can apply to the columns of a table to restrict the type of data that can be inserted into the table. 
-- This helps to maintain the integrity of the data in the table.
-- think of it as validation that we had applied in forms in frontend, but here we are applying it at the database level.

-- create table users (
--     id SERIAL PRIMARY KEY,
--     name text not null,
--     email varchar(100) not null unique,
--     age int check (age >= 0 and age <= 80),
--     role text default 'user' check (role in ('user','admin', 'manager')),
--     created_at timestamp default now()
-- )

-- insert into users (name, email, age) values ('gaurav', 'gaurav@test.com', 81);
--  Details: new row for relation "users" violates check constraint "users_age_check"

-- insert into users (name, email, age) values ('gaurav', 'gaurav@test.com', 30);

-- insert into users (name, email, age) values ('priya', 'gaurav@test.com', 21);
--  duplicate key value violates unique constraint "users_email_key"

-- insert into users ( email, age) values ('priya@test.com', 21);
-- Error at line 1, column 1. Details: null value in column "name" of relation "users" violates not-null constraint

-- insert into users (name, email, age, role) values ('priya', 'priya@test.com', 21, 'admin');

-- insert into users (name, email, age, role) values ('rahul', 'rahul@test.com', 29, 'moderator');
-- Error at line 1, column 1. Details: new row for relation "users" violates check constraint "users_role_check"

insert into users (name, email, age, role) values ('rahul', 'rahul@test.com', 29, 'manager');



select * from users;

