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