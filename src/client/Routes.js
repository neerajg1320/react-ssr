import App from './app';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/users" component={UsersList} />
//     </div>
//   );
// }

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      }  
    ]
  }
]



