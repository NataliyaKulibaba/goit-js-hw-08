"use strict"

import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const textareaEl = document.querySelector("textarea");
const inputEl = document.querySelector("input");

const STORAGE_KEY = "feedback-form-state";

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(saveDataEl, 500));


let formData = {};

function saveDataEl(event) {
  formData[event.target.name] = event.target.value;
  
  const saveData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, saveData);
};


function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
 
  formData = {};

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}


function saveFormData() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  if (savedMsg) { 
       const pasrsedSavedMsg = JSON.parse(savedMsg);

    formData = pasrsedSavedMsg;
      
    inputEl.value = pasrsedSavedMsg.email;
    textareaEl.value = pasrsedSavedMsg.message;
  }; 
}

saveFormData();
    
    
 
