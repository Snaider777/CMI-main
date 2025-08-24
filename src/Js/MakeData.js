import { faker } from '@faker-js/faker';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(), // ya lo tenías
    // Agregamos la fecha de creación: puede ser un objeto Date o una cadena formateada yo o lo tome del fake XD.
    fechaCreacion: faker.date.between({ from: '2000-01-01', to: Date.now() }),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle([
      '100%',
      '50%',
      '25%',
    ])[0],
  };
};


export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}