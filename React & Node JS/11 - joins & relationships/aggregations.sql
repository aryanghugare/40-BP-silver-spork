select count(*) from users;

select count(user_id) from posts group by user_id;

-- group by - groups rows that share the same values in the specified column, so that you can run 
-- aggregate functions on each group separately.


select user_id, count(id) from posts
group by user_id;

select users.name, count(posts.id)
from users left join posts on posts.user_id = users.id
group by users.name;

select * from users;

-- insert into users (name, age, email) values ('sheetal', 29, 'sheetal@test.com');


select role, count(id) from users group by role;

-- get all users who have more than one post
select users.name, count(posts.id) as post_count 
from users 
left join posts on posts.user_id = users.id
group by users.id, users.name
having count(posts.id) > 2;

select name, (select count(*) from posts where posts.user_id = users.id) as post_count
from users;

-- get sum of age of all users
select sum(age) as total_age from users;

-- get average age of all users
select avg(age) as avg_age from users;


-- temp table - a temporary table that is created and exists only for the duration of a session or transaction. 
-- It is used to store intermediate results or to simplify complex queries by breaking them down into smaller, 
-- more manageable parts.
select avg(post_count) as avg_posts
from (
    select user_id, count(*) as post_count
    from posts
    group by user_id
) as post_summary;



