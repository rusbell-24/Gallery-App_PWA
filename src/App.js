import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { useFetchImg } from "./hooks/useFetchImg";

function App() {
  const [images, handleSubmit] = useFetchImg();

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} />
      <div className="container-principal p-4">
        <div className="row m-2">
          {images.map((img) => {
            return (
              <div
                key={img.id}
                className="col bg-dark m-2 p-1 d-flex justify-content-center"
              >
                <Card urlImg={img.urls.regular} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
