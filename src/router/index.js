import { createRouter, createWebHistory } from 'vue-router';

// Async loading of Views
const OmUni = () => import('@/views/OmUniPage.vue');
const KsaUni = () => import('@/views/KsaUniPage.vue');
const UaeUni = () => import('@/views/UaeUniPage.vue');
const BhrUni = () => import('@/views/BhUniPage.vue');
const Suspense = () => import('@/views/SuspensePage.vue');
const KwUni = () => import('@/views/KwUniPage.vue');
const QtrUni = () => import('@/views/QtrUniPage.vue');
const Unidetailes = () => import('@/views/Unidetailes.vue');
const NotFound = () => import('@/views/NotFound.vue');


const routes = [
  {
    path: '/Oman-Universities',
    name: 'OmUni',
    component: OmUni,
  },
  {
    path: '/UAE-Universities',
    name: 'UaeUni',
    component: UaeUni,
  },
  {
    path: '/SA-Universities',
    name: 'KsaUni',
    component: KsaUni,
  },
  {
    path: '/suspense-example',
    name: 'suspense',
    component: Suspense,
  },
  {
    path: '/Qatar-Universities',
    name: 'QtrUni',
    component: QtrUni,
  },
  {
    path: '/Kuwait-Universities',
    name: 'KwUni',
    component: KwUni,
  },
  {
    path: '/Bahrain-Universities',
    name: 'BhrUni',
    component: BhrUni,
  },
  {
    path: '/Uni-detailes',
    name: 'Unidetailes',
    component: Unidetailes,
  },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
