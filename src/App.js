import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useFetchImg } from "./hooks/useFetchImg";

function App() {
  const [images, handleSubmit, handleInit] = useFetchImg();

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} init={handleInit} />
      <div className="gallery-container">
        {images.map((img) => {
          return <Card key={img.id} urlImg={img.urls.regular} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
