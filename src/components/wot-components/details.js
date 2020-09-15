import React from "react";
import ItemDetails from "../item-details";
import { Record } from "../app/app";
import { withService } from "../../hocs";

const heavyDetails = ({ selectedItem, service }) => {
  const { getHeavy, getHeavyImage } = service;
  return (
    <ItemDetails
      selectedItem={selectedItem}
      getData={getHeavy}
      getImage={getHeavyImage}
    >
      <Record label="Name" field="name" />
      <Record label="Damage" field="damage" />
    </ItemDetails>
  );
};

const HeavyDetails = withService(heavyDetails);

const mediumDetails = ({ selectedItem, service }) => {
  const { getMedium, getMediumImage } = service;
  return (
    <ItemDetails
      selectedItem={selectedItem}
      getData={getMedium}
      getImage={getMediumImage}
    >
      <Record label="Name" field="name" />
      <Record label="Damage" field="damage" />
    </ItemDetails>
  );
};
const MediumDetails = withService(mediumDetails);

const lightDetails = ({ selectedItem, service }) => {
  const { getLight, getLightImage } = service;
  return (
    <ItemDetails
      selectedItem={selectedItem}
      getData={getLight}
      getImage={getLightImage}
    >
      <Record label="Name" field="name" />
      <Record label="Damage" field="damage" />
    </ItemDetails>
  );
};
const LightDetails = withService(lightDetails);

const ptSauDetails = ({ selectedItem, service }) => {
  const { getPtSau, getPtSauImage } = service;
  return (
    <ItemDetails
      selectedItem={selectedItem}
      getData={getPtSau}
      getImage={getPtSauImage}
    >
      <Record label="Name" field="name" />
      <Record label="Damage" field="damage" />
    </ItemDetails>
  );
};
const PtSauDetails = withService(ptSauDetails);

const sauDetails = ({ selectedItem, service }) => {
  const { getSau, getSauImage } = service;
  return (
    <ItemDetails
      selectedItem={selectedItem}
      getData={getSau}
      getImage={getSauImage}
    >
      <Record label="Name" field="name" />
      <Record label="Damage" field="damage" />
    </ItemDetails>
  );
};
const SauDetails = withService(sauDetails);

export { HeavyDetails, MediumDetails, LightDetails, PtSauDetails, SauDetails };
