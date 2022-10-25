
import Header from '../components/header'
import Container from '../components/container'


const TeamTable = () => {
  
  const team = [
    {
      player: "Mike",
      number: 8,
      pos: "C"
    },
    {
      player: "Abdullah",
      number: 8,
      pos: "PG"
    },
    {
      player: "Mohammed",
      number: 24,
      pos: "SG"
    },
    {
      player: "Salah",
      number: 7,
      pos: "PF"
    },
    {
      player: "AJ",
      number: 1,
      pos: "SF"
    }
  ]
  
  return(
    <div className='m-auto my-7 shadow-sm max-w-lg overflow-hidden rounded-xl'>
      <table className="w-full text-left table-fixed">
        <thead className=' text-white'>
          <tr>
            <th colSpan={3} className="py-3 bg-primary text-xl text-center"> Team </th>
          </tr>
          <tr  className='bg-primary-100 text-center  text-primary-500'>
            <th className= 'w-40 px-6 py-3 border border-white'> Name </th>
            <th className='px-3 py-3 border border-white'> No. </th>
            <th className='px-3 py-3 border border-white'> Pos </th>
          </tr>
        </thead>
        <tbody>
          { team.map((team,index) => (
            <tr key={index} className={index%2 ? "bg-white hover:text-primary hover:font-bold " : "bg-gray hover:text-primary hover:font-bold "} > 
              <td className='px-3 py-4'> {team.player} </td>
              <td className='px-3 py-4'> {team.number}  </td>
              <td className='px-3 py-4'> {team.pos} </td>
            </tr>
         ))}
        </tbody>
      </table>
    </div>
  )
}



const Teams = () => {

    const teams = [
        {
            name: 'Top Akhs'
        },
        {
            name: 'Dub Nation'
        },
        {
            name: 'Akatsuki'
        },
        {
            name: 'Springfield'
        },
        {
            name: 'Mali World'
        },
        {
            name: 'Young Sahabs'
        },

    ]


  return (
      <Container>
      <Header title='Teams | Muslim League CT'/> 
      <h2 className='text-2xl m-8 text-primary font-bold text-center md:text-4xl'> Teams </h2>
      <div className='flex flex-col justify-between flex-wrap h-36 max-w-sm m-auto'>

          { teams.map((team,index) => (
            <button  key={index} className='font-bold bg-primary text-white m-2  py-1 px-3 rounded-lg'>
              {team.name} 
            </button>
         ))}

      </div>
       <TeamTable/>
      </Container>
  )
}

export default Teams 
