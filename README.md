# Kryzen-biotech
 A simple app which check user if the user is not active from last five days and user went to buy product but payment was not done from last 5 days it will send the mail and also a notification on his app.

Frontend Deployed Link - civii-guruji.vercel.app

Backend Deployed Link -https://civil-guruji-hzoz.onrender.com/



*All Routes*

- POST /auth/signup route - To register a new user's Details.
- POST /auth/login route - To login a already existed user.
- POST /paymen/checkout - redirect to payment .
- PATCH /payment/complete route - for payment
- POST /logout route - To logout a login user.

*Packages installed*

1. express - Used for making the server easier and more robust.
2. nodemon - Used to automatically restart the application after changes happen in the file.
3. cors - CORS allows servers to specify who can access their resources and under what conditions.
4. mongoose - To connect MongoDB database with the server.
5. dotenv - To secure MongoDB sensitive information.
6. jsonwebtoken - To generate a token.
7. bcrypt - To hash the password provided by the user.
8. cron - to check user is not active from last 5 days and payment is not done from 5 days  then send notification
9. nodmailer - for sending mail.
10. socket.io - To send in app notification.

Steps to use webpage.
   1. Begin by registering yourself
   2. Use your registered credentials to log in securely.
   3. After redirecting to user details page, add  user details.
   4. After that user will be redirected to a home page.
   5. where a user can buy a course.
   6. By clicking the buyNow pdf it will redirect you to payment page.
