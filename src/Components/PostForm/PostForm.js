import React, { useRef } from 'react';
// import axios from 'axios';
import "./PostForm.scss"


const initializeInputRefs = (labels) => {
    const inputRefs = {};
    labels.forEach(label => {
      inputRefs[label] = useRef(null);
    });
    return inputRefs;
  };

function PostForm({ onSubmit, labels, initialData, keys }) {
  const formRef = useRef();
  const inputRefs = useRef(initializeInputRefs(labels));


  const handleSubmit = async (event) => {

    event.preventDefault();

    const formData = {};
    labels.forEach((label, index) => {
      formData[keys[index]] = inputRefs.current[label].current.value;
    });

    try {
        await onSubmit(event, formData);
      } catch (err) {
        console.error(err);
      }
  };

  return (
    <section className='post-form'>
      <form className='form' ref={formRef} onSubmit={handleSubmit}>
        {labels.map((label) => (
          <div key={label}>
            <label className='form__label'>{label}:</label>
            <input
              className='form__input'
              ref={inputRefs.current[label]}
              type='text'
              id={label.toLowerCase()}
              defaultValue={initialData[label]}
            />
          </div>
        ))}
        <button className='form__button'>Post</button>
      </form>
    </section>
  );
}

export default PostForm;
