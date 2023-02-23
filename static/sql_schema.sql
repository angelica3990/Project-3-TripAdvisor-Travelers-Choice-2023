create table data (
   id varchar primary key,
   category varchar,
   rank int,
    name varchar,
   location varchar,
    imageurl varchar,
    description varchar,
    latitude float(24),
    longitude float(24),
    rate float(24),
    total_reviews varchar,
    excellent varchar,
    very_good varchar,
    average varchar,
    poor varchar,
    terrible varchar
);

select * from data