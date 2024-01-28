import Separator from './components/separator';
import Table from './components/table';
import TransferList from './components/transfer-list';
import { columns, data } from './mock/table';
import { items } from './mock/transfer-list';

function App() {
  return (
    <div>
      <h2 className='p-2 text-lg'>Transfer list</h2>
      <TransferList leftLabel='Left' rightLabel='Right' items={items} />
      <Separator />
      <h2 className='p-2 text-lg'>Table</h2>
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
