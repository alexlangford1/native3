insert into users (
    first_name, 
    last_name,
    email,
    password,
    createdAt
) values (
    $1,
    $2,
    $3,
    $4,
    $5
);
