import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {
    const {data:images,loading} = useFetchGifs( category);

    // useEffect( () => {
    //     getGifs(category).then ( imgs => setImages (imgs));
    // },[ category ])

   

    return (
        <>
            <h3 className=" animate__animated animate__fadeIn"> {category} </h3>
            { loading && <p className=" animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
               {
                 //Mostrando el arreglo de gifs en OTRO COMPONENTE 
                    images.map( img => (
                        <GifGridItem 
                            key = { img.id}
                            {...img} // se envian todas y cada una de las propiedades de img de manera independiente
                                     // es decir, id = una prop, title = una prop, url = una prop 
                        />
                  ))

                //  //Mostrando el arreglo de gifs CON DESESTRUCTURACION: 
                //     images.map( ({ id, title}) => (
                //         <li key={ id }> { title }</li>
                //   ))

                // Mostrando el arreglo de gis SIN DESESTRUCTURACION:  
                // images.map( image => {
                //     return <li key={image.id}> { image.title }</li>
                // })
               }
            
            </div>
       </>        
    )
}
