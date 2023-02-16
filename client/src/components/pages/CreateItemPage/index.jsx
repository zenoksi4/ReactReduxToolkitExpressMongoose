import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createItem } from '../../../store/item/itemSlice';
import { paths } from '../../../paths';

import Button from '../../Button';
import ContentWrapper from '../../ContentWrapper';
import Input from '../../Input';

import styles from './styles.module.css'



const CreateItemPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
      const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
      if(!isLoggedIn) {
        navigate(`${paths.loginAdmin}`, { replace: true });
      }
    }, []);

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

    const titleRef = useRef(null);

    useEffect(() => {
        if (titleRef.current) {
          titleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, []);

    return (
        <ContentWrapper className={ styles.createItem }>


            <form className={ styles.form }>
                <h1 className={ styles.title } ref={titleRef}>Create Item</h1>

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

            <ContentWrapper className={ styles.buttons }>
            <Button 
                onClick={() => navigate(-1)}
                isBackButton={ true }
                containerClassName={ styles.backButtonContainer }
            >
                ←Back
            </Button>

            <Button  
                    containerClassName={ styles.buttonContainer }
                    onClick={ handleCreateItem }
            >
                    Create
            </Button>
            </ContentWrapper>
            </form> 
        </ContentWrapper>
    )
}

export default CreateItemPage;