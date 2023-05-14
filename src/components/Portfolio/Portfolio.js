import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import GalleryData from './GalleryData';

const Portfolio = () => {

  const [items,setItems] = useState(GalleryData);

  const filterItems =((categItem)=>{
    const updatedItem =GalleryData.filter((curElem)=>{
      return curElem.category=== categItem;
    })
    setItems(updatedItem);
  })

  return (
    <>
     <section id='portfolio' className='gallery-sec-wrp py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Heading className='' title='my portfolio' />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='gallery-wrp'>
                <div className='gallery-menu'>
                  <ul className='clearfix reset-list'>
                    <li><Link onClick={()=>setItems(GalleryData)} href='#'>All</Link></li>
                    <li><Link onClick={()=>filterItems('webdesign')} href='#'>Angular</Link></li>
                    <li><Link onClick={()=>filterItems('uiuxdesign')} href='#'>Next.js</Link></li>
                    <li><Link onClick={()=>filterItems('reactjs')} href='#'>React Js</Link></li>
                  </ul>
                </div>
                <div className='gallery-grid'>
                  <ul className='clearfix reset-list'>
                    {items.map((elem)=>{
                      const {id, image, name, button} =elem;
                      return(
                        <li>
                          <div className='gallery-grid-innr'>
                            <div className='gallery-img'>
                              <img class="img-fluid" src={image} alt='Gallery Images' />
                            </div>
                            <div className='gallery-grid-hover'>
                              <div className='gallery-grid-dsc'>
                                <h4>{name}</h4>
                                <button>{button}</button>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
     </section>
    </>
  )
}
export default Portfolio;
