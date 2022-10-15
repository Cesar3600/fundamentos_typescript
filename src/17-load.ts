import _ from 'lodash';

const data = [
  {
    userName: 'nico',
    role: 'admin',
  },
  {
    userName: 'valentina',
    role: 'seller',
  },
  {
    userName: 'zulema',
    role: 'seller',
  },
  {
    userName: 'santiago',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
