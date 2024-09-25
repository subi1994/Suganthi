




import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const DogList = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dataFetch = () => {
    setLoading(true);
    setError(false);
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (   

  <>
   
    <div className="card bg-base-100 w-96 shadow-xl mx-auto ">
  <figure className="px-10 pt-10">
    <img
      src={data}
      alt="Random Dog"
      sx={{ objectFit: "cover" }}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl">Adorable Dog!</h2>
    <p>Bring home your new best friend today!</p>
    <div className="card-actions">
      <button className="btn btn-primary"  onClick={dataFetch}>Buy Now</button>
    </div>
  </div>
</div>

      
  </>
  
  );
};

export default DogList;





{/* <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
{loading ? (
  <Typography variant="body2" component="p" sx={{ padding: 2 }}>
    Loading...
  </Typography>
) : error ? (
  <Typography variant="body2" component="p" sx={{ padding: 2, color: "red" }}>
    Error loading image. Please try again.
  </Typography>
) : (
  <CardMedia
    component="img"
    height="300"
    image={data}
    alt="Random Dog"
    sx={{ objectFit: "cover" }}
  />
)}
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Random Dog Image
  </Typography>
</CardContent>
</Card>

<Button
variant="contained"
color="primary"
onClick={dataFetch}
sx={{
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px 20px",
  fontSize: "16px",
}}
disabled={loading}
>
{loading ? "Loading..." : "Fetch New Image"}
</Button> */}
