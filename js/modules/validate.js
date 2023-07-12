import {
  Options,
} from './options.js';

import {
  sendData,
} from './send-data.js';

export const validateForms = () => {
  const forms = document.querySelectorAll( 'form[data-validate]' );

  if ( forms.length < 1 ) return;

  forms.forEach( ( form ) => {
    const formID = `#${form.id}`;
    const validationRules = new JustValidate( formID, Options.ValidationErrors );
    const requiredFields = document.querySelectorAll( `${formID} [required]` );
    new JustPhoneMask( Options.Mask );

    if ( requiredFields.length < 1 ) return;

    requiredFields.forEach( ( input ) => {
      switch ( input.dataset.validate ) {
        case 'name':
          validationRules.addField( `${formID} [data-validate="name"]`, [ {
            rule: 'required',
            value: true,
            errorMessage: 'Поле обов’язкове для заповнення'
          }, ] );
          break;
        case 'email':
          validationRules.addField( `${formID} [data-validate="email"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обов’язкове для заповнення'
            },
            {
              rule: 'email',
              errorMessage: 'Некоректна адреса електронної пошти',
            },
          ] );
          break;
        case 'phone':
          validationRules.addField( `${formID} [data-validate="phone"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обов’язкове для заповнення',
            },
            {
              rule: 'minLength',
              value: document.querySelector( `${formID} [data-validate="phone"]` ).dataset.mask.length,
              errorMessage: `Введіть телефон у форматі ${document.querySelector( `${formID} [data-validate="phone"]` ).dataset.mask}`,
            },
          ] );
          break;
        case 'message':
          validationRules.addField( `${formID} [data-validate="message"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обов’язкове для заповнення',
            },
            {
              rule: 'minLength',
              value: 10,
              errorMessage: 'Занадто коротке повідомлення',
            },
            {
              rule: 'maxLength',
              value: 200,
              errorMessage: 'Довжина повідомлення перевищує 200 символів',
            },
          ] );
          break;
        case 'confirm':
          validationRules.addField( `${formID} [data-validate="confirm"]`, [ {
            rule: 'required',
            value: true,
            errorMessage: 'Підтвердьте згоду на обробку персональних даних',
          }, ] );
          break;
      }
    } );
    validationRules.onSuccess( ( evt ) => {
      sendData( evt );
    } );
  } );
};
