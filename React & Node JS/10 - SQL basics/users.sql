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

