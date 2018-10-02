import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import epsiodeReducer from './Reducers/EpisodeReducer';
import contactReducer from './Reducers/ContactReducer';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    episodesReducer: epsiodeReducer,
    contactReducer: contactReducer,
    form: formReducer
  })

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);