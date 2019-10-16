const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportTypes = this.journeys.map((journey) => {
    return journey.transport
  })
  const uniqueTransportTypes = transportTypes.filter((journey, index) => {
    return transportTypes.indexOf(journey) === index;
  })
  return uniqueTransportTypes
  };

  // console.log("Print distinct: ", distinct);




module.exports = Traveller;
