import {useState, useEffect} from 'react'
import { Loading } from '../components'

export default function Capsules() {
    const [capsules, setCapsules] = useState([])
    useEffect(() => {
const fetchCapsules = async() => {
    const res = await fetch('https://api.spacexdata.com/v4/capsules')
    const data = await res.json()
    setCapsules(data)
}
fetchCapsules()


    }, [])
  return (
    <>
   {!capsules ? <Loading/> :  <section className='py-32'>
        <h2 className='heading text-center mb-10'>Capsules</h2>
      
    <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
       {capsules.map(({id, 
       type, status, serial,launches, last_update, land_landings, water_landings, reuse_count }) => (
        <article key={id} className='articles'>
            <h2 className='text-xl font-bold mb-5'>{type}, <span className='text-base opacity-75'>{serial}</span></h2>
            <ul>
                <li className='mb-1'>{launches.length} launches</li>
                <li className='mb-1'>{land_landings} Land Landings</li>
                <li className='mb-1'>{water_landings} Water Landings</li>
                <li className='mb-1'>Reused {reuse_count} times</li>
                {status === 'active' ? <li className='text-emerald-500'>Active</li> : <li className='text-rose-500'>No Active</li>}
              
              
            </ul>
            <p className='mt-5 opacity-75'>{last_update}</p>

        </article>
       )
        )}
    </div>
    </section>}
    </>
  )
}
