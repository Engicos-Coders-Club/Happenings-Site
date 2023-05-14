function TicketsSection(props) {
  return (
    <div className="mx-auto md:pl-16 bg-black text-white h-screen">
      <div className="py-14 h-screen">
        <div className="w-[80vw] md:w-[60vw] mx-auto">
          <h1
            className="uppercase text-5xl md:text-7xl font-bold text-center mb-2"
            style={{
              fontFamily: "'MangoGrotesque', 'Oswald', 'Bebas Neue', san-serif",
            }}
          >
            Get your <span className="text-cus-bright-orange">Tickets</span> Now
          </h1>
        </div>
        <div className="md:w-3/4 mx-auto h-[80vh] px-4">
          <iframe
            id="ts-iframe"
            src="https://www.townscript.com/v2/widget/happenings-23-341333/booking"
            height="100%"
            width="100%"
            className="rounded-md border-dashed border-4 border-orange-800"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default TicketsSection;
