import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import reducers from '../reducers'; // Import your root reducer
import { persistStore, persistReducer } from 'redux-persist'; // Import persistStore and persistReducer for data persistence
import storage from 'redux-persist/lib/storage'; // Import the default storage, which is localStorage for web

// Configuration object for redux-persist
const persistConfig = {
    key: 'root', // The key for the redux state to be stored in local storage
    storage, // The storage engine to use
};

// Wrap the root reducer with persistReducer using the persistConfig and the root reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Create the store using configureStore, which automatically sets up the Redux DevTools and thunk middleware
const store = configureStore({
    reducer: persistedReducer, // Use the persisted reducer
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types in the serializable check
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

// Create a persistor instance which is used to wrap the application in a PersistGate component
const persistor = persistStore(store);

// Export the store and persistor
export { store, persistor };
