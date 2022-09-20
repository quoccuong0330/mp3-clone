import Following from '~/pages/Following';
import Discover from '~/pages/Discover';
import Chart from '~/pages/Chart';
import Profile from '~/pages/Profile';
import Radio from '~/pages/Radio';
import ProfileSearch from '~/pages/ProfileSearch';

//public don't need login to use
const publicRoutes = [
    { path: '/profile', component: Profile },
    { path: '/', component: Discover },
    { path: '/chart', component: Chart },
    { path: '/radio', component: Radio },
    { path: '/following', component: Following, layout: 0 },
    { path: '/nghe-si/:nickname', component: ProfileSearch },
    { path: '/:nickname', component: ProfileSearch },
];

//private need login to use
const privateRoutes = [];

export { publicRoutes, privateRoutes };
