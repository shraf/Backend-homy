BEGIN;

DROP TABLE IF EXISTS users,
categories,
sub_categories,
products,
addresses,
carts,
wishlists,
orders,
reviews,
guests,
brands,
banners,
promo_codes,
roles,
pages,
permissions,
roles_permissions CASCADE;

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  role VARCHAR(255) NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  link VARCHAR(255) NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles_permissions (
  id SERIAL PRIMARY KEY,
  role_id int NOT NULL,
  permission_id int NOT NULL,
  page_id int NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
  FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE,
  FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  role_id INT NULL DEFAULT 1,
  reset_link TEXT,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  city VARCHAR(255) NOT NULL,
  area VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  block VARCHAR(255) NOT NULL,
  building VARCHAR(255) NOT NULL,
  default_address BOOLEAN DEFAULT FALSE,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image TEXT NOT NULL,
  place VARCHAR(100) NOT NULL,
  archived BOOLEAN DEFAULT FALSE,
  has_Sub_Categories BOOLEAN DEFAULT FALSE,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sub_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  category_id INT,
  archived BOOLEAN DEFAULT FALSE,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price FLOAT NOT NULL,
  image VARCHAR(255) NOT NULL,
  albums TEXT[] NOT NULL,
  description TEXT NOT NULL,
  quick_overview TEXT NOT NULL,
  discount FLOAT NOT NULL,
  shipment FLOAT NOt NULL DEFAULT 0,
  brand VARCHAR(255) NOT NULL,
  inStock BOOLEAN DEFAULT TRUE,
  sub_category_id INT NULL,
  category_id INT NULL,
  rating FLOAT NOT NULL DEFAULT 0,
  users_rated_number INT NOT NULL DEFAULT 0,
  archived BOOLEAN DEFAULT FALSE,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sub_category_id) REFERENCES sub_categories(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  comment TEXT NOT NULL,
  rate INT NOT NULL,
  user_id INT,
  product_id INT,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE carts (
  id SERIAL PRIMARY KEY,
  user_id INT,
  product_id INT,
  quantity INT,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INT NULL,
  guest_id int NULL,
  is_sold boolean NOT NULL DEFAULT false , 
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE cart_product (
  id SERIAL PRIMARY KEY,
  cart_id INT NOT NULL,
  product_id INT NOT NULL,
	quantity INT NOT NULL DEFAULT 1,
  is_sold boolean NOT NULL DEFAULT false , 
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cart_id) REFERENCES cart(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY,
  user_id INT,
  product_id INT,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE

);
CREATE TABLE guests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(30) NOT NULL,
  city VARCHAR(255) NOT NULL,
  area VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  block VARCHAR(255) NOT NULL,
  building VARCHAR(255) NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  products TEXT[][],
  amount FLOAT NOT NULL,
  addresses TEXT[] ,
  status VARCHAR(100) DEFAULT 'pending',
  order_number VARCHAR(255) NOT NULL UNIQUE,
  payment VARCHAR(255) NOT NULL,
  promo_discount FLOAT NOT NULL,
  shipping_cost FLOAT NOT NULL,
  sub_total FLOAT NOT NULL,
  user_id INT NULL,
  guest_id INT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE
);

CREATE TABLE _orders (
  id SERIAL PRIMARY KEY,
  cart_id int NOT NULL,
	addresses TEXT[] ,
  status VARCHAR(100) DEFAULT 'pending',
  order_number VARCHAR(255) NOT NULL UNIQUE,
  payment VARCHAR(255) NOT NULL,
  promo_discount FLOAT NOT NULL,
  shipping_cost FLOAT NOT NULL,
  sub_total FLOAT NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cart_id) REFERENCES cart(id) ON DELETE CASCADE
);

CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image TEXT NOT NULL,
  archived BOOLEAN DEFAULT FALSE,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE banners (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image TEXT NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE promo_codes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  discount TEXT NOT NULL,
  createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

alter table categories add column name_ar varchar(255);
alter table categories add column name_en varchar(255); 
alter table products ADD COLUMN name_en varchar(255);
alter table products ADD COLUMN name_ar varchar(255);
ALTER TABLE cart_product 
ADD UNIQUE (cart_id, product_id);

COMMIT;