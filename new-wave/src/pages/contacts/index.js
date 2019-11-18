import React from 'react';
import ContactUsForm from '../../common/contactUsForm';

export default function ContactsPage() {
  return (
    <div className="text-center">
      <h2 className="p-3 text-primary">Контактна інформація</h2>
      <img
        className="p-2 pb-3"
        src="./assets/NW_logo_sm_1.png"
        alt="About Us"
      />
      <br/>
      <br/>
      <p>Контактувати з організаційним комітетом</p>
      <h3>“Нової Української Хвилі”</h3>
      <p>можна через Мирославу Роздольську за адресою:</p>
      <br/>
      <p>
        "New Ukrainian Wave"<br/>
        14 Peveril Road<br/>
        Stamford, CT 06902
      </p>
      <a href="mailto:newwave4@gmail.com?subject=New%20Wave%204&body=">newwave4@gmail.com</a>
      <ContactUsForm/>
    </div>
  );
}
