import {CAR_DATA_KEYS, CarDataKeysUnion} from "../../globalTypes";

export const NewCarInitialValues: Record<CarDataKeysUnion, any> = {
    [CAR_DATA_KEYS.imported]: false,
    [CAR_DATA_KEYS.damaged]: false,
    [CAR_DATA_KEYS.rightHand]: false,
    [CAR_DATA_KEYS.VIN]: '',
    [CAR_DATA_KEYS.productionYear]: '',
    [CAR_DATA_KEYS.brand]: '',
    [CAR_DATA_KEYS.model]: '',
    [CAR_DATA_KEYS.fuelType]: '',
    [CAR_DATA_KEYS.power]: '',
    [CAR_DATA_KEYS.engineSize]: '',
    [CAR_DATA_KEYS.doorsAmount]: 4,
    [CAR_DATA_KEYS.gearbox]: '',
    [CAR_DATA_KEYS.gearboxVersion]: '',
    [CAR_DATA_KEYS.generation]: '',
    [CAR_DATA_KEYS.mileage]: '',
    [CAR_DATA_KEYS.title]: '',
    [CAR_DATA_KEYS.type]: '',
    [CAR_DATA_KEYS.color]: ''
}