-- create table posts (
--     id serial primary key,
--     title text not null,
--     body text,
--     user_id int references users(id) on delete cascade, -- foreign key contraint
--     created_at timestamp default now()
-- )

-- insert into posts (title, body, user_id) values 
-- ('learn react', 'content related to learn react', 2),
-- ('learn css', 'content related to learn css', 2),
-- ('learn js', 'content related to learn js', 2),
-- ('some post', 'content related to learn js', 5),
-- ('some other post js', 'content related to learn js', 5),
-- ('learn sql', 'content related to learn sql', 7);

select * from posts;

select posts.title, users.name from posts inner join users on posts.user_id = users.id;

-- left join - all rows from the left table 
select posts.title, users.name from posts left join users on posts.user_id = users.id;

-- right join all rows from the right table

select posts.title, users.name from posts right join users on posts.user_id = users.id;

-- INNER JOIN only matching rows in both tables
-- LEFT JOIN all left rows + matched right rows 
-- RIGHT JOIN all right rows + matched left rows

