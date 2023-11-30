\c chat_db_dev;

INSERT INTO users2 (user_email, user_name, user_password, manager, user_status)
VALUES
('admin@manager.com', 'admin', 'admin', true, 0),
('hello@world.com', 'user1', 'password', false, 0);

INSERT INTO rooms2 (room_name)
VALUES
('Hello World'),
('HI HOW ARE YOU IM FINE THANK YOU AND YOU');