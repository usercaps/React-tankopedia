export default class TankopediaService {

  //_apiBase = 'https://us-central1-socialteach-7edbe.cloudfunctions.net/createScream';
  _apiBase = 'https://cors-anywhere.herokuapp.com/http://gallerytvr.site/api/';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllHeavy = async () => {
    const res = await this.getResource(`/heavy/`);
    return res  //res.results
      .map(this._transformTank)
      .slice(0, 15);
  };
  getAllMedium = async () => {
    const res = await this.getResource(`/medium/`);
    return res  //res.results
      .map(this._transformTank)
      .slice(0, 15);
  };
  getAllLight = async () => {
    const res = await this.getResource(`/light/`);
    return res  //res.results
      .map(this._transformTank)
      .slice(0, 15);
  };

  getHeavy = async (id) => {
    const tank = await this.getResource(`/heavy/${id}/`);
    return this._transformTank(tank);
  };
  getMedium = async (id) => {
    const tank = await this.getResource(`/medium/${id}/`);
    return this._transformTank(tank);
  };
  getLight = async (id) => {
    const tank = await this.getResource(`/light/${id}/`);
    return this._transformTank(tank);
  };

  getAllPremium = async () => {
    const res = await this.getResource(`/premium/`);
    return res   //res.results
      .map(this._transformPremium)
      .slice(0, 5);
  };

  getPremium = async (id) => {
    const premium = await this.getResource(`/premium/${id}/`);
    return this._transformPremium(premium);
  };



  _transformPremium = (premium) => {
    return {
      id: premium.id,
      name: premium.name,
      overview: premium.overview,
      rapidity: premium.rapidity,
      strength: premium.strength,
    };
  };


  _transformTank = (tank) => {
    return {
      id: tank.id,
      name: tank.name,
      damage: tank.damage,
      breakingThrough: tank.breaking_through,
      weight: tank.weight,
      strength: tank.strength,
      bodyArmor: tank.body_armor,
      towerArmor: tank.tower_armor,
    }
  }
}
