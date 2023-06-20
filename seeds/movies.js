/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movies").del();
  await knex("movies").insert([
    {
      id: 1,
      movie_id: 238,
      title: "The Godfather",
      img_src:
        "https://image.tmdb.org/t/p/w185/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-14",
    },
    {
      id: 2,
      movie_id: 278,
      title: "The Shawshank Redemption",
      img_src:
        "https://image.tmdb.org/t/p/w185/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
      release_date: "1994-09-23",
    },
    {
      id: 3,
      movie_id: 569094,
      title: "Spider-Man: Across the Spider-Verse",
      img_src:
        "https://image.tmdb.org/t/p/w185/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      release_date: "2023-05-31",
    },
    {
      id: 4,
      movie_id: 424,
      title: "Schindler's List",
      img_src:
        "https://image.tmdb.org/t/p/w185/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      release_date: "1993-12-15",
    },
    {
      id: 5,
      movie_id: 129,
      title: "Spirited Away",
      img_src:
        "https://image.tmdb.org/t/p/w185/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      release_date: "2001-07-20",
    },
    {
      id: 6,
      movie_id: 389,
      title: "12 Angry Men",
      img_src:
        "https://image.tmdb.org/t/p/w185/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
      release_date: "1957-04-10",
    },
    {
      id: 7,
      movie_id: 155,
      title: "The Dark Knight",
      img_src:
        "https://image.tmdb.org/t/p/w185/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      release_date: "2008-07-14",
    },
    {
      id: 8,
      movie_id: 680,
      title: "Pulp Fiction",
      img_src:
        "https://image.tmdb.org/t/p/w185/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      release_date: "1994-09-10",
    },
    {
      id: 9,
      movie_id: 122,
      title: "The Lord of the Rings: The Return of the King",
      img_src:
        "https://image.tmdb.org/t/p/w185/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      release_date: "2003-12-01",
    },
    {
      id: 10,
      movie_id: 550,
      title: "Fight Club",
      img_src:
        "https://image.tmdb.org/t/p/w185/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      release_date: "1999-10-15",
    },
    {
      id: 11,
      movie_id: 157336,
      title: "Interstellar",
      img_src:
        "https://image.tmdb.org/t/p/w185/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      release_date: "2014-11-05",
    },
    {
      id: 12,
      movie_id: 4935,
      title: "Howl's Moving Castle",
      img_src:
        "https://image.tmdb.org/t/p/w185/yeJ5Nj1k2NA0bBZjkZ10PvQKjTD.jpg",
      release_date: "2004-09-09",
    },
    {
      id: 13,
      movie_id: 423,
      title: "The Pianist",
      img_src:
        "https://image.tmdb.org/t/p/w185/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
      release_date: "2002-09-17",
    },
    {
      id: 14,
      movie_id: 807,
      title: "Se7en",
      img_src:
        "https://image.tmdb.org/t/p/w185/6yoghtyTpznpBik8EngEmJskVUO.jpg",
      release_date: "1995-09-22",
    },
    {
      id: 15,
      movie_id: 27205,
      title: "Inception",
      img_src:
        "https://image.tmdb.org/t/p/w185/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      release_date: "2010-07-15",
    },
    {
      id: 16,
      movie_id: 447365,
      title: "Guardians of the Galaxy Vol. 3",
      img_src:
        "https://image.tmdb.org/t/p/w185/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      release_date: "2023-05-03",
    },
    {
      id: 17,
      movie_id: 76600,
      title: "Avatar: The Way of Water",
      img_src:
        "https://image.tmdb.org/t/p/w185/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      release_date: "2022-12-14",
    },
    {
      id: 18,
      movie_id: 299534,
      title: "Avengers: Endgame",
      img_src:
        "https://image.tmdb.org/t/p/w185/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      release_date: "2019-04-24",
    },
    {
      id: 19,
      movie_id: 785084,
      title: "The Whale",
      img_src:
        "https://image.tmdb.org/t/p/w185/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
      release_date: "2022-12-09",
    },
    {
      id: 20,
      movie_id: 842675,
      title: "The Wandering Earth II",
      img_src:
        "https://image.tmdb.org/t/p/w185/pR858ihc6Ls9xohpdRJVjV787ml.jpg",
      release_date: "2023-01-22",
    },
    {
      id: 21,
      movie_id: 335,
      title: "Once Upon a Time in the West",
      img_src:
        "https://image.tmdb.org/t/p/w185/qbYgqOczabWNn2XKwgMtVrntD6P.jpg",
      release_date: "1968-12-21",
    },
    {
      id: 22,
      movie_id: 274,
      title: "The Silence of the Lambs",
      img_src:
        "https://image.tmdb.org/t/p/w185/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
      release_date: "1991-02-14",
    },
    {
      id: 23,
      movie_id: 361743,
      title: "Top Gun: Maverick",
      img_src:
        "https://image.tmdb.org/t/p/w185/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      release_date: "2022-05-24",
    },
    {
      id: 24,
      movie_id: 10376,
      title: "The Legend of 1900",
      img_src:
        "https://image.tmdb.org/t/p/w185/iOcbJ5pxokOPDRgieVDbsFMrCc6.jpg",
      release_date: "1998-10-28",
    },
    {
      id: 25,
      movie_id: 15804,
      title: "A Brighter Summer Day",
      img_src:
        "https://image.tmdb.org/t/p/w185/3l8fOAwiN3N5n3hHnZ51eog7Zu2.jpg",
      release_date: "1991-07-27",
    },
    {
      id: 26,
      movie_id: 354912,
      title: "Coco",
      img_src:
        "https://image.tmdb.org/t/p/w185/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      release_date: "2017-10-27",
    },
    {
      id: 27,
      movie_id: 490132,
      title: "Green Book",
      img_src:
        "https://image.tmdb.org/t/p/w185/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
      release_date: "2018-11-16",
    },
    {
      id: 28,
      movie_id: 635302,
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      img_src:
        "https://image.tmdb.org/t/p/w185/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      release_date: "2020-10-16",
    },
    {
      id: 29,
      movie_id: 8587,
      title: "The Lion King",
      img_src:
        "https://image.tmdb.org/t/p/w185/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
      release_date: "1994-06-23",
    },
    {
      id: 30,
      movie_id: 603,
      title: "The Matrix",
      img_src:
        "https://image.tmdb.org/t/p/w185/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
      release_date: "1999-03-30",
    },
  ]);
};
