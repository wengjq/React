const initialState = {
  articles: [],
  loading: true,
  error: false,
};

export function loadArticles() {
  return {
    url: '/api/articles.json',
    types: ['LOAD_ARTICLES', 'LOAD_ARTICLES_SUCCESS', 'LOAD_ARTICLES_ERROR'],
  };
}

export function deleteArticle(t, record) {
  return {
    type: 'DELETE_ARTICLES',
    payload: {
      articles: t.props.articles.slice(0).filter(article => article.id !== record.id)
    }
  };  
}

export function changeQuery(e) {
  return {
    type: 'CHANGE_QUERY',
    payload: {
      query: e.target.value.trim() || ''
    }
  };
}

export function search(t) {
  return (dispatch, getState) => {
    const { articles, query } = getState().articles.table;
    return dispatch(searchArticles(articles, query));
  }
}

export function searchArticles(articles, query) {
  return {
    type: 'SEARCH',
    payload: {
      articles: articles.slice(0).filter(article => article.title.indexOf(query) > -1)
    }
  };  
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_QUERY': {
      return {
        ...state,
        query: action.payload.query
      };
    }

    case 'SEARCH': {
      return {
        ...state,
        articles: action.payload.articles
      };
    }        

    case 'DELETE_ARTICLES': {
      return {
        ...state,
        articles: action.payload.articles
      };
    }

    case 'LOAD_ARTICLES': {
      return {
        ...state,
        loading: true,
        error: false
      };
    }

    case 'LOAD_ARTICLES_SUCCESS': {
      return {
        ...state,
        articles: action.payload,
        loading: false,
        error: false
      };
    }

    case 'LOAD_ARTICLES_ERROR': {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    default:
      return state;
  }
}
