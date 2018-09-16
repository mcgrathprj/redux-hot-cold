import {generateAuralUpdate, restartGame, makeGuess} from './actions';
import {GENERATE_AURAL_UPDATE, RESTART_GAME, MAKE_GUESS} from './actions';

describe('generateAuralUpdate', () => {
  it('should return the correct action', () => {
    const action = generateAuralUpdate();
    expect (action.type).toEqual(GENERATE_AURAL_UPDATE)
  });
});

describe('restartGame', () => {
  it('should return the correct action', () => {
    let correctAnswer = 50;
    const action = restartGame(correctAnswer);
    expect (action.type).toEqual(RESTART_GAME);
    expect (action.correctAnswer).toEqual(correctAnswer)
  });
});

describe('makeGuess', () => {
  it('should return the correct action', () => {
    let guess = 75;
    const action = makeGuess(guess);
    expect (action.type).toEqual(MAKE_GUESS);
    expect (action.guess).toEqual(guess)
  });
});