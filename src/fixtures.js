export const parkingSettings = {
    'seats': [
        {number: '1A', type: 'disabled', available: true},
        {number: '2A', type: 'disabled', available: true},
        {number: '3A', type: 'disabled', available: true},
        {number: '4A', type: 'truck', available: true},
        {number: '5A', type: 'truck', available: true},
        {number: '6A', type: 'sedan', available: true},
        {number: '7A', type: 'sedan', available: true},
        {number: '8A', type: 'sedan', available: true},
        {number: '9A', type: 'sedan', available: true},
        {number: '10A', type: 'sedan', available: true},
    ],

    'types': ['disabled','truck','sedan'],

    'seatsupd': {
        'disabled': [
            {id: '1A', available: true, type: 'disabled'},
            {id: '2A', available: true, type: 'disabled'}
        ],
        'truck': [
            {id: '3A', available: true, type: 'truck'},
            {id: '4A', available: true, type: 'truck'},
            {id: '5A', available: true, type: 'truck'}
        ],
        'sedan': [
            {id: '6A', available: true, type: 'sedan'},
            {id: '7A', available: true, type: 'sedan'},
            {id: '8A', available: true, type: 'sedan'},
            {id: '9A', available: true, type: 'sedan'},
            {id: '10A', available: true, type: 'sedan'},
        ]
    }
};
