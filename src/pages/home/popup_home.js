import React from 'react';
import './popup_home.css';
import { Popup_home_card } from '../../components/card/popup_home_card';

export default function Popup_home({closePopup}) {
    return (
        <div onClick={(e) => e.stopPropagation()}>
            <div className="popup_home">
                <img src='./images/pie-and-charts.png' alt='logo' className="logo" />

                <div className="popup_home_content">
                    <div className="popup_home_heading">
                        TCM is your 'By Air' ticket to your<br/> dream college. Select your course.
                    </div>

                    <div className="popup_home_cards">
                        <Popup_home_card 
                            course='CAT' 
                            detail='Premier MBA entrance exam India'
                            id='Cat'/>
                        

                        <Popup_home_card 
                            course='IPMAT' 
                            detail='Integrated program management aptitude test'
                            id='ipmat'/>

                        <Popup_home_card 
                            course='CLAT' 
                            detail='Law school admission test India'
                            id='clat'/>

                        <Popup_home_card 
                            course='CUET' 
                            detail='Undergraduate entrance exam central universities'
                            id='ceet'/>

                    </div>
                </div>
            </div>

                                













        </div>
    )
};