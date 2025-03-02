import Image from "next/image";
import styles from "./page.module.css";
import Notif from "./components/notification";
import Header from "./components/Header.js";
import Hero from "./components/hero.js";
import How from "./components/how.js";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export default function Home() {
  return (
    <div>
      <Notif />
      <Header />
      <Hero />
      <How />
    </div>
  );
}
