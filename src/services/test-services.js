export default class TestService {
  _heavy = [
    {
      id: 1,
      name: "ИС-4 [TEST NAME]",
      damage: "390 / 390 / 530 ед.",
      breaking_through: "217 / 270 / 61 мм",
      weight: "60,02 т",
      strength: "2 500 ед.",
      body_armor: "155 / 160 / 100 мм",
      tower_armor: "250 / 200 / 170 мм",
      url: "http://localhost:3000/heavy/1",
    },

    {
      id: 2,
      name: "ОБЪЕКТ 705А [TEST NAME]",
      damage: "650 / 650 / 840 ед.",
      breaking_through: "256 / 317 / 90 мм",
      weight: "100 т",
      strength: "2 450 ед.",
      body_armor: "175 / 100 / 60 мм",
      tower_armor: "330 / 180 / 120 мм",
      url: "http://localhost:3000/heavy/2",
    },
  ];

  _medium = [
    {
      id: 1,
      name: "TYPE 59 [TEST DATA]",
    },
    {
      id: 2,
      name: "ŠKODA T 27 [TEST DATA]",
    },
  ];

  getAllHeavy = async () => {
    return this._heavy;
  };

  getHeavy = async () => {
    return this._heavy[0];
  };

  getAllMedium = async () => {
    return this._medium;
  };

  getMedium = async () => {
    return this._medium[0];
  };

  getAllLight = async () => {
    return this._medium;
  };

  getLight = async () => {
    return this._medium[0];
  };

  getAllPtSau = async () => {
    return this._medium;
  };

  getPtSau = async () => {
    return this._medium[0];
  };

  getAllSau = async () => {
    return this._medium;
  };

  getSau = async () => {
    return this._medium[0];
  };

  getHeavyImage = () => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/test/heavy/1.jpg`;
  };

  getMediumImage = () => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/test/medium/1.jpg`;
  };

  getLightImage = () => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/test/light/1.jpg`;
  };

  getPtSauImage = () => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/test/ptsau/1.jpg`;
  };

  getSauImage = () => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/test/sau/1.jpg`;
  };
}