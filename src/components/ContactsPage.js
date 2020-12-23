import React from 'react'

function ContactsPage (props) {

  return (
    <div>
      <h3>Наш адрес: г. Грозный, ул.Трошева, 7 - напротив 7 аптеки в ТД "Медина"</h3>
      <p>2 этаж - кабинет №7</p>
      <div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A20565afe9740082762fbe02db2b64b5dc3e6fb1abc0a4a5b3e4de2dbd7349e58&amp;source=constructor"
          width="100%" height="450" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

export default ContactsPage