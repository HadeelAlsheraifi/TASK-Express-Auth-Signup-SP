If you need a starting point fork this: [Starting point](https://github.com/JoinCODED/TASK-Express-Auth-Signup-SP).

### User Model and Routes

1. Create a model called `User` that has the following fields:
   1. `username` which is a `String`, not optional, and unique.
   2. `password` which is a `String` and not optional.
   3. `email` which is a `String` and must be an email.
   4. `firstName` which is a `String`.
   5. `lastName` which is a `String`.
2. Create a `user` folder, and inside it a `users.controllers` and a `users.routes` files and connect it the routes to `app.js`.

### Signup Route

1. In `users.controllers`, create a method called `signup`.
2. Install `bcrypt` and require it in `users.controllers`.
3. Hash the password with `10` salt rounds and overwrite `req.body.password` with the new, hashed password.
4. Pass the body of the request to `User.create`.
5. Change the response status to `201` and end it with a message.
6. Don't forget to create your route in `users.routes.js` and give it the path `/apis/signup`.

### Config Folder

1. Create a new folder called `config`.
2. In this folder create a file called `keys.js`.
3. Create an object that has two properties:
   1. `JWT_SECRET`: give it a secret key.
   2. `JWT_EXPIRATION_MS`: give it the time for your token expiration in milliseconds.
4. Export this object.

### Generating a Token

Generate a token in `users.controllers`'s `signup` method.

1. Require `JWT_EXPIRATION_MS` and `JWT_SECRET` from `config/keys.js`.
2. Install `jsonwebtoken`.
3. Require `jwt` from `jsonwebtoken`.
4. In `users.controllers`, create a function called `generateToken` that takes `user` as an argument.
5. In this function, create an object called `payload` and pass it the user's `username` that's coming from `user`.
6. Keep in mind that the token **must** have the user's ID and the expiration date of the token.
7. Add an `exp` property to `payload` and its value is the date right now plus `JWT_EXPIRATION_MS`.
8. After creating your `payload` object, call `jwt.sign()` and pass it two arguments:
   1. `payload`, make sure to stringify it.
   2. `JWT_SECRET`
9. Save the returned value in a variable called `token` and return `token`.
10. In the `signup` method, after creating the user call `generateToken` and pss it the new user.
11. Save the returned value in a variable called `token` and send it as a response.
