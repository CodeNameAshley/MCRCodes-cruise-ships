const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe("Itinerary", () => {
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port("Dover");
    calais = new Port("Calais");
    itinerary = jest.fn();
  });
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    // const dover = new Port("Dover");
    // const calais = new Port("Calais");

    itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
