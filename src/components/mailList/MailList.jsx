import './mailList.css';

const MailList = () => {
    return (
        <div className='mail'>
            <h1 className='mail-title'>Gagnez du temps, gagnez de l'argent !</h1>
            <span className="mail-desc">Inscrivez-vous et recevez les meilleurs deals.</span>
            <div className="mail-input-container">
                <input type="text" placeholder='Votre adresse mail'/>
                <button>S'inscrire</button>
            </div>
        </div>
    )
}

export default MailList