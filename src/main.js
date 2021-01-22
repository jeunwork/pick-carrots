'use strict';
import PopUp from './popup.js';
import * as sound from './sound.js';
import {GameBuilder, Reason } from './game.js';

const gameFinishPopUp = new PopUp();

const game = new GameBuilder()
    .withGameDuration(5)
    .withCarrotCount(10)
    .withBugCount(10)
    .build();

game.setGameStopListener((reason) => {
    console.log(reason);
    let message;
    switch(reason) {
        case Reason.cancel:
            message = 'Replay❓';
            sound.playAlert();
            break;
        case Reason.win:
            message = 'You won💕';
            sound.playWin();
            break;
        case Reason.lose:
            message = 'You lost💦';
            sound.playBug();
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishPopUp.showWithText(message);
});

gameFinishPopUp.setClickListener(()=> {
    game.start();
});