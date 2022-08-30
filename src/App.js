import "./App.css";
import React, { useEffect, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1 className="App-logo">Skystop Social </h1>
      <Home />
    </div>
  );
}

function Home() {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://micro1-dev.us-east-1.elasticbeanstalk.com/feeds"
      );
      const feeds = await data.json();

      setFeeds((prev) => feeds);
    };
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <h1>Feeds</h1>

      <div className="feeds">
        {feeds.map((feed, i) => {
          return (
            <Feed key={i} title={feed.title} desc={feed.desc} img={feed.img} />
          );
        })}
      </div>
    </>
  );
}

function Feed(props) {
  return (
    <div className="feed">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>

      <p>{props.desc}</p>
    </div>
  );
}
