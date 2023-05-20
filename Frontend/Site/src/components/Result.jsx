import result from "/result.png";

function Results() {
    return (
      <div className="mx-auto md:pl-16 bg-black text-white my-4">
        <div className="py-14 h-full">
          <div className="w-[80vw] md:w-[60vw] mx-auto">
            <h1
              className="uppercase text-5xl md:text-7xl font-bold text-center mb-2"
              style={{
                fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
              }}
            >
              RESULTS
            </h1>
          </div>
          <div className="md:w-3/4 mx-auto px-4">
            <img src={result} alt="Final Result" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Results;
  