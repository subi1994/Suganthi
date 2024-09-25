

const Home = () => {
    return (
      <>
     <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url('https://i0.wp.com/sw-pets.co.uk/wp-content/uploads/2020/04/dog-walking.png?resize=1181%2C422')",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">Keep Your Pet Happy</h1>
      <p className="mb-5 text-xl font-bold">
      “A <bold>DOG</bold> is the only thing on earth that loves you more than he loves himself.
      Their loyalty speaks a language of love that needs no words.”
      </p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
      </>
    )
  }
  
  export default Home
  