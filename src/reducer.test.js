import {generateAuralUpdate, restartGame, makeGuess} from './actions';
import {hotColdReducer} from './reducer';

describe ('hotColdReducer', () => {
  it('should set the inital state', () =>{
    let state = hotColdReducer(undefined, {type:'_unknowm'});
    expect (state.guesses).toEqual([]);
    expect (state.feedback).toEqual('Make your guess!');
    expect (state.auralStatus).toEqual('');
    expect (state.correctAnswer).toBeGreaterThan(0);
    expect (state.correctAnswer).toBeLessThanOrEqual(100);
  })
})

describe ('restartGame', () => {
it('it should start a new game', () => {
    let state = {
      guesses: [17, 95, 65], 
      feedback: 'You\'re cold!', 
      auralStatus: 'Here\'s the status of the game',
      correctAnswer: 4};
    const correctAnswer = 57;  
    state = hotColdReducer(state, restartGame(correctAnswer));
    expect (state.guesses).toEqual([]);
    expect (state.feedback).toEqual('Make your guess!');
    expect (state.auralStatus).toEqual('');
    expect (state.correctAnswer).toEqual(correctAnswer)
  })
})

describe ('makeGuess', () => {
 it('Should make a guess', () => {
   let state = {
      guesses: [],
      feedback: '',
      correctAnswer: 100 // Negative so different to new game
  };

  state = hotColdReducer(state, makeGuess(25));
  expect(state.guesses).toEqual([25]);
  expect(state.feedback).toEqual("You're Ice Cold...");

  state = hotColdReducer(state, makeGuess(60));
  expect(state.guesses).toEqual([25, 60]);
  expect(state.feedback).toEqual("You're Cold...");

  state = hotColdReducer(state, makeGuess(80));
  expect(state.guesses).toEqual([25, 60, 80]);
  expect(state.feedback).toEqual("You're Warm.");

  state = hotColdReducer(state, makeGuess(95));
  expect(state.guesses).toEqual([25, 60, 80, 95]);
  expect(state.feedback).toEqual("You're Hot!");

  state = hotColdReducer(state, makeGuess(100));
  expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
  expect(state.feedback).toEqual('You got it!');
  });

it('should generate aural updates', () => {
  let state = {
    guesses: [25, 3, 90],
    feedback: "You're Warm.",
    auralStatus: ''
    };
    state = hotColdReducer(state, generateAuralUpdate());
      expect(state.auralStatus).toEqual(
      "Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25"
    );
  });
})
