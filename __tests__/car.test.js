import uuid from 'uuid/v1';
import car from '../src/utils/car';

jest.mock('uuid/v1');

const getCurrentCarSpy = jest.spyOn(
    car, 'getCurrentCar',
);

describe('addProdToCar', () => {
    beforeAll(() => {
        uuid
        .mockReturnValueOnce(999)
        .mockReturnValueOnce(null)
        .mockReturnValue('abc');
    });

    test('check_add_prod', () => {
        const newCar = car.addProdToCar('apple', 3);
        console.log(newCar);        
        expect(uuid).toHaveBeenCalled();
        expect(uuid.mock.calls.length).toBe(1);
        expect(getCurrentCarSpy).toHaveBeenCalled();
        expect(newCar).toEqual(
          [{ id: 999, name: 'apple', count: 3 }],
        );
    });

});