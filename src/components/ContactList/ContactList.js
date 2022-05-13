import React from 'react';
import propTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contactsArr, deleteContact }) => {
  return (
    <div>
      <ul className={style.listBlock}>
        {contactsArr.length > 0 &&
          contactsArr.map(({ name, number, id }) => {
            return (
              <li className={style.list} key={id}>
                <p>
                  {name} : {number}
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
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ),
};

export default ContactList;
