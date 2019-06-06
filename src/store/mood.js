import axios from "axios";

//CONSTANTS

const SET_MOOD = "SET_MOOD";
const GET_MOOD = "GET_MOOD";
const GET_ALL_MOODS = "GET_ALL_MOODS";
// const GET_FAMILY_MOODS = 'GET_FAMILY_MOODS';

//ACTION CREATORS

const setMood = mood => ({
  type: SET_MOOD,
  mood
});
const getMood = mood => ({
  type: GET_MOOD,
  mood
});
const getMoods = allmoods => ({
  type: GET_ALL_MOODS,
  allmoods
});
// const getFamilyMoods = moods => ({
//   type: GET_FAMILY_MOODS,
//   moods
// });

//THUNKS

const setActiveMood = (userId, value) => {
  return dispatch => {
    return axios
      .post(`https://capstone-api-server.herokuapp.com/api/moods/${userId}`, {
        value: value,
        active: true
      })
      .then(data => {
        dispatch(setMood(data));
      })
      .catch(e => console.log(e));
  };
};

const getActiveMood = id => {
  return dispatch => {
    return axios
      .get(`https://capstone-api-server.herokuapp.com/api/moods/${id}`)
      .then(response => response.data)
      .then(data => dispatch(getMood(data)))
      .catch(e => console.log(e));
  };
};

const getAllMoods = id => {
  return dispatch => {
    return axios
      .get(`https://capstone-api-server.herokuapp.com/api/moods/${id}/all`)
      .then(response => response.data)
      .then(data => dispatch(getMoods(data)))
      .catch(e => console.log(e));
  };
};

// const getMoodsByFamilyId = familyId => {
//   return dispatch => {
//     return axios
//       .get(`https://capstone-api-server.herokuapp.com/api/users/`)
//       .then(response => response.data)
//       .then(users => users.filter(user => user.familyId === familyId))
//       .then(family => {
//         // console.log('family in thunk', family);

//         family.map(member => {
//           // const familyMoodsArr = [];
//           return axios
//             .get(
//               `https://capstone-api-server.herokuapp.com/api/moods/${member.id}`
//             )
//             .then(response => response.data)
//             .catch(e => console.log(e));
//           // return familyMoodsArr;
//         });
//       })
//       .then(response => response.data)
//       .then(data => dispatch(getFamilyMoods(data)))
//       .catch(e => console.log(e));
//   };
// };

//REDUCERS

const moodObjReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_MOOD:
      return action.mood;
    case GET_MOOD:
      return action.mood;
    default:
      return state;
  }
};
const moodArrReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_MOODS:
      return action.allmoods;
    // case GET_FAMILY_MOODS:
    //   return action.familyMoods;
    default:
      return state;
  }
};

// async function getMoodById(id) {
//   const usersMood = await axios
//     .get(`https://capstone-api-server.herokuapp.com/api/moods/${id}`)
//     .then(response => {
//       return response.data;
//     })
//     .catch(e => console.log(e));
//   return usersMood;
// }

const findMoodById = async person => {
  const mood = await axios.get(
    `https://capstone-api-server.herokuapp.com/api/moods/${person.id}`
  );
  person.mood = mood;
};

export {
  setActiveMood,
  getActiveMood,
  findMoodById,
  getAllMoods,
  moodObjReducer,
  moodArrReducer
};
