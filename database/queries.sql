-- ============================================================
-- FarmRent SQL Queries
-- Farm Equipment Rental Platform
-- ============================================================

USE farm_rent;


-- ============================================================
-- 1. View All Users
-- ============================================================

SELECT
    user_id,
    full_name,
    email,
    phone,
    role,
    location,
    created_at
FROM users
ORDER BY created_at DESC;


-- ============================================================
-- 2. View All Available Equipment
-- ============================================================

SELECT
    equipment_id,
    equipment_name,
    category,
    location,
    price_per_day,
    power_capacity,
    fuel_type,
    usage_type
FROM equipment
WHERE availability = 'available'
ORDER BY price_per_day ASC;


-- ============================================================
-- 3. Search Equipment by Category
-- ============================================================

SELECT
    equipment_id,
    equipment_name,
    category,
    location,
    price_per_day
FROM equipment
WHERE category = 'tractor'
  AND availability = 'available';


-- ============================================================
-- 4. Search Equipment by Location
-- ============================================================

SELECT
    equipment_id,
    equipment_name,
    category,
    location,
    price_per_day
FROM equipment
WHERE location = 'Vijayawada'
  AND availability = 'available';


-- ============================================================
-- 5. Find Equipment Within a Price Range
-- ============================================================

SELECT
    equipment_id,
    equipment_name,
    category,
    location,
    price_per_day
FROM equipment
WHERE price_per_day <= 1500
  AND availability = 'available'
ORDER BY price_per_day ASC;


-- ============================================================
-- 6. Equipment with Owner Information
-- ============================================================

SELECT
    e.equipment_id,
    e.equipment_name,
    e.category,
    e.location,
    e.price_per_day,
    u.full_name AS owner_name,
    u.phone AS owner_phone
FROM equipment e
JOIN users u
    ON e.owner_id = u.user_id
WHERE e.availability = 'available';


-- ============================================================
-- 7. View Rental Requests
-- ============================================================

SELECT
    r.request_id,
    u.full_name AS renter_name,
    e.equipment_name,
    e.location,
    r.start_date,
    r.end_date,
    r.status,
    r.requested_at
FROM rental_requests r
JOIN users u
    ON r.renter_id = u.user_id
JOIN equipment e
    ON r.equipment_id = e.equipment_id
ORDER BY r.requested_at DESC;


-- ============================================================
-- 8. Pending Rental Requests
-- ============================================================

SELECT
    r.request_id,
    u.full_name AS renter_name,
    e.equipment_name,
    r.start_date,
    r.end_date,
    r.message
FROM rental_requests r
JOIN users u
    ON r.renter_id = u.user_id
JOIN equipment e
    ON r.equipment_id = e.equipment_id
WHERE r.status = 'pending'
ORDER BY r.requested_at ASC;


-- ============================================================
-- 9. Confirm a Rental Request
-- ============================================================

UPDATE rental_requests
SET status = 'confirmed'
WHERE request_id = 2;


-- ============================================================
-- 10. Reject a Rental Request
-- ============================================================

UPDATE rental_requests
SET status = 'rejected'
WHERE request_id = 2;


-- ============================================================
-- 11. Cancel a Rental Request
-- ============================================================

UPDATE rental_requests
SET status = 'cancelled'
WHERE request_id = 2;


-- ============================================================
-- 12. View Active Rentals
-- ============================================================

SELECT
    r.rental_id,
    u.full_name AS renter_name,
    e.equipment_name,
    e.location,
    r.start_date,
    r.end_date,
    r.total_days,
    r.total_amount,
    r.rental_status
FROM rentals r
JOIN users u
    ON r.renter_id = u.user_id
JOIN equipment e
    ON r.equipment_id = e.equipment_id
WHERE r.rental_status = 'active'
ORDER BY r.start_date;


-- ============================================================
-- 13. View Completed Rentals
-- ============================================================

SELECT
    r.rental_id,
    u.full_name AS renter_name,
    e.equipment_name,
    r.start_date,
    r.end_date,
    r.total_days,
    r.total_amount
FROM rentals r
JOIN users u
    ON r.renter_id = u.user_id
JOIN equipment e
    ON r.equipment_id = e.equipment_id
WHERE r.rental_status = 'completed'
ORDER BY r.end_date DESC;


-- ============================================================
-- 14. Calculate Rental Amount
-- ============================================================

SELECT
    e.equipment_name,
    e.price_per_day,
    DATEDIFF('2026-10-14', '2026-10-12') + 1
        AS total_days,

    e.price_per_day *
    (DATEDIFF('2026-10-14', '2026-10-12') + 1)
        AS total_amount

FROM equipment e
WHERE e.equipment_id = 1;


-- ============================================================
-- 15. View Equipment Owned by a User
-- ============================================================

SELECT
    equipment_id,
    equipment_name,
    category,
    location,
    price_per_day,
    availability
FROM equipment
WHERE owner_id = 3
ORDER BY created_at DESC;


-- ============================================================
-- 16. Rental History of a User
-- ============================================================

SELECT
    r.rental_id,
    e.equipment_name,
    e.category,
    e.location,
    r.start_date,
    r.end_date,
    r.total_days,
    r.total_amount,
    r.rental_status
FROM rentals r
JOIN equipment e
    ON r.equipment_id = e.equipment_id
WHERE r.renter_id = 1
ORDER BY r.created_at DESC;


-- ============================================================
-- 17. Equipment Count by Category
-- ============================================================

SELECT
    category,
    COUNT(*) AS equipment_count
FROM equipment
GROUP BY category
ORDER BY equipment_count DESC;


-- ============================================================
-- 18. Equipment Count by Location
-- ============================================================

SELECT
    location,
    COUNT(*) AS equipment_count
FROM equipment
GROUP BY location
ORDER BY equipment_count DESC;


-- ============================================================
-- 19. Average Rental Price by Category
-- ============================================================

SELECT
    category,
    ROUND(AVG(price_per_day), 2) AS average_daily_price
FROM equipment
GROUP BY category
ORDER BY average_daily_price ASC;


-- ============================================================
-- 20. Owner Equipment Summary
-- ============================================================

SELECT
    u.user_id,
    u.full_name AS owner_name,
    COUNT(e.equipment_id) AS total_equipment
FROM users u
LEFT JOIN equipment e
    ON u.user_id = e.owner_id
WHERE u.role = 'owner'
GROUP BY
    u.user_id,
    u.full_name
ORDER BY total_equipment DESC;


-- ============================================================
-- 21. Rental Revenue by Equipment
-- ============================================================

SELECT
    e.equipment_name,
    COUNT(r.rental_id) AS rental_count,
    COALESCE(SUM(r.total_amount), 0) AS total_revenue
FROM equipment e
LEFT JOIN rentals r
    ON e.equipment_id = r.equipment_id
GROUP BY
    e.equipment_id,
    e.equipment_name
ORDER BY total_revenue DESC;


-- ============================================================
-- 22. Dashboard Summary for a User
-- ============================================================

SELECT

    COUNT(
        CASE
            WHEN status = 'pending'
            THEN 1
        END
    ) AS pending_requests,

    COUNT(
        CASE
            WHEN status = 'confirmed'
            THEN 1
        END
    ) AS confirmed_requests,

    COUNT(
        CASE
            WHEN status = 'completed'
            THEN 1
        END
    ) AS completed_requests

FROM rental_requests
WHERE renter_id = 1;


-- ============================================================
-- End of Queries
-- ============================================================