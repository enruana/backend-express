export const mockData = {
    "db": {
        "users": [
            {
                "id": "27324b3d-5ee0-488b-af1a-2ac7e5dd7bfc",
                "name": "John Doe",
                "email": "john.doe@example.com",
                "password": "hashed_password_1",
                "role": "user",
                "created_at": "2024-08-01T10:00:00Z"
            },
            {
                "id": "2b2c6e9b-e712-4e58-9a36-c9136d040c18",
                "name": "Jane Smith",
                "email": "jane.smith@example.com",
                "password": "hashed_password_2",
                "role": "admin",
                "created_at": "2024-08-02T11:00:00Z"
            },
            {
                "id": "e43df490-d2a9-4e12-a579-a7aaf4a7ae92",
                "name": "Provider Inc.",
                "email": "contact@providerinc.com",
                "password": "hashed_password_3",
                "role": "provider",
                "created_at": "2024-08-03T12:00:00Z"
            }
        ],
        "providers": [
            {
                "id": "96186cab-adaf-457d-8100-bacfaec38106",
                "name": "Provider Inc.",
                "location": "123 Main St, Cityville",
                "operating_hours": "09:00-17:00",
                "average_rating": 4.5,
                "created_at": "2024-08-03T12:00:00Z"
            },
            {
                "id": "3d0cb82b-f9be-4678-8d3d-93445231a62a",
                "name": "ServicePro LLC",
                "location": "456 Elm St, Townsville",
                "operating_hours": "08:00-18:00",
                "average_rating": 4.2,
                "created_at": "2024-08-04T09:00:00Z"
            }
        ],
        "services": [
            {
                "id": "c5cd3636-2b99-45ba-89b4-6642b79344a8",
                "service_name": "Basic Cleaning",
                "description": "A standard cleaning service for homes.",
                "duration": 60,
                "price": 50.00,
                "provider_id": "96186cab-adaf-457d-8100-bacfaec38106",
                "created_at": "2024-08-05T10:00:00Z"
            },
            {
                "id": "ae14faac-4bbb-45cc-9f25-b7f39e12f36b",
                "service_name": "Deep Cleaning",
                "description": "A thorough cleaning service including all nooks and crannies.",
                "duration": 120,
                "price": 100.00,
                "provider_id": "96186cab-adaf-457d-8100-bacfaec38106",
                "created_at": "2024-08-05T11:00:00Z"
            },
            {
                "id": "e93a02fd-8869-4f26-a7c4-ee0df189af17",
                "service_name": "Plumbing Services",
                "description": "Fixing leaks, clogs, and other plumbing issues.",
                "duration": 90,
                "price": 75.00,
                "provider_id": "3d0cb82b-f9be-4678-8d3d-93445231a62a",
                "created_at": "2024-08-06T09:00:00Z"
            }
        ],
        "bookings": [
            {
                "id": "6ae5b491-0fa7-4053-b519-8716d32a5529",
                "user_id": "27324b3d-5ee0-488b-af1a-2ac7e5dd7bfc",
                "service_id": "c5cd3636-2b99-45ba-89b4-6642b79344a8",
                "booking_datetime": "2024-08-10T14:00:00Z",
                "status": "confirmed",
                "created_at": "2024-08-07T10:00:00Z"
            },
            {
                "id": "b5b2342f-9bdd-48db-ad92-06b75a6b17e8",
                "user_id": "27324b3d-5ee0-488b-af1a-2ac7e5dd7bfc",
                "service_id": "ae14faac-4bbb-45cc-9f25-b7f39e12f36b",
                "booking_datetime": "2024-08-11T10:00:00Z",
                "status": "canceled",
                "created_at": "2024-08-08T11:00:00Z"
            },
            {
                "id": "ebe3038e-41ee-46f2-8b3a-6308f02e14f8",
                "user_id": "2b2c6e9b-e712-4e58-9a36-c9136d040c18",
                "service_id": "e93a02fd-8869-4f26-a7c4-ee0df189af17",
                "booking_datetime": "2024-08-12T08:00:00Z",
                "status": "confirmed",
                "created_at": "2024-08-09T09:00:00Z"
            }
        ],
        "rating_reviews": [
            {
                "id": "c8cf7cb5-9570-4951-939c-91d29d1f9d21",
                "user_id": "27324b3d-5ee0-488b-af1a-2ac7e5dd7bfc",
                "service_id": "c5cd3636-2b99-45ba-89b4-6642b79344a8",
                "rating": 5,
                "comment": "Excellent service, very thorough!",
                "created_at": "2024-08-11T14:00:00Z"
            },
            {
                "id": "0bd47c1c-68e0-4758-848a-ee6b5ffd090a",
                "user_id": "27324b3d-5ee0-488b-af1a-2ac7e5dd7bfc",
                "service_id": "ae14faac-4bbb-45cc-9f25-b7f39e12f36b",
                "rating": 4,
                "comment": "Good service, but could be faster.",
                "created_at": "2024-08-12T15:00:00Z"
            },
            {
                "id": "3890cf72-d154-4865-86c5-7b5ddcd1447b",
                "user_id": "2b2c6e9b-e712-4e58-9a36-c9136d040c18",
                "service_id": "e93a02fd-8869-4f26-a7c4-ee0df189af17",
                "rating": 3,
                "comment": "Average experience, had to wait longer than expected.",
                "created_at": "2024-08-13T10:00:00Z"
            }
        ]
    }
};
