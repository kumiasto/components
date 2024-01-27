import TransferList from './components/transfer-list';

function App() {
  const onChange = (values: ItemsType) => console.log('Seleceted data', values);

  return (
    <div className='h-screen w-screen'>
      <TransferList
        leftLabel='Left'
        rightLabel='Right'
        onChange={onChange}
        items={[
          {
            id: 1,
            name: 'Chelsey Dietrich',
          },
          {
            id: 2,
            name: 'Ervin Howel',
          },
          {
            id: 3,
            name: 'Dennis Schulist',
          },
          {
            id: 4,
            name: 'Victor Plain',
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
          },
          {
            id: 6,
            name: 'Ervin Howel',
          },
          {
            id: 7,
            name: 'Dennis Schulist',
          },
        ]}
      />
    </div>
  );
}

export default App;
