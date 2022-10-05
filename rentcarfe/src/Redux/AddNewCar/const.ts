export enum ADD_NEW_CAR_STEPS {
    BASIC_DATA = 'BASIC_DATA',
    EQUIPMENT_AND_IMAGES = 'EQUIPMENT_AND_IMAGES',
    SUMMARY = 'SUMMARY'
}

export type AddNewCarStepsUnion = keyof typeof ADD_NEW_CAR_STEPS;