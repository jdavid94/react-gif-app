
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);
    //const handleAdd = () => {
    //    setCategories([...categories, 'Hunter X Hunter'])
    //}
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>            
            <ol>
                { 
                    categories.map((category)=> {
                        return <GifGrid key={category}  category={category} />
                    })
                }
            </ol>            
        </>        
    )
}