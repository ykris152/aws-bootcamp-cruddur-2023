# Week 5 — DynamoDB and Serverless Caching
This week and last week is a very hard week.
# Required Work
1. Watched all the videos and anish's best scp for dynamodb
2. Implement the schema load, seed, scan scripts
3. Implement pattern scripts for read and list conversations
4. Implement update Cognito ID script for postgres db
5. Implement pattern A to E

# Debugging:
When creating message for a new message group, the page won't redirect to the group's message group.
It shows an 404 error that indicates the redirected link is not working.
The solution:
In andrew's video, the redirected link doesn't have an @ mark. (messages/1d4d051a-1840-44c2-aeb9-fa6377a2e3c2)
Which also happens on my side, but somehow it doesn't work in my browser( i use firefox and brave).
The response that i got is that i should allow javascript to run. which i don't really understand.
So, i tweaked MessageForm.js's redirect link from
```
window.location.href = `/messages/${data.message_group_uuid}`
```
to
```
window.location.href = `/messages/@${data.message_group_uuid}`
```
which worked for my case.