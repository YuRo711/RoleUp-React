import Hero from "../Hero/Hero";
import "./Main.css";

export default function Main(props) {
  return (
    <main className="main">
      <Hero texts={props.texts}/>
    </main>
  )
}