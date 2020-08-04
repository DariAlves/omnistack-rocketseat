import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/65798179?s=460&u=6aa9a308b21a5677c1f9e9240d3f85747c608681&v=4" alt="Gandalf"/>
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