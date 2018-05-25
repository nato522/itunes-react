# What is this?
Small spotify app to play around with react. You can perform a search and interact a little bit with the results

# What Can I do with it?
Learn from my mistakes. Follow the commits to get an idea of the changes that have been done. At the beginning there's a lot of back and forth between itunes and spotify APIs, but then it should be ok


# Developers
As Spotify changed their API and added auth, we need to get an access token from server side, not client.
[Follow this link to know how to get the access token and refresh token](http://www.angular-city.com/2017/07/spotify-web-api-access.html)

Also, in the repository mentioned in the last link, I have removed the class `text-overflow` from `/authorization_code/public/index.html` so we do not have to look for the token in the URL

In the client side I have created a file called `credentials.js` where we will store the access-token and refresh-token. This is just to have everything a little bit cleaner