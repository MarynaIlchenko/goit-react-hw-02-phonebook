import React from 'react';
import propTypes from 'prop-types';
import style from './ContactList.module.css';

export const ContactList = ({ contactsArr, deleteContact }) => {
  return (
    <div>
      <ul>
        {contactsArr.length > 0 &&
          contactsArr.map(({ name, number, id }) => {
            return (
              <li className={StyleSheet.list} key={id}>
                <p>
                  {name}:{number}
                </p>
                <button
                  type="button"
                  className={style.button}
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
ContactList.propTypes = {
  contactsArr: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
      id: propTypes.string,
    })
  ),
};
