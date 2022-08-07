INSERT INTO
    users(
        name, 
        email, 
        password, 
        phone
    )
VALUES
    (
        'user1',
        'user1@gmail.com',
        '$2b$10$DviVVuryzUWALxq.yG0Yd.ChLIYNXuKDw5WoUiKK7TPnFuZcL8uL2',
        '+96512345678'
    ),
    (
        'user2',
        'user2@gmail.com',
        '$2b$10$klSql.FCEBJSLDScw0BZQuEeROI5oXiNmj5oYc1sr2nPl7GPctrLG',
        '+96512345678'
    ),
    (
        'user3',
        'user3@gmail.com',
        '$2b$10$klSql.FCEBJSLDScw0BZQuEeROI5oXiNmj5oYc1sr2nPl7GPctrLG',
        '+96512345678'
    );

INSERT INTO
    addresses(
        city, 
        area, 
        street, 
        block,
        building,
        default_address,
        user_id
    )
VALUES
    (
        'Kuwait', 
        'First Residence Building', 
        'Kuwait Street', 
        2,
        10,
        TRUE,
        1
    ),
    (
        'Kuwait', 
        'First Residence Building', 
        'number one ', 
        10,
        50,
        FALSE,
        1
    ),
    (
        'Gaza', 
        'Alshik Radwan Building', 
        'Ahmed Yassen Street ', 
        5,
        60,
        FALSE,
        2
    );

INSERT INTO
    categories(
        name, 
        image,
        place, 
        has_Sub_Categories
    )
VALUES
    (
        'Security Camers',
        'https://i.postimg.cc/0NfwBLRt/Camera-uta6i-EV-1.png',
        'in',
        FALSE
    ),
    (
        'Smart Locks',
        'https://i.postimg.cc/wvM7bMkv/Smart-Locks-1.png',
        'in',
        TRUE
    ),
    (
        'Smart Switches',
        'https://i.postimg.cc/RFYNrmPT/Smart-lighting-1.png',
        'in',
        FALSE
    ),
    (
        'Smart BLinds',
        'https://i.postimg.cc/pV9BmLtR/Smart-switches-1.png',
        'in',
        FALSE
    ),
    (
        'Smart Alarms',
        'https://i.postimg.cc/gJ18V3Pd/Smart-switches-1-1.png',
        'out',
        FALSE
    ),
    (
        'Smart Lighting',
        'https://i.postimg.cc/FKBLv0zc/Smart-switches-2.png',
        'out',
        FALSE
    );

INSERT INTO
    sub_categories(
        name, 
        category_id
    )
VALUES
    (
        'Smart Wi-Fi',
        2
    ),
    (
        'Smart Bluetooth',
        2
    ),
    (
        'Wood & PVC Doors',
        2
    ),
    (
        'Aluminum Doors',
        2
    ),
    (
        'Glass Doors',
        2
    ),
    (
        'Metal Doors',
        2
    );

INSERT INTO
    products(
    name,
    price,
    image,
    albums,
    description,
    quick_overview,
    discount,
    brand,
    inStock,
    sub_category_id,
    category_id
    )
VALUES
    (
        'Xiaomi Motion-Activated Night Light',
        11.5,
        'https://i.postimg.cc/jdcCKyk5/Rectangle-111.png',
        '{https://i.postimg.cc/vTQMSNyv/Rectangle-109.png,https://i.postimg.cc/NfjB6Sps/Rectangle-108.png,https://i.postimg.cc/Y9xBgzFL/Rectangle-107.png,https://i.postimg.cc/J7PWzKm9/Rectangle-106.png}',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        10.0,
        'Xiaomi',
        TRUE,
        NULL,
        6
    ),
    (
        'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        5.5,
        'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        '{https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg,https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg}',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        50.0,
        'Acer',
        TRUE,
        NULL,
        1
    ),
    (
        'prdocut 3',
        11.5,
        'https://i.postimg.cc/jdcCKyk5/Rectangle-111.png',
        '{https://i.postimg.cc/vTQMSNyv/Rectangle-109.png,https://i.postimg.cc/NfjB6Sps/Rectangle-108.png,https://i.postimg.cc/Y9xBgzFL/Rectangle-107.png,https://i.postimg.cc/J7PWzKm9/Rectangle-106.png}',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        60.0,
        'Xiaomi',
        TRUE,
        NULL,
        6
    ),
    (
        'product 4',
        5.5,
        'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        '{https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg,https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg}',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        70.0,
        'Acer',
        TRUE,
        NULL,
        1
    ),
    (
        'Xiaomi Motion-Activated Night Light',
        4.0,
        'https://i.postimg.cc/wvM7bMkv/Smart-Locks-1.png',
        '{https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg}',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        30.0,
        'Xiaomi',
        TRUE,
        3,
        2
    ),
    (
         'new product ',
        11.5,
        'https://i.postimg.cc/jdcCKyk5/Rectangle-111.png',
        '{https://i.postimg.cc/vTQMSNyv/Rectangle-109.png,https://i.postimg.cc/NfjB6Sps/Rectangle-108.png,https://i.postimg.cc/Y9xBgzFL/Rectangle-107.png,https://i.postimg.cc/J7PWzKm9/Rectangle-106.png}',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        10.0,
        'Xiaomi',
        TRUE,
        NULL,
        6
    ),
    (
        'product 7',
        11.5,
        'https://i.postimg.cc/jdcCKyk5/Rectangle-111.png',
        '{https://i.postimg.cc/vTQMSNyv/Rectangle-109.png,https://i.postimg.cc/NfjB6Sps/Rectangle-108.png,https://i.postimg.cc/Y9xBgzFL/Rectangle-107.png,https://i.postimg.cc/J7PWzKm9/Rectangle-106.png}',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        10.0,
        'Xiaomi',
        TRUE,
        NULL,
        6
    ),
    (
        'product 8',
        5.5,
        'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        '{https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg,https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg}',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        50.0,
        'Acer',
        TRUE,
        NULL,
        1
    ),
    (
        'prdocut 9',
        11.5,
        'https://i.postimg.cc/jdcCKyk5/Rectangle-111.png',
        '{https://i.postimg.cc/vTQMSNyv/Rectangle-109.png,https://i.postimg.cc/NfjB6Sps/Rectangle-108.png,https://i.postimg.cc/Y9xBgzFL/Rectangle-107.png,https://i.postimg.cc/J7PWzKm9/Rectangle-106.png}',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        60.0,
        'Xiaomi',
        TRUE,
        NULL,
        6
    ),
    (
        'product 10',
        5.5,
        'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        '{https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg,https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg}',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        70.0,
        'Acer',
        TRUE,
        NULL,
        1
    );

INSERT INTO
    reviews(
        comment,
        rate,
        user_id,
        product_id
    )
VALUES
    (
        'Amazing Product',
        3,
        1,
        1
    ),
    (
        'Beautiful Product',
        2,
        2,
        1
    ),
    (
        'Amazing Product',
        4,
        1,
        1
    ),
    (
        'Amazing Product',
        3,
        3,
        1
    ),
    (
        'Beautiful Product',
        2,
        2,
        1
    ),
    (
        'Not Perfect Product',
        1,
        1,
        2
    );
 
 INSERT INTO
    carts(
    user_id ,
    product_id,
    quantity
    )
VALUES
    (
        1,
        1,
        2
    ),
    (
        1,
        2,
        1
    ),
    (
        2,
        3,
        5
    );
    INSERT INTO
    wishlists(
        user_id,
        product_id
    )
VALUES
    (
        1,
        1
    ),
    (
        2,
        3
    ),
    (
        1,
        1
    );

INSERT INTO
    guests(
        name,
        email,
        phone,
        city,
        area,
        street,
        block,
        building
    )
VALUES
    (
        'guest1',
        'guest1@gmail.com',
        '+96551541564',
        'Kuwait',
        'First Residence Building', 
        'Kuwait Street', 
        3,
        11
    ),
    (
        'guest2',
        'guest2@gmail.com',
        '+96554716581',
        'Kuwait',
        'First Residence Building', 
        'Kuwait Street', 
        5,
        11
    );
    INSERT INTO
    orders(
        products,
        amount,
        addresses,
        status,
        order_number,
        payment,
        user_id,
        guest_id
    )
VALUES
    (
        '{{1,2},{2,10},{3,5}}',
        300,
        '{Kuwait, First Residence Building, Kuwait Street, 2,10}',
        'Pending',
        'scl245as',
        'Kent', 
        1,
        NULL 
    ),
    (
        '{{4,10},{1,1},{5,3}}',
        500,
        '{Kuwait, First Residence Building, Kuwait Street, 2,10}',
        'Pending',
        'scl245affs',
        'Kent', 
        1,
        NULL 
    ),
    (
        '{{1,5},{4,2},{3,5}}',
        200,
        '{Kuwait,First Residence Building, Kuwait Street, 3,11}',
        'Pending',
        'asv4524eg', 
        'Kent',
        NULL,
        2
    );
