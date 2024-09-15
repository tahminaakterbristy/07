
const Banner = () => {
    return (
        <div>
            <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('src/assets/mid-shot-chef-plating-meal_23-2148794089.avif')"
      }}
    >
      <div className="bg-white bg-opacity-40 p-12 rounded-lg text-center w-full mt-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cooking Heaven</h1>
        <p className="text-lg mb-6 text-slate-200">
          Cooking is an art, and it's not just about following a recipe. <br></br>It's
          about finding your passion,<br></br> experimenting with ingredients, and creating
          something <br></br>truly delicious for you and your loved ones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
         
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">
            Learn to Cook
          </button>
          <button className="px-6 py-3 btn-ghost text-white font-semibold border-white hover:bg-green-600 transition duration-300 rounded-lg ">
           Our Feedback
          </button>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default Banner;