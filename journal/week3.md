# Week 3 — Decentralized Authentication
# Required Work
Watched all the videos except Spending Consideration.

## Made Cognito User Pool
User Pool<br />
![User Pool](assets/cognito-user-pool-week3.png)<br />

## Changed the UI color and implemented Custom Sign In, Sign Up, Signed In, Recovery, Confirmation Page
![Sign In](assets/sign-in-week3.png)<br />
![Sign Up](assets/sign-up-week3.png)<br />
![Signed In](assets/signed-in-week3.png)<br />
![Recovery](assets/recovery-page-week3.png)<br />
![Confirmation](assets/confirmation-page-week3.png)<br />

# Problem i met during, implementing on my repository.
When trying to implement login and sign in on my repository.
I met an error with message "Token was not issued for this audience"
![Token Error](assets/token-was-not-issued-week3.png)<br />
Then i after digging around a bit, i found the problem on my app.py.

Wrong
```py
user_pool_client_id = os.getenv('AWS_COGNITO_USER_POOL_ID')
```

Correct
```py
user_pool_client_id = os.getenv('AWS_COGNITO_USER_POOL_CLIENT_ID')
```
