export default class TankopediaService {
  _apiBase = "https://cors-anywhere.herokuapp.com/http://gallerytvr.site/api";
  //_apiBase = "http://localhost:3000";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  };

  getAllPremium = async () => {
    const res = await this.getResource(`/premium/`);
    return res //res.results
      .map(this._transformPremium)
      .slice(0, 5);
  };

  getAllHeavy = async () => {
    const res = await this.getResource(`/heavy/`);
    return res //res.results
      .map(this._transformHeavy)
      .slice(0, 5);
  };

  getAllMedium = async () => {
    const res = await this.getResource(`/medium/`);
    return res //res.results
      .map(this._transformMedium)
      .slice(0, 5);
  };

  getAllLight = async () => {
    const res = await this.getResource(`/medium/`);
    return res //res.results
      .map(this._transformLight)
      .slice(0, 5);
  };

  getAllPtSau = async () => {
    const res = await this.getResource(`/medium/`);
    return res //res.results
      .map(this._transformPtSau)
      .slice(0, 5);
  };

  getAllSau = async () => {
    const res = await this.getResource(`/medium/`);
    return res //res.results
      .map(this._transformSau)
      .slice(0, 5);
  };

  getPremium = async (id) => {
    const premium = await this.getResource(`/premium/${id}/`);
    return this._transformPremium(premium);
  };

  getHeavy = async (id) => {
    const heavy = await this.getResource(`/heavy/${id}/`);
    return this._transformHeavy(heavy);
  };

  getMedium = async (id) => {
    const medium = await this.getResource(`/medium/${id}/`);
    return this._transformMedium(medium);
  };

  getLight = async (id) => {
    const light = await this.getResource(`/light/${id}/`);
    return this._transformLight(light);
  };

  // getPtSau = async (id) => {
  //   const light = await this.getResource(`/ptsau/${id}/`);
  //   return this._transformPtSau(ptsau);
  // };

  // getSau = async (id) => {
  //   const light = await this.getResource(`/sau/${id}/`);
  //   return this._transformSau(sau);
  // };

  

  getHeavyImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/heavy_tanks/${id}.jpg`;
  };

  getMediumImage = ({ id }) => {
    return `https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/medium_tanks/${id}.jpg`;
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    //console.log(item.url.match(idRegExp)[1]);
    return item.url.match(idRegExp)[1];
  };

  _transformPremium = (premium) => {
    return {
      id: this._extractId(premium),
      name: premium.name,
      overview: premium.overview,
      rapidity: premium.rapidity,
      strength: premium.strength,
    };
  };

  _transformHeavy = (heavy) => {
    return {
      id: this._extractId(heavy),
      name: heavy.name,
      damage: heavy.damage,
      breakingThrough: heavy.breaking_through,
      weight: heavy.weight,
      strength: heavy.strength,
      bodyArmor: heavy.body_armor,
      towerArmor: heavy.tower_armor,
    };
  };

  _transformMedium = (medium) => {
    return {
      id: this._extractId(medium),
      name: medium.name,
      damage: medium.damage,
      breakingThrough: medium.breaking_through,
      weight: medium.weight,
      specificPower: medium.specific_power,
      maximumSpeed: medium.maximum_speed,
      towerTurningSpeed: medium.tower_turning_speed,
    };
  };
}
