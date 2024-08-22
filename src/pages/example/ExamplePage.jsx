
import MyTable from '../../components/common/MyTable';

const ExamplePage = () => {

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Adress', accessor: 'adress' },
  ];

  const data = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', adress: 'Bujumnbura' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', adress: 'Bujumnbura' },
  ];

  return (
    <div>
      <h1>User List</h1>
      <MyTable columns={columns} data={data} />
    </div>

  )
}

export default ExamplePage