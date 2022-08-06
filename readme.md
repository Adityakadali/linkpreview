# This is a Link Preview website

> Made by Aditya Kadali

## Screenshots:

![Dexkto view](./screenshots/Screenshot%202022-08-07%20at%2000-51-17%20Link%20Preview.png)

## Built with:

- [JSON link API](https://jsonlink.io/)
- Semantic HTML5
- CSS Custom classes

## My approach:

First I tought of using fetch command and fetch meta tags from a website when user gives a URL. But most of the websites block Cross origin requests due security concerns. So, I tought of building a rest API using python fastAPI and scrape meta tags. with a little bit of research I came to know about [Open graph protocol](https://ogp.me) with this we can convert any webpage into rich content document. I built an API but it is slow like taking more more than 1 sec to get data so I used JSON Link API it is free and fulfils my requirement and it is faster than my API so I used it to build this project.

## Time taken:

This project took me 2 days with research and trail and error of different APIs.

## Learnings:

- I learned about cross origin requests and its security concerns.
- I learned about Open Graph Protocol by facebook
