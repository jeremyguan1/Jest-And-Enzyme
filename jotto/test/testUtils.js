import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/reducers";
import { middleWares } from "../src/configuareStore";

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, "prop", component.name);
  expect(propError).toBeUndefined();
};
