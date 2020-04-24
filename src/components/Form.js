import axios from "axios";
import React, {useState, useEffect} from "react";
import * as yup from "yup";
import "./Home.js";
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 50%;
    margin-left: 25%;
    margin-top: 63px;
    margin-bottom: 63px;
    background-color: #f2f2f2;
    text-align: center;  
    padding: 12px 20px;
    padding-bottom: 40px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 10), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .input-fields{
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .submit{
  width: 80%;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  border: 1px solid #ccc;
  }

`



const formSchema = yup.object().shape({
    name: yup.string().required().min(3, "Name must be at least 3 characters"),
    email: yup.string().email().required().min(6, "email must have at least 6 characters"),
    size: yup.string().required(),  
    Pineapple: yup.string(),
    Sprinkles: yup.string(),
    bacon: yup.string(),
    pepperoni: yup.string(),
    instructions: yup.string().required("You must give us special"),
  });

  export default function OrderPizza() {

    const [formState, setFormState] = useState({
      name: "",
      email: "",
      size: "",
      Pineapple: "",
      Sprinkles: "",
      bacon: "",
      pepperoni: "",
      instructions: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        size: "",
        Pineapple: "",
        Sprinkles: "",
        bacon: "",
        pepperoni: "",
        instructions: "",
    })

    const [submitDisabled, setSubmitDisabled] = useState(true);

    const [post, setPost] = useState([]);
    useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setSubmitDisabled(!valid);
        });
     }, [formState]);


    const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors
            });
          });
      };
      const formSubmit = e => {
        e.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost([...post, res.data]);            

            setFormState({
              name: "",
              email: "",
              size: "",
              Pineapple: "",
              Sprinkles: "",
              bacon: "",
              pepperoni: "",
              instructions: "",
            });
          })
          .catch(err => {
            console.log(err.res);
          });
      };

    const inputChange = (event) => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]:
              event.target.type === "checkbox" ? event.target.checked : event.target.value
          };
            validateChange(event);
            setFormState(newFormData);
    }
    return(
        <MainContainer>
            <h2>Pizza Order Form</h2>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                    className="input-fields"
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                    />
                    {errors.name.length > 0 ? (<p className="error">{errors.name}</p> ): null}
                </label>

                <br/>
                <br/>
                <label htmlFor="email">
                    Email:
                    <input
                    className="input-fields" 
                    id="email"
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={inputChange}
                    />
                    {errors.email.length > 0 ? (<p className="error"> {errors.email}</p>) : null}
                </label>

                <br/>
                <br/>
                <label htmlFor="size">
                    Pizza Size:
                 <select 
                    id="size" 
                    name="size" 
                    onChange={inputChange}>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    </select>
                </label>

                <br/> 
                <br/> 
                <label htmlFor="checkbox">
                    Pineapple
                    <input 
                    id="checkbox"
                    type="checkbox"
                    checked={formState.checkbox}
                    name="Pineapple"
                    onChange={inputChange}
                    />
                    <label htmlFor="checkbox">
                    Sprinkles
                    <input 
                    id="checkbox"
                    type="checkbox"
                    checked={formState.checkbox}
                    name="Sprinkles"
                    onChange={inputChange}
                    />
                    </label>
                    </label>
                    <label htmlFor="checkbox">
                    Bacon
                    <input 
                    id="checkbox"
                    type="checkbox"
                    checked={formState.checkbox}
                    name="bacon"
                    onChange={inputChange}
                    />
                    </label>

                    <label htmlFor="checkbox">
                    Pepperoni
                    <input 
                    id="checkbox"
                    type="checkbox"
                    checked={formState.checkbox}
                    name="pepperoni"
                    onChange={inputChange}
                    />
                    </label>
                    <br/>
                    <br/>
                    <label htmlFor="instructions">
                    Special Instructions
                    <br/>
                    <textarea
                    className="input-fields" 
                    id="instructions"
                    type="text"
                    name="instructions"
                    value={formState.instructions}
                    onChange={inputChange}
                    />
                    {errors.instructions.length > 0 ? (<p className="error">{errors.instructions}</p> ): null}
                </label>
                <pre>{JSON.stringify(post, null, 2)}</pre>  
                <button className="submit" disabled={submitDisabled}>Send Order</button>
            </form>
        </MainContainer>   
      )  
  };