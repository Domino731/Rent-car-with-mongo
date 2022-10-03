import {CAR_DATA_KEYS, CarDataKeysUnion} from "../../globalTypes";
import * as yup from 'yup';

export const NewCarInitialValues: Record<CarDataKeysUnion, any> = {
    [CAR_DATA_KEYS.imported]: false,
    [CAR_DATA_KEYS.damaged]: false,
    [CAR_DATA_KEYS.rightHand]: false,
    [CAR_DATA_KEYS.VIN]: '1234567890',
    [CAR_DATA_KEYS.productionYear]: '2008',
    [CAR_DATA_KEYS.brand]: 'BMW',
    [CAR_DATA_KEYS.model]: 'x3',
    [CAR_DATA_KEYS.fuelType]: 'Gas',
    [CAR_DATA_KEYS.power]: 450,
    [CAR_DATA_KEYS.engineSize]: 6300,
    [CAR_DATA_KEYS.doorsAmount]: 4,
    [CAR_DATA_KEYS.gearbox]: 'AUTO',
    [CAR_DATA_KEYS.gearboxVersion]: 'AUTO',
    [CAR_DATA_KEYS.generation]: '3',
    [CAR_DATA_KEYS.mileage]: '140000',
    [CAR_DATA_KEYS.title]: 'BMW X3',
    [CAR_DATA_KEYS.type]: 'SUV',
    [CAR_DATA_KEYS.color]: 'RED'
}

export const NewCarValidationSchema = yup.object().shape({
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
})