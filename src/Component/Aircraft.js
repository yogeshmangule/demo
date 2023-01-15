export default function Aircraft()
{
  const employees =[
    { empid: 101, name: 'Vikas', salary: 12000 },
    { empid: 102, name: 'Gopal', salary: 16000 },
    { empid: 103, name: 'Meena', salary: 11000 }
  ]


  return <div>

      <table className='table table-striped table bordered'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Emp ID</th>
            <th>NAme</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
        {employees.map((emp, index)=>
        <tr>
          <td>{index+1}</td>
          <td>{emp.empid}</td>
          <td>{emp.name}</td>
          <td>{emp.salary}</td>
        </tr>)}
        </tbody>
        </table>

        <br/>
        
  </div>
}