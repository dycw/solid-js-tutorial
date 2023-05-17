import Card from "../components/Card";

export default function Home() {
  return (
    <div class="grid grid-cols-4 gap-10 my-4">
      <Card rounded={true} flat={false}>
        <h2>Ninja Tee, Black</h2>
        <p>Lorem ipsum!</p>
        <button class="btn">view</button>
      </Card>
      <Card rounded={false} flat={true}>
        <h2>Ninja Tee, White</h2>
        <button class="btn">view</button>
        <p>Lorem ipsum!</p>
        <p>Only $10</p>
      </Card>
    </div>
  );
}