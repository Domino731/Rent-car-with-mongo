export enum CAR_DATA_KEYS {
    imported = 'imported',
    damaged = 'damaged',
    rightHand = 'rightHand',
    VIN = 'VIN',
    productionYear = 'productionYear',
    brand = 'brand',
    model = 'model',
    fuelType = 'fuelType',
    power = 'power',
    engineSize = 'engineSize',
    doorsAmount = 'doorsAmount',
    gearbox = 'gearbox',
    gearboxVersion = 'gearboxVersion',
    generation = 'generation',
    mileage = 'mileage',
    title = 'title',
    type = 'type',
    color = 'color'
}

export type CarDataKeysUnion = keyof typeof CAR_DATA_KEYS;