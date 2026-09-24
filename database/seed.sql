-- ============================================================
-- FarmRent Sample Data
-- Farm Equipment Rental Platform
-- ============================================================

USE farm_rent;


-- ============================================================
-- 1. Sample Users
-- ============================================================

INSERT INTO users
    (full_name, email, phone, password, role, location)
VALUES

(
    'Ravi Kumar',
    'ravi@example.com',
    '9876543210',
    'demo_password_123',
    'farmer',
    'Vijayawada'
),

(
    'Suresh Reddy',
    'suresh@example.com',
    '9876543211',
    'demo_password_123',
    'farmer',
    'Guntur'
),

(
    'Arjun Rao',
    'arjun@example.com',
    '9876543212',
    'demo_password_123',
    'owner',
    'Vijayawada'
),

(
    'Kiran Farms',
    'kiran@example.com',
    '9876543213',
    'demo_password_123',
    'owner',
    'Tenali'
),

(
    'Lakshmi Agricultural Services',
    'lakshmi@example.com',
    '9876543214',
    'demo_password_123',
    'owner',
    'Amaravati'
);


-- ============================================================
-- 2. Sample Equipment
-- ============================================================

INSERT INTO equipment
    (
        owner_id,
        equipment_name,
        category,
        description,
        location,
        price_per_day,
        power_capacity,
        fuel_type,
        usage_type,
        availability
    )
VALUES

(
    3,
    'Mahindra Farm Tractor',
    'tractor',
    'Reliable tractor suitable for field preparation, transportation and general agricultural operations.',
    'Vijayawada',
    1500.00,
    '45 HP',
    'Diesel',
    'Agricultural',
    'available'
),

(
    3,
    'Compact Crop Harvester',
    'harvester',
    'Compact harvesting equipment designed for efficient crop harvesting and field operations.',
    'Guntur',
    3500.00,
    'Multi Crop',
    'Diesel',
    'Crop Harvesting',
    'available'
),

(
    4,
    'Heavy Duty Farm Plough',
    'plough',
    'Heavy-duty agricultural plough designed for soil preparation and primary tillage.',
    'Tenali',
    900.00,
    '3 Blade',
    'Tractor Mount',
    'Soil Preparation',
    'available'
),

(
    5,
    'Precision Seed Drill',
    'seeder',
    'Precision seed drill designed for consistent seed placement during agricultural sowing.',
    'Amaravati',
    1200.00,
    '7 Row',
    'Tractor Mount',
    'Seed Sowing',
    'available'
),

(
    4,
    'Agricultural Crop Sprayer',
    'sprayer',
    'Portable agricultural sprayer suitable for crop protection and field spraying.',
    'Tenali',
    800.00,
    '16 L',
    'Manual',
    'Crop Spraying',
    'available'
),

(
    3,
    'Rotary Field Cultivator',
    'cultivator',
    'Heavy-duty cultivator designed for soil preparation and field cultivation.',
    'Vijayawada',
    1100.00,
    '9 Tine',
    'Tractor Mount',
    'Field Cultivation',
    'available'
);


-- ============================================================
-- 3. Sample Rental Requests
-- ============================================================

INSERT INTO rental_requests
    (
        equipment_id,
        renter_id,
        start_date,
        end_date,
        message,
        status
    )
VALUES

(
    1,
    1,
    '2026-10-12',
    '2026-10-14',
    'Required for field preparation.',
    'confirmed'
),

(
    5,
    2,
    '2026-10-18',
    '2026-10-19',
    'Required for crop spraying.',
    'pending'
),

(
    3,
    1,
    '2026-09-02',
    '2026-09-04',
    'Required for soil preparation.',
    'completed'
),

(
    4,
    2,
    '2026-08-20',
    '2026-08-21',
    'Required for seed sowing.',
    'completed'
);


-- ============================================================
-- 4. Sample Rental Records
-- ============================================================

INSERT INTO rentals
    (
        request_id,
        equipment_id,
        renter_id,
        start_date,
        end_date,
        total_days,
        total_amount,
        rental_status
    )
VALUES

(
    1,
    1,
    1,
    '2026-10-12',
    '2026-10-14',
    3,
    4500.00,
    'active'
),

(
    3,
    3,
    1,
    '2026-09-02',
    '2026-09-04',
    3,
    2700.00,
    'completed'
),

(
    4,
    4,
    2,
    '2026-08-20',
    '2026-08-21',
    2,
    2400.00,
    'completed'
);


-- ============================================================
-- Verification Queries
-- ============================================================

SELECT * FROM users;

SELECT * FROM equipment;

SELECT * FROM rental_requests;

SELECT * FROM rentals;