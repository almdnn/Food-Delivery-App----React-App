import classes from './Checkout.module.css';
import React, {useRef, useState} from 'react';

    const isEmpty = value => value.trim() === '';
    const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })

    const confirmHandler = (event) => {
      event.preventDefault();

      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredPostalCode = postalCodeInputRef.current.value;
      const enteredCity = cityInputRef.current.value;
    
      const enteredNameisValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreet);
      const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
      const enteredCityIsValid = !isEmpty(enteredCity);

      const formIsValid = enteredNameisValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;
      
      setFormInputsValidity({
          name: enteredName,
          street: enteredStreet,
          postalCode: enteredPostalCode,
          city: enteredCity
      })
      
      if (!formIsValid){
          return;
      }
      props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity
      });
      console.log(props.onConfirm)
    };

    
    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
  
    return (
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={nameInputRef} />
          {!formInputsValidity.name && <p>Please enter valid name</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' ref={streetInputRef} />
          {!formInputsValidity.street && <p>Please enter valid name</p>}
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={postalCodeInputRef} />
          {!formInputsValidity.postalCode && <p>Please enter valid name</p>}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={cityInputRef} />
          {!formInputsValidity.city && <p>Please enter valid name</p>}
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    );
  };

export default Checkout;