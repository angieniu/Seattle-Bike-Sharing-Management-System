const menuList = [
    {
        title: 'Homepage',
        key: '/home'
    },
    {
        title: 'Form',
        key: '/form',
        children: [
            {
                title: 'Login',
                key: '/form/login',
            },
            {
                title: 'Registration',
                key: '/form/reg',
            }
        ]
    },
    {
        title: 'Area Management',
        key: '/city'
    },
    {
        title: 'Bike Map',
        key: '/bikeMap'
    },
    {
        title: 'Charts',
        key: '/charts',
        children: [
            {
                title: 'Bars',
                key: '/charts/bar'
            },
            {
                title: 'Pies',
                key: '/charts/pie'
            },
            {
                title: 'Lines',
                key: '/charts/line'
            },
        ]
    },
];
export default menuList;