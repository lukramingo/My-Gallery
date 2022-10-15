import React from "react";

const App = () => {
  return (
    <>
      <main>
        <section className="lg:w-[900px] w-full mx-auto">
          <div className="my-10">
            {/* profile photo */}
            <div className="w-[200px] aspect-square mx-auto">
              <img className="aspect-square w-[160px] mx-auto rounded-xl" src="images/profilePhoto.png" />
              <h1 className="text-xl text-slate-600 pt-4 text-center">Rodney Cotton</h1>
              <h2 className="text-slate-500 pt-1 text-center">Helsinki, Finland</h2>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="w-32 h-16 rounded-xl bg-gray-300 text-center py-2">
                <span className="text-lg">100</span>
                <p className="text-gray-700">Posts</p>
              </div>
              <div className="w-32 h-16 rounded-xl bg-gray-300 text-center py-2">
                <span className="text-lg">2,242</span>
                <p className="text-gray-700">Follower</p>
              </div>
              <div className="w-32 h-16 rounded-xl bg-gray-300 text-center py-2">
                <span className="text-lg">1,432</span>
                <p className="text-gray-700">Following</p>
              </div>
            </div>
          </div>
          {/* images gallery part */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 mx-4 py-2"> 
            <img className="rounded-lg" src="images/photo1.png"/>
            <img className="col-span-2 rounded-lg" src="images/photo2.png" />
            <img className="col-span-2 rounded-lg" src="images/photo3.png"/>
            <img className="row-span-2 rounded-lg" src="images/photo_4.png"/>
            <img className="rounded-lg col-start-2 row-start-3" src="images/photo5.png"/>
            <img className="rounded-lg" src="images/photo6.png"/>
          </div>
        </section>
        <footer className="text-center py-4 text-slate-600 text-xl">
          <p>created by LukramIngo - devChallenges.io</p>
        </footer>
      </main>
    </>
  );
}

export default App;
