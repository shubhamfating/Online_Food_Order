import React from 'react'
import ItemCard from './Itemcard'
import dataa from './dataa'
import Navbar from './Navbar'


const Home = () => {
    
  return (
    <>
    <Navbar/>
     <h1 className='text-center mt-3'>All Items</h1> 
      <section className='py-4 container'>
        <div className='row justify-content-center'>
            {dataa.productData.map((item, index)=>{
                return(

                    <ItemCard 
                    img={item.img} 
                    title={item.title} 
                    desc={item.desc} 
                    price={item.price} 
                    item={item} 
                    key={index}/>

                )
            } )}

        </div>

      </section>
    </>
  )
}


export default Home

