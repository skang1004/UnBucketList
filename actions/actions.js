import * as types from '../types/actionsTypes.js';

export const login = (username) => {
  return {
    type: types.LOGIN,
    payload: username,
  };
};

export const setEvents = (events) => {
  return {
    type: types.SET_EVENTS,
    payload: events,
  };
};

export const addEvent = (event, username) => {
  console.log('In actions addevent event and username are', event, username);
  const body = JSON.stringify({
    name: event.event_name,
    creator: username,
    description: event.description,
    location: event.location,
    date: event.date,
  });
  return (dispatch) => {
    fetch(`http://localhost:3000/event/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from addevent fetch', data);
        dispatch({
          type: types.ADD_EVENT,
          payload: data.events[data.events.length - 1],
        });
      });
  };
};

export const editEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: types.EDIT_EVENT,
      payload: event,
    });
  };
};

export const deleteEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_EVENT,
      payload: event,
    });
  };
};