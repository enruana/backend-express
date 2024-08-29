export const mockData = {
    "db": {
        "users": [
            {
                "id": 1,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "password": "hashed_password_1",
                "role": "user",
                "created_at": "2024-08-01T10:00:00Z"
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "email": "jane.smith@example.com",
                "password": "hashed_password_2",
                "role": "admin",
                "created_at": "2024-08-02T11:00:00Z"
            },
            {
                "id": 3,
                "name": "Provider Inc.",
                "email": "contact@providerinc.com",
                "password": "hashed_password_3",
                "role": "provider",
                "created_at": "2024-08-03T12:00:00Z"
            }
        ],
        "providers": [
            {
                "id": 1,
                "name": "Provider Inc.",
                "location": "123 Main St, Cityville",
                "operating_hours": "09:00-17:00",
                "average_rating": 4.5,
                "created_at": "2024-08-03T12:00:00Z"
            },
            {
                "id": 2,
                "name": "ServicePro LLC",
                "location": "456 Elm St, Townsville",
                "operating_hours": "08:00-18:00",
                "average_rating": 4.2,
                "created_at": "2024-08-04T09:00:00Z"
            }
        ],
        "services": [
            {
                "id": 1,
                "service_name": "Basic Cleaning",
                "description": "A standard cleaning service for homes.",
                "duration": 60,
                "price": 50.00,
                "provider_id": 1,
                "created_at": "2024-08-05T10:00:00Z"
            },
            {
                "id": 2,
                "service_name": "Deep Cleaning",
                "description": "A thorough cleaning service including all nooks and crannies.",
                "duration": 120,
                "price": 100.00,
                "provider_id": 1,
                "created_at": "2024-08-05T11:00:00Z"
            },
            {
                "id": 3,
                "service_name": "Plumbing Services",
                "description": "Fixing leaks, clogs, and other plumbing issues.",
                "duration": 90,
                "price": 75.00,
                "provider_id": 2,
                "created_at": "2024-08-06T09:00:00Z"
            }
        ],
        "bookings": [
            {
                "id": 1,
                "user_id": 1,
                "service_id": 1,
                "booking_datetime": "2024-08-10T14:00:00Z",
                "status": "confirmed",
                "created_at": "2024-08-07T10:00:00Z"
            },
            {
                "id": 2,
                "user_id": 1,
                "service_id": 2,
                "booking_datetime": "2024-08-11T10:00:00Z",
                "status": "canceled",
                "created_at": "2024-08-08T11:00:00Z"
            },
            {
                "id": 3,
                "user_id": 2,
                "service_id": 3,
                "booking_datetime": "2024-08-12T08:00:00Z",
                "status": "confirmed",
                "created_at": "2024-08-09T09:00:00Z"
            }
        ],
        "rating_reviews": [
            {
                "id": 1,
                "user_id": 1,
                "service_id": 1,
                "rating": 5,
                "comment": "Excellent service, very thorough!",
                "created_at": "2024-08-11T14:00:00Z"
            },
            {
                "id": 2,
                "user_id": 1,
                "service_id": 2,
                "rating": 4,
                "comment": "Good service, but could be faster.",
                "created_at": "2024-08-12T15:00:00Z"
            },
            {
                "id": 3,
                "user_id": 2,
                "service_id": 3,
                "rating": 3,
                "comment": "Average experience, had to wait longer than expected.",
                "created_at": "2024-08-13T10:00:00Z"
            }
        ]
    }
};