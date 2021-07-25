import axios from "axios";
import setAuth from "../utils/setAuth";
import { GET_CATEGORIES, GET_CATEGORY_DATA, CATEGORY_NAME } from "./types";

// GET CATEGORIES
export const getCategories = (input) => async (dispatch) => {
  setAuth();
  let getCategories_API =
    "https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob";
  try {
    const response = await axios.get(getCategories_API);
    dispatch({
      type: GET_CATEGORIES,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// GET CATEGORY DATA
export const getCategoryData = (input) => async (dispatch) => {
  setAuth();
  let getCategoryData_API = `https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${input.val}`;
  try {
    const response = await axios.get(getCategoryData_API, { headers: { 'Content-type': 'application/json' } });
    dispatch({
      type: GET_CATEGORY_DATA,
      payload: response.data,
    });
    dispatch({
      type: CATEGORY_NAME,
      payload: input.name,
    });
  } catch (err) {
    console.log(err);
  }
};
