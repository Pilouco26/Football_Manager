import React from 'react';
import './CoachView.css';
import {championsLeagueImage, laLigaImage} from "./Constants";

const CoachView = () => {
    return (
        <div className="container">
            <div className="left">
                <div className="title">Zinedine Zidane</div>
                <div className="picture">
                    <img src="https://futbolete.com/apuestas/wp-content/uploads/2021/04/zinedine-zidane-png-4-Transparent-Images.png" alt="Zinedine Zidane"/>
                </div>
                <div className="quote">"Fora Moros"</div>
            </div>
            <div className="right">
                <div className="matrix">
                    <div className="number">20</div>
                    <div className="number">1r</div>
                    <div className="word">Titols</div>
                    <div className="word">Millor posició</div>
                    <div className="number">77</div>
                    <div className="number">78%</div>
                    <div className="word">Victories</div>
                    <div className="word">Percentatge de victories</div>
                    <div className="number">4</div>
                    <div className="number">0</div>
                    <div className="word">Premis individuals</div>
                    <div className="word">Entrenador de l'any</div>
                </div>
                <div className="small-pictures">
                    <img className="small-picture"
                         src={championsLeagueImage}
                         alt="Champions League"/>
                    <img className="small-picture"
                         src={championsLeagueImage}
                         alt="Champions League"/>
                    <img className="small-picture"
                         src={championsLeagueImage}
                         alt="Champions League"/>
                    <img className="small-picture"
                         src={laLigaImage}
                         alt="Champions League"/>
                    <img className="small-picture"
                         src={laLigaImage}
                         alt="Champions League"/>
                </div>
            </div>
        </div>
    );
};

export default CoachView;
