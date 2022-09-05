const coinsAction = (globalData) => {
  return {
    type: "COINS-COUNT",
    payload: globalData,
  };
};

export default coinsAction;
