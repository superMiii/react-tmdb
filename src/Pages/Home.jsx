import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import requests from "../utils/requests";

function Home() {
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={requests.netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={requests.trendingNow} />
          <Row title="Top Rated" movies={requests.topRated} />
          <Row title="Action Thrillers" movies={requests.actionMovies} />
          <Row title="Comedies" movies={requests.comedyMovies} />
          <Row title="Scary Movies" movies={requests.horrorMovies} />
          <Row title="Romance Movies" movies={requests.romanceMovies} />
          <Row title="Documentaries" movies={requests.documentaries} />
        </section>
      </main>
    </div>
  );
}

export default Home;
