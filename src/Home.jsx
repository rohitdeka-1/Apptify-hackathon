const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 flex flex-col items-center p-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8 mt-8">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-white p-2 shadow-lg">
              <img src="./logo.png"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="card-title text-3xl font-bold mb-2">ShareBite</h1>
          <p className="text-base-content/70 mb-6">
            Sharing food, reducing waste Discover delicious meals with what you
            have
          </p>

          <div className="divider">Choose an option</div>

          <div className="w-full space-y-4">
            <a href="/food-locator" className="block">
              <button className="btn btn-primary w-full text-lg group transition-all duration-300 hover:translate-y-[-2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 group-hover:animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Food Locator
              </button>
            </a>

            <a href="/donate" className="donate">
              <button className="btn btn-primary w-full text-lg group mt-4 transition-all duration-300 hover:translate-y-[-2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 group-hover:animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Donate Food
              </button>
            </a>

            <a href="/recipes" className="block">
              <button className="btn btn-secondary w-full text-lg group transition-all duration-300 hover:translate-y-[-2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 group-hover:animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Recipe Chat
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mt-12 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-6">
          Why Use No Hunger?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all">
            <div className="card-body items-center text-center">
              <div className="badge badge-primary mb-2">Feature</div>
              <h3 className="card-title text-lg">Recipe Suggestions</h3>
              <p className="text-sm">
                Get recipe ideas based on ingredients you already have
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all">
            <div className="card-body items-center text-center">
              <div className="badge badge-secondary mb-2">Feature</div>
              <h3 className="card-title text-lg">Nearby Restaurants</h3>
              <p className="text-sm">
                Find local dining options when you don't want to cook
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all">
            <div className="card-body items-center text-center">
              <div className="badge badge-accent mb-2">Feature</div>
              <h3 className="card-title text-lg">Save Favorites</h3>
              <p className="text-sm">
                Keep track of your preferred recipes and restaurants
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all">
            <div className="card-body items-center text-center">
              <div className="badge badge-neutral mb-2">Feature</div>
              <h3 className="card-title text-lg">Reduce Food Waste</h3>
              <p className="text-sm">
                Use up leftovers with creative recipe suggestions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 mt-12 text-base-content">
        <div>
          <p>© 2025 ShareBite - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
