import type { NextPage } from 'next'
import Header from '../components/Header';


const Admin: NextPage = () => (
    <div>
        <Header title='Admin - Muslim League'/>
        <div className='h-96 bg-t-primary'>
            <h1 className='text-4xl font-bold text-center grow bg-bg-secondary'>  Admin Page </h1>
        </div>

    </div>
);

export default Admin
