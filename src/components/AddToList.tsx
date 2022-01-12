import React,{useState} from 'react'
import {IProps} from './MyComponent'
import Input from '@mui/material/Input';
import { Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
interface AddToListProps{
    laptop:IProps["laptop"],
    setLaptop:React.Dispatch<React.SetStateAction<IProps["laptop"]>>
}

const AddToList:React.FC<AddToListProps>= ({laptop,setLaptop})=>{
    const navigate = useNavigate();
    const [input, setInput] = useState({
        model:"",
        url:"",
        os:"",
        processor:"",
        price:"",

    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleClick = () =>{
        if(!input.model || !input.url || !input.os || !input.processor || !input.price) return alert("Enter all the fields");
        setLaptop([
            ...laptop,
            {
                model:input.model,
                url:input.url,
                os:input.os,
                processor:input.processor,
                price:input.price,
            }
        ])
        setInput({
            model:"",
            url:"",
            os:"",
            processor:"",
            price:"",
        })
        navigate('/');
    }

    return (
        <div className='AddToList'>
            <Typography variant="h5" margin={3} color="text.secondary">Add To List</Typography>
            <Input type='text' className="input" name='model' value={input.model} placeholder='Model Name' onChange={handleChange}/>
            <Input type='text' className="input" name='url' value={input.url} placeholder='Image url' onChange={handleChange}/>
            <Input type='text' className="input" name='os' value={input.os} placeholder='Enter OS' onChange={handleChange}/>
            <Input type='text' className="input" name='processor' value={input.processor} placeholder='Enter Processor ' onChange={handleChange}/>
            <Input type='text' className="input" name='price' value={input.price} placeholder='Enter Price' onChange={handleChange}/>
            <Button  variant="contained"  className='btn' onClick={handleClick}>Add To List</Button>
        </div>
    )
}
export default AddToList
