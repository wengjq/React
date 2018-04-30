import config from './Modal.config';
import { bindRedux } from 'redux-form-utils';

const { state: formState, reducer: formReducer } = bindRedux(config);

const initialState = {
  visible: false,
  ...formState,
};

export function addArticle() {
  return (dispatch, getState) => {
    const { title, desc, date } = getState().articles.modal.form;
   
    return dispatch(addArt(
      {
        title: title.value || '',
        desc: desc.value || '',
        date: date.value || ''
      },
      getState().articles
    ));
  };
}

export function addArt(article, articles) {
  const { title, desc, date } = articles.modal.form;

  articles.table.articles.push({
    id: articles.table.articles.length + 1,
    title: title.value,
    desc: desc.value,
    date: date.value
  })

  return {
    type: 'ADD_ARTICLE'
  };
}

export function showModal() {
  return {
    type: 'SHOW_MODAL'
  };
}

export function hideModal() {
  return {
    type: 'HIDE_MODAL'
  };
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MODAL': {
      return {
        ...state,
        visible: true,
      };
    }

    case 'HIDE_MODAL': {
      return {
        ...state,
        visible: false,
      };
    }

    case 'ADD_ARTICLE': {
      return {
        ...state,
        visible: false,
      };
    }

    default:
      return formReducer(state, action);
  }
}
