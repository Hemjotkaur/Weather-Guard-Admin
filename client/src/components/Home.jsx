
const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80')",
      }}
    >

      <div className="h-full flex flex-col justify-center items-center text-white bg-black/40">
        <h1 className="text-5xl font-bold mb-4">WeatherGuard</h1>

        <p className="text-lg max-w-2xl text-center px-4">
          Stay informed with real-time weather alerts delivered directly to your
          Telegram account.
        </p>
      </div>
    </div>
  );
};

export default Home;
