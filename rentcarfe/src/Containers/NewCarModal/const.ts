import {CAR_DATA_KEYS, CarDataKeysUnion} from "../../globalTypes";
import * as yup from 'yup';

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

export const NewCarValidationSchema = {
    [CAR_DATA_KEYS.imported]: yup.boolean(),
    [CAR_DATA_KEYS.damaged]: yup.boolean(),
    [CAR_DATA_KEYS.rightHand]: yup.boolean(),
    [CAR_DATA_KEYS.VIN]: yup.string().required("Required"),
    [CAR_DATA_KEYS.productionYear]: yup.number().min(4, 'Invalid year').required("Required"),
    [CAR_DATA_KEYS.brand]: yup.string().min(2, 'Invalid brand').required("Required"),
    [CAR_DATA_KEYS.model]: yup.string().min(2, 'Invalid model').required("Required"),
    [CAR_DATA_KEYS.fuelType]: yup.string().min(2, 'Enter valid value').required("Required"),
    [CAR_DATA_KEYS.power]: yup.number().required("Required"),
    [CAR_DATA_KEYS.engineSize]: yup.number().required("Required"),
    [CAR_DATA_KEYS.doorsAmount]: yup.number().required("Required"),
    [CAR_DATA_KEYS.gearbox]: yup.string().required("Required"),
    [CAR_DATA_KEYS.gearboxVersion]: yup.string().required("Required"),
    [CAR_DATA_KEYS.generation]: yup.string().required("Required"),
    [CAR_DATA_KEYS.mileage]: yup.string().required("Required"),
    [CAR_DATA_KEYS.title]: yup.string().required("Required"),
    [CAR_DATA_KEYS.type]: yup.string().required("Required"),
    [CAR_DATA_KEYS.color]: yup.string().required("Required")
}