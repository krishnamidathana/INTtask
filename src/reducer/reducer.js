const savedRole = localStorage.getItem('userRole');
const savedLogin = localStorage.getItem('isLoggedIn');


console.log('savedRole:',savedRole)
console.log('savedLogin:',savedLogin)
export const initialState = {
  isLoggedIn: savedLogin === 'true' ? true : false,
  showDialog: false,
  userRole: savedRole || null,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SHOW_DIALOG':
      return { ...state, showDialog: true };
    case 'SELECT_ROLE':
      return { isLoggedIn: true, showDialog: false, userRole: action.role };
    case 'LOGOUT':  
      return {  isLoggedIn:false,
  userRole: null};
    default: 
      return state;
  }
}
