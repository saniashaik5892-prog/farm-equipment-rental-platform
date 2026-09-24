-- ============================================================
-- FarmRent Database Schema
-- Farm Equipment Rental Platform
-- ============================================================

CREATE DATABASE IF NOT EXISTS farm_rent;

USE farm_rent;


-- ============================================================
-- 1. Users
-- ============================================================

CREATE TABLE IF NOT EXISTS users (

    user_id INT AUTO_INCREMENT PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,

    email VARCHAR(120) NOT NULL UNIQUE,

    phone VARCHAR(15) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    role ENUM('farmer', 'owner', 'admin')
        NOT NULL DEFAULT 'farmer',

    location VARCHAR(100) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


-- ============================================================
-- 2. Equipment
-- ============================================================

CREATE TABLE IF NOT EXISTS equipment (

    equipment_id INT AUTO_INCREMENT PRIMARY KEY,

    owner_id INT NOT NULL,

    equipment_name VARCHAR(150) NOT NULL,

    category ENUM(
        'tractor',
        'harvester',
        'plough',
        'seeder',
        'sprayer',
        'cultivator'
    ) NOT NULL,

    description TEXT,

    location VARCHAR(100) NOT NULL,

    price_per_day DECIMAL(10,2) NOT NULL,

    power_capacity VARCHAR(50),

    fuel_type VARCHAR(50),

    usage_type VARCHAR(100),

    availability ENUM(
        'available',
        'unavailable'
    ) DEFAULT 'available',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (owner_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE

);


-- ============================================================
-- 3. Rental Requests
-- ============================================================

CREATE TABLE IF NOT EXISTS rental_requests (

    request_id INT AUTO_INCREMENT PRIMARY KEY,

    equipment_id INT NOT NULL,

    renter_id INT NOT NULL,

    start_date DATE NOT NULL,

    end_date DATE NOT NULL,

    message TEXT,

    status ENUM(
        'pending',
        'confirmed',
        'rejected',
        'cancelled',
        'completed'
    ) DEFAULT 'pending',

    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (equipment_id)
        REFERENCES equipment(equipment_id)
        ON DELETE CASCADE,

    FOREIGN KEY (renter_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE

);


-- ============================================================
-- 4. Rental Records
-- ============================================================

CREATE TABLE IF NOT EXISTS rentals (

    rental_id INT AUTO_INCREMENT PRIMARY KEY,

    request_id INT NOT NULL UNIQUE,

    equipment_id INT NOT NULL,

    renter_id INT NOT NULL,

    start_date DATE NOT NULL,

    end_date DATE NOT NULL,

    total_days INT NOT NULL,

    total_amount DECIMAL(10,2) NOT NULL,

    rental_status ENUM(
        'active',
        'completed',
        'cancelled'
    ) DEFAULT 'active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (request_id)
        REFERENCES rental_requests(request_id)
        ON DELETE CASCADE,

    FOREIGN KEY (equipment_id)
        REFERENCES equipment(equipment_id)
        ON DELETE CASCADE,

    FOREIGN KEY (renter_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE

);


-- ============================================================
-- 5. Useful Indexes
-- ============================================================

CREATE INDEX idx_equipment_category
ON equipment(category);

CREATE INDEX idx_equipment_location
ON equipment(location);

CREATE INDEX idx_equipment_availability
ON equipment(availability);

CREATE INDEX idx_rental_requests_status
ON rental_requests(status);

CREATE INDEX idx_rental_requests_renter
ON rental_requests(renter_id);

CREATE INDEX idx_rental_requests_equipment
ON rental_requests(equipment_id);


-- ============================================================
-- Schema Complete
-- ============================================================