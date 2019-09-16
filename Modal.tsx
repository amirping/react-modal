import React from 'react';
import './modal.css';

const close = (handler) => {
  handler({modal:false}); 
}

export const Modal = ({
  primary = false,
  secondary = false,
  success = false,
  error = false,
  visible = false,
  parentCallback,
  elevation = 0,
  children,
  className = '',
  ...rest
}: any) => {
  const props = {
    ...rest,
  };
  return (
    <div className={ visible? 'backdrop visible' : 'backdrop hidden'}>
      <div class="modal" { ...props }>
        <div>
          modal here <button onClick={()=>close(parentCallback)}>close</button>
        </div>
        <div>
          { children }
        </div>
      </div>
    </div>
  );
};
