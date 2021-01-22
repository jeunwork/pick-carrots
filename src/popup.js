'use strict';
//popup클래스에 변수 만들어줌
export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.popup');
        this.popUpMessage = document.querySelector('.popup_message');
        this.PopUpRefresh = document.querySelector('.popup_refresh');
        this.PopUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        });
    }
    setClickListener(onClick) {
        this.onClick = onClick;
    }

    
    showWithText(text) {
    this.popUpMessage.innerText = text;
    this.popUp.classList.remove('popup-hide');
}

    hide() {
        this.popUp.classList.add('popup-hide');
    }
}