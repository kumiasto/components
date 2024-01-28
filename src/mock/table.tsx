import { Columns } from '../components/table/types';

export const data: Array<Data> = [
  {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    age: 50,
    gender: 'male',
    email: 'atuny0@sohu.com',
    phone: '+63 791 675 8914',
  },
  {
    id: 2,
    firstName: 'Sheldon',
    lastName: 'Quigley',
    age: 28,
    gender: 'male',
    email: 'hbingley1@plala.or.jp',
    phone: '+7 813 117 7139',
  },
  {
    id: 3,
    firstName: 'Terrill',
    lastName: 'Hills',
    age: 38,
    gender: 'male',
    email: 'rshawe2@51.la',
    phone: '+63 739 292 7942',
  },
  {
    id: 4,
    firstName: 'Miles',
    lastName: 'Cummerata',
    age: 49,
    gender: 'male',
    email: 'yraigatt3@nature.com',
    phone: '+86 461 145 4186',
  },
  {
    id: 5,
    firstName: 'Mavis',
    lastName: 'Schultz',
    age: 38,
    gender: 'male',
    email: 'kmeus4@upenn.edu',
    phone: '+372 285 771 1911',
  },
  {
    id: 6,
    firstName: 'Alison',
    lastName: 'Reichert',
    age: 21,
    gender: 'female',
    email: 'jtreleven5@nhs.uk',
    phone: '+351 527 735 3642',
  },
  {
    id: 7,
    firstName: 'Oleta',
    lastName: 'Abbott',
    age: 31,
    gender: 'female',
    email: 'dpettegre6@columbia.edu',
    phone: '+62 640 802 7111',
  },
];

export const columns: Array<Columns<Data, keyof Data>> = [
  {
    key: 'firstName',
    header: 'First Name',
  },
  {
    key: 'lastName',
    header: 'Last Name',
  },
  {
    key: 'age',
    header: 'Age',
    sortable: true,
  },
  {
    key: 'gender',
    header: 'Gender',
  },
  {
    key: 'email',
    header: 'Email',
  },
  {
    key: 'phone',
    header: 'Phone',
  },
  {
    key: 'options',
    optionsCol: (
      <div className='flex justify-center'>
        <button>...</button>
      </div>
    ),
  },
];
