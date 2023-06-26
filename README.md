
# MovieMuse

MovieMuse is a web application that offers users detailed information about movies, including titles, release dates, genres, taglines, overviews, and posters. Users can create accounts, log in securely, and store their favorite movies, watchlists, and personalized preferences. They can mark movies as favorites and add them to their watchlist to keep track of movies they love and intend to watch. 

MovieMuse provides personalized movie recommendations based on the favorite movies selected by the user.MovieMuse suggests similar movies that align with the user's taste and preferences. This feature helps users discover new movies that they are likely to enjoy and enhances their movie-watching experience by offering tailored recommendations.

MovieMuse offers a diverse range of movie options, including now showing, upcoming, popular, and top-rated movies. Users can explore detailed information about each movie and conveniently add their favorites to a watchlist for easy access and future viewing.
## Tech Stack

**Client:** React, TypeScirpt, Sass, 

**Server:** Node.js, Express, MySQL, JWT


## Installation

1.Clone or download this repo.

2.Create a new database in MySQL called moviemuse.

3.Install dependencies:

```bash
  npm install 
  cd moviemuse-server
```

4.Run migrations

```bash
  npm run migrate
```

5.Run seeds

```bash
  npm run seed
```

6.Set environment variables:

```bash
  PORT=<PORT_NUMER>
  CORS_ORIGIN=<LOCALPATH>
  SECRET_KEY=<SECRET KEY>
  DB_HOST=<HOST ADDRESS>
  DB_NAME=moviemuse
  DB_USER=<YOUR DB USERNAME>
  DB_PASSWORD=<YOUR DB PASSWORD>
```

7.Start the server:

```bash
  npm start
```
## Features

- User login and signout
- Select favourite movies
- Add movies to watchlist
- Remove movies from favourite or watchlist
- Cross platform


## Lessons Learned

While building this project, I learned the importance of data integration and API usage in creating a comprehensive movie platform. I gained experience in handling user authentication, managing user preferences and lists, and leveraging my own database and external movie databases to provide accurate and up-to-date movie information. Additionally, I developed skills in designing responsive and visually appealing user interfaces to enhance the overall user experience.

During the project, one of the challenges faced while working with MySQL database was setting up the connections and managing schema changes. By following best practices, utilizing migration scripts, and conducting thorough testing, I was able to overcome these challenges and ensure smooth database operations in the project.