import ContactsContainer from "../containers/Contacts";
import CreateContainer from "../containers/CreateContact";
import LoginContainer from "../containers/Login";
import RegisterContainer from "../containers/Register";

const routes = [
    {
        path:'/auth/register',
        component: RegisterContainer,
        title:'SignUp'
    },
    {
        path:'/auth/login',
        component: LoginContainer,
        title:'Signin'
    },
    {
        path:'/',
        component: ContactsContainer,
        title: 'Contacts',
    },
    {
        path:'/contacts/create',
        component: CreateContainer,
        title: 'Create Contact'
    },
]

