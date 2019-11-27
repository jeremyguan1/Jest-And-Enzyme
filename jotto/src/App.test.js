import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../test/testUtils";
import App from "./App";
import { guessWord } from "./actions";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux properties", () => {
  test("should has access to success state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;

    expect(successProps).toBe(success);
  });

  test("should has access to `secret word` state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });

  test("should has access to `guess` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProps = wrapper.instance().props.guessedWords;
    expect(guessedWordsProps).toBe(guessedWords);
  });

  test("should has get getSecretWord function", () => {
    const wrapper = setup();
    const getSecretWordProps = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProps).toBeInstanceOf(Function);
  });
});
