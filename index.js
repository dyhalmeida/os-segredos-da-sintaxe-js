const EntityBase = require('./src/entityBase');

// console.log(
//   new EntityBase({
//     name: 'Diego Almeida',
//     gender: 'male',
//     age: 29,
//   }).birthDay
// );

// console.log(
//   new EntityBase({
//     name: 'Mayara Rocha',
//     gender: 'female',
//     age: 24,
//   }).name
// );
// -----------------------------------------------------------------------------

const assert = require('assert');
const Employee = require('./src/employee');
const Util = require('./src/util');

const GENDER = {
  male: 'male',
  female: 'female',
};

// Mock de ano no método getFullYear do objeto Date
const CURRENT_YEAR = 2021;
Date.prototype.getFullYear = () => CURRENT_YEAR;
//

{
  const employee = new Employee({
    name: 'Diego Almeida',
    gender: GENDER.male,
  });

  assert.throws(() => employee.birthYear, {
    message: 'you must define age first',
  });
}

{
  const employee = new Employee({
    name: 'Diego Almeida',
    gender: GENDER.male,
    age: 29,
  });

  assert.deepStrictEqual(employee.name, 'Mr. Diego Almeida');
  assert.deepStrictEqual(employee.age, undefined);
  assert.deepStrictEqual(employee.gender, undefined);
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

  const expectedBirthYear = 1992;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  // Não tem set, não altera
  employee.birthYear = new Date().getFullYear() - 80;
  assert.deepStrictEqual(employee.birthYear, expectedBirthYear);

  employee.age = 80;
  assert.deepStrictEqual(employee.birthYear, 1941);

  console.log('\n --- employee ---');

  console.log('employee.name', employee.name);
  console.log('employee.age', employee.age);
  console.log('employee.gender', employee.gender);
  console.log('employee.grossPay', employee.grossPay);
  console.log('employee.netPay', employee.netPay);

  // assert.throws(() => employee.birthYear, {
  //   message: 'you must define age first',
  // });
}

const Manager = require('./src/manager');
{
  const manager = new Manager({
    name: 'Isabella',
    age: 19,
    gender: GENDER.female,
  });
  assert.deepStrictEqual(manager.name, 'Ms. Isabella');
  assert.deepStrictEqual(manager.age, undefined);
  assert.deepStrictEqual(manager.gender, undefined);
  assert.deepStrictEqual(manager.birthYear, 2002);
  assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
  assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));

  console.log('\n --- manager ---');
  console.log('manager.name', manager.name);
  console.log('manager.age', manager.age);
  console.log('manager.gender', manager.gender);
  console.log('manager.birthYear', manager.birthYear);
  console.log('manager.grossPay', manager.grossPay);
  console.log('manager.bonuses', manager.bonuses);
  console.log('manager.netPay', manager.netPay);
}
