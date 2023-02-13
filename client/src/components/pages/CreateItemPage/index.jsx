import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react';


import Button from '../../Button';
import ContentWrapper from '../../ContentWrapper';
import Input from '../../Input';

import styles from './styles.module.css'
import { createItem } from '../../../store/item/itemSlice';
import { paths } from '../../../paths';


const CreateItemPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { errors } = useSelector(state => state.item);

    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ exterior, setExterior ] = useState('');
    const [ itemImage, setItemImage ] = useState(null);

    const handleCreateItem = useCallback(() => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("exterior", exterior);
        formData.append("itemImage", itemImage);

        dispatch(createItem(formData)).then(res => {
            if(!res.error) {
                navigate(`${paths.item}/${res.payload._id}`, { replace: true });
            }
        })
    }, [name, price, category, exterior, itemImage])

    return (
        <ContentWrapper className={ styles.createItem }>
            <Button 
                onClick={() => navigate(-1)}
                isBackButton={ true }
                containerClassName={ styles.backButtonContainer }
            >
                ←Back
            </Button>

            <form className={ styles.form }>
                <h1 className={ styles.title }>Create Item</h1>

                <Input 
                    name='name'
                    placeholder='Item name'
                    error={ errors && errors.name && errors.name.message }
                    onChange={(e) => setName(e.target.value)}
                />

                <Input 
                    name='price'
                    placeholder='Item price'
                    error={ errors && errors.price && errors.price.message }
                    onChange={(e) => setPrice(e.target.value)}
                />

                <Input 
                    name='category'
                    placeholder='Category item'
                    error={ errors && errors.category && errors.category.message }
                    onChange={(e) => setCategory(e.target.value)}
                />

                <Input 
                    name='exterior'
                    placeholder='exterior'
                    error={ errors && errors.exterior && errors.exterior.message }
                    onChange={(e) => setExterior(e.target.value)}
                />

                <Input 
                    name='itemImage'
                    type='file'
                    placeholder='Item image'
                    error={ errors && errors.itemImage && errors.itemImage.message }
                    onChange={(e) => setItemImage(e.target.files[0])}
                />

                <Button  
                    containerClassName={ styles.buttonContainer }
                    onClick={ handleCreateItem }
                >
                    Create
                </Button>
            </form> 
        </ContentWrapper>
    )
}

export default CreateItemPage;