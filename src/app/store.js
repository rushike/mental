import { configureStore } from '@reduxjs/toolkit'

import reducer from '../features/auth/auth_slice';


export default configureStore({
		reducer : {
				auth : reducer
		},
});