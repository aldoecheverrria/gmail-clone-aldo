import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import './SendMail.css'


function SendMail() {

  const { register, handleSubmit, watch, formState: {errors} } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    
    };

  

    return (
      <div className="sendMail">
        <div className="sendMail__header">
          <h3>Nuevo correo</h3>
          <CloseIcon
            
            className="sendMail__close"
          />
        </div>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            placeholder="Para"
            type="email"
            {...register("to", {
              required: "Required",
            })}
          />
          {errors.to && <p className="sendMail__error">Destinatario requerido</p>}
  
          <input
            name="subject"
            placeholder="Asunto"
            type="text"
            {...register("subject", {
              required: "Required",
            })}
          />
          {errors.subject && <p className="sendMail__error">Asunto requerido</p>}
  
          <input
            name="message"
            placeholder="Cuerpo del mensaje..."
            type="text"
            className="sendMail__message"
            {...register("message", {
              required: "Required",
            })}
          />
         {errors.message && <p className="sendMail__error">Mensaje requerido</p>}
  
          <div className="sendMail__options">
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    );
  }
  
  export default SendMail;