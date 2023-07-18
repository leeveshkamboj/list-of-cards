import React from "react";

import styles from "./App.module.css";
import Card from "./Card";

const items = [
  {
    id: "card1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/imgs/placeholder1.webp",
  },
  {
    id: "card2",
    description:
      "Quisque quis nisl id nibh elementum placerat sit amet sed est.",
    image: "/imgs/placeholder2.png",
  },
  {
    id: "card3",
    description:
      "Vivamus auctor velit ac urna varius, et viverra risus sollicitudin.",
    image: "/imgs/placeholder3.jpg",
  },
  {
    id: "card4",
    description: "Integer quis ipsum eu felis tincidunt sagittis.",
    image: "/imgs/placeholder4.jpg",
  },
  {
    id: "card5",
    description: "Donec eget eros ut mauris auctor tempus.",
    image: "/imgs/placeholder5.jpg",
  },
  {
    id: "card6",
    description: "In molestie erat sit amet fringilla pulvinar.",
    image: "/imgs/placeholder6.jpg",
  },
  {
    id: "card7",
    description: "Donec in dui non purus fringilla varius non id dui.",
    image: "/imgs/placeholder7.jpg",
  },
];

function App() {
  return (
    <div className={styles.list}>
      {items.map((el) => (
        <Card key={el.id} description={el.description} image={el.image} />
      ))}
    </div>
  );
}

export default App;
