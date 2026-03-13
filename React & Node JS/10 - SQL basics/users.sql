-- create table users (
--     id serial,
--     name varchar(50),
--     email varchar(100),
--     role varchar(25) default 'user',
--     created_at timestamp default now()
-- )


-- insert into users (name, email) values ('gaurav', 'gaurav@test.com');

-- insert into users (name, email, role) values ('priya', 'priya@test.com', 'admin')
-- returning id, name, created_at;

-- insert into users (email, name, role) values 
-- ('rahul@test.com', 'rahul', 'manager'),
-- ('sneha@test.com','sneha', 'user')
-- returning id, name, created_at;


-- select * from users;

-- select * from users where role = 'admin';

-- select * from users where id = 1;

-- update users set role = 'admin', email = 'gaurav_1@test.com' where id = 1
-- returning id, name;


-- delete from users; -- will remove all records from users table


select name, email, created_at from users;



-- alter table <table_name> add column <column_name> <data-type>

-- alter table users add column age integer default 0;

-- update users set age = 18 where id = 2;
-- update users set age = 30 where id = 4;


-- filtering queries
-- where clause
-- select all users whose age is greater than 20
select * from users where age > 20;

select * from users where name ILIKE 'Rahul'; -- ilike is case insensitive

select * from users where name ILIKE '%r%';  

-- order by

-- select all users arrange the results by age in ascending order
select * from users order by age asc;

-- select all users order by desc - filter further by limiting the result to single result
-- return the user whose is the oldest in users

-- limit 
select * from users order by age desc limit 1;
