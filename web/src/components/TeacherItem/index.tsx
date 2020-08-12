import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://i.pinimg.com/originals/40/48/17/404817db5ec123721a0f418096f37929.jpg" alt="Gandalf"/>
                <div>
                    <strong>Gandalf, o Cinzento</strong>
                    <span>História</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /><br />
                Nobis officiis sunt sed natus adipisci minus quas sapiente nulla praesentium autem,
                assumenda earum dicta quis et, in soluta, enim ab eius inventore ad aspernatur modi 
                nisi iure numquam. Exercitationem, accusamus sint?
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;