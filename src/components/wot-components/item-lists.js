import ItemList from "../item-list";
import { withData, withChildFunction } from "../../hocs";
import TankopediaService from "../../services/tankopedia-service";

const { getAllHeavy, getAllMedium, getAllLight, getAllPtSau, getAllSau } = new TankopediaService();

const renderNameAndWeight = (item) => `${item.name} | ${item.weight}`;
const renderNameAndPower = (item) => `${item.name} | ${item.specificPower}`;


const HeavyList = withData(
    withChildFunction(ItemList, renderNameAndWeight),
    getAllHeavy
);

const MediumList = withData(
    withChildFunction(ItemList, renderNameAndPower),
    getAllMedium
);

const LightsList = withData(
    withChildFunction(ItemList, renderNameAndPower),
     getAllLight
);

const PtSauList = withData(
    withChildFunction(ItemList, renderNameAndPower),
    getAllPtSau
);

const SauList = withData(
    withChildFunction(ItemList, renderNameAndPower),
    getAllSau
);

export { HeavyList, MediumList, LightsList, PtSauList, SauList };