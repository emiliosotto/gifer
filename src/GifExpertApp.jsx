import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        //console.log(newCategory);
        //categories.push('Vampire Slayer');
        if (categories.includes( newCategory )) return;

        setCategories( [newCategory,...categories] );
    }

    

  return (
    <>
        <h1>Gif Expert App</h1>

        {/*Input */}
        <AddCategory 
            // setCategories = { setCategories }  
            onNewCategory = { (value) => onAddCategory(value) }
        /> 

       
        
        
        { categories.map ( ( category ) => (
            
                <GifGrid 
                    key = { category } 
                    category = { category }
                />
            )) 
        }
            
        
         
    </>
  )
}
