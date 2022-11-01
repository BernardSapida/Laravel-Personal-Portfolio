import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import ExperiencePage from './Pages/ExperiencePage';
import ContactPage from './Pages/ContactPage';
import NotFound from './Pages/NotFound';

export default [
    {
        path: '/',
        name: 'homepage',
        component: HomePage
    },
    {
        path: '/projects',
        name: 'projectPage',
        component: ProjectPage
    },
    {
        path: '/experience',
        name: 'experiencePage',
        component: ExperiencePage
    },
    {
        path: '/contact',
        name: 'contactPage',
        component: ContactPage
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
]