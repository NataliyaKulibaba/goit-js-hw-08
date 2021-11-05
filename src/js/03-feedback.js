"use strict"

import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const textareaEl = document.querySelector("textarea");
const inputEl = document.querySelector("input");

const STORAGE_KEY = "feedback-form-state";

const formData = {
  
};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(saveDataEl, 500));

saveInputMsg();



function saveDataEl(event) {
  formData[event.target.name] = event.target.value;
  
  const saveData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, saveData);
};


function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}


function saveInputMsg() {
  const saveMsg = localStorage.getItem(STORAGE_KEY);
  if (saveMsg) { 
   
    const pasrsedSavedMsg = JSON.parse(saveMsg);
    textareaEl.value = pasrsedSavedMsg.message;
    inputEl.value = pasrsedSavedMsg.email;

    // const pasrsedSavedMsg = Object.values(JSON.parse(saveMsg));
    // console.log(...pasrsedSavedMsg);

    //  textareaEl.value = pasrsedSavedMsg[1];
    // inputEl.value = pasrsedSavedMsg[0];
    
  };
}

