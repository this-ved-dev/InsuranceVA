/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'ChartsIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
    routes: [
      // submenu
      {
        path: '/app/ClaimsAnalysisDashboard',
        name: 'Claims Analysis',
      },
      {
        path: '/app/FraudAnalysisDashboard',
        name: 'Fraud Analysis',
      },
      {
        path: '/app/InsuranceRiskDashboard',
        name: 'Insurance Risk KPI',
      },
      {
        path: '/app/InsuranceRiskDDC',
        name: 'Data Driven Risk Catgeorization',
      },
      {
        path: '/app/MachineLearningModels',
        name: 'Machine Learning Models',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Predictors',
    routes: [
      // submenu
      {
        path: '/app/RenewRatePredict',
        name: 'Renewal Rate Prediction',
      },
      {
        path: '/app/mas-predict',
        name: 'MAS Predictions',
      },
    ],
  },
  {
    icon: 'PeopleIcon',
    name: 'Customer Complaints',
    routes: [
      // submenu
      {
        path: '/app/Concepts',
        name: 'Complaint Concepts',
      },
      {
        path: '/app/Organization',
        name: 'Organizational Overview',
      },
      {
        path: '/app/narratives',
        name: 'Consumer Narratives Analysis',
      },
    ],
  },
  // {
  //   path: '/app/ddc',
  //   icon: 'PeopleIcon',
  //   name: 'Data Driven Content',
  // },
  // {
  //   path: '/app/models',
  //   icon: 'FormsIcon',
  //   name: 'Risk Models',
  // },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Forms',
  },
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   path: '/app/charts',
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/app/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },

  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes
