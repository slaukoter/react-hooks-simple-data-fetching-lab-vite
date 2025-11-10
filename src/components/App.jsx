// create your App component here

import { useEffect, useState } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function fetchDogImage() {
    setIsLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);

        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}

      <button
        onClick={fetchDogImage}
        style={{ display: "block", margin: "1rem auto" }}
      >
        Fetch New Dog
      </button>
    </div>
  );
}

export default App;
