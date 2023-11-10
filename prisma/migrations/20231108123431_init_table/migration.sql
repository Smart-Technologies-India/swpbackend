-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NULL,
    `pic_url` VARCHAR(191) NULL,
    `department` ENUM('NONE', 'PDA', 'EOCS', 'LAND', 'MAMLATDAR', 'COLLECTOR', 'DYCOLLECTOR', 'FIRE', 'COASTGUARD', 'EST', 'DMC', 'CRSR', 'PWD') NOT NULL DEFAULT 'NONE',
    `role` ENUM('NONE', 'SYSTEM', 'ADMIN', 'COLLECTOR', 'DYCOLLECTOR', 'ATP', 'JTP', 'MAMLATDAR', 'FIRE', 'LANDSUPTD', 'JE', 'SITESUPERVISOR', 'ARCHITECTASST', 'PLANNINGDRAUGHTSMAN', 'ARCHDRAUGHTSMANSP', 'ARCHDRAUGHTSMANST', 'SUPERINTENDENT', 'LDC', 'UDC', 'SHO', 'HEADCLERK', 'USER') NOT NULL DEFAULT 'NONE',
    `otp` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `user_uid` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `village` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `villageId` INTEGER NOT NULL,
    `survey_no` VARCHAR(191) NOT NULL,
    `sub_division` VARCHAR(191) NULL,
    `owner_name` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `query` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stage` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'UNAUTHORISED', 'CP', 'OC', 'PLINTH', 'MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC', 'BIRTHCERT', 'BIRTHTEOR', 'DEATHCERT', 'DEATHTEOR', 'MARRIAGECERT', 'MARRIAGETEOR', 'MARRIAGEREGISTER', 'TEMPWATERCONNECT', 'TEMPWATERDISCONECT', 'WATERSIZECHANGE', 'NEWWATERCONNECT', 'WATERRECONNECT', 'PERMANENTWATERDISCONNECT', 'DEATHREGISTER', 'BIRTHREGISTER') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `form_status` INTEGER NOT NULL,
    `to_user_id` INTEGER NOT NULL,
    `from_user_id` INTEGER NOT NULL,
    `query_type` ENUM('NONE', 'INTRA', 'INTER', 'PUBLIC') NOT NULL DEFAULT 'NONE',
    `doc_url` VARCHAR(191) NULL,
    `remark` VARCHAR(191) NOT NULL,
    `query_status` ENUM('NONE', 'SENT', 'RECEIVED', 'REPLIED', 'RESOLVED') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `form_type` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'UNAUTHORISED', 'CP', 'OC', 'PLINTH', 'MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC', 'BIRTHCERT', 'BIRTHTEOR', 'DEATHCERT', 'DEATHTEOR', 'MARRIAGECERT', 'MARRIAGETEOR', 'MARRIAGEREGISTER', 'TEMPWATERCONNECT', 'TEMPWATERDISCONECT', 'WATERSIZECHANGE', 'NEWWATERCONNECT', 'WATERRECONNECT', 'PERMANENTWATERDISCONNECT', 'DEATHREGISTER', 'BIRTHREGISTER') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `auth_user_id` VARCHAR(191) NULL,
    `focal_user_id` VARCHAR(191) NULL,
    `intra_user_id` VARCHAR(191) NULL,
    `inter_user_id` VARCHAR(191) NULL,
    `village` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `event_date` DATETIME(3) NULL,
    `form_status` INTEGER NULL,
    `query_status` ENUM('NONE', 'SUBMIT', 'INPROCESS', 'PAYMENT', 'QUERYRAISED', 'APPROVED', 'REJCTED', 'CERTIFICATEGRANT', 'COMPLETED') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rti_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `subject_info` VARCHAR(191) NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `description` MEDIUMTEXT NULL,
    `information` VARCHAR(191) NULL,
    `proverty_line_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `payment_doc` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `zone_info_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `nakel_url_1_14` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `payment_doc` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `petroleum_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `company_name` VARCHAR(191) NULL,
    `company_region` VARCHAR(191) NULL,
    `designation` VARCHAR(191) NULL,
    `location_address` VARCHAR(191) NULL,
    `noc_type` ENUM('NONE', 'NOCTYPEONE', 'NOCTYPETWO', 'NOCTYPETHREE') NOT NULL DEFAULT 'NONE',
    `class_type` ENUM('NONE', 'CLASSTYPEONE', 'CLASSTYPETWO', 'CLASSTYPETHREE') NOT NULL DEFAULT 'NONE',
    `outlet_type` ENUM('NONE', 'OUTLETTYPEONE', 'OUTLETTYPETWO', 'OUTLETTYPETHREE') NOT NULL DEFAULT 'NONE',
    `capacity` DECIMAL(65, 30) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `noc_fire_url` VARCHAR(191) NULL,
    `na_order_url` VARCHAR(191) NULL,
    `sanad_url` VARCHAR(191) NULL,
    `coastguard_url` VARCHAR(191) NULL,
    `plan_url` VARCHAR(191) NULL,
    `explosive_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `old_copy_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `prev_application_date` DATETIME(3) NULL,
    `prev_application_number` VARCHAR(191) NULL,
    `information_needed` VARCHAR(191) NULL,
    `type_of_information` ENUM('NONE', 'CP', 'OC', 'MAPS') NOT NULL DEFAULT 'NONE',
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `aadhar_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `payment_doc` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `land_section_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `area` VARCHAR(191) NULL,
    `na_type` VARCHAR(191) NULL,
    `zone` VARCHAR(191) NULL,
    `road_access` VARCHAR(191) NULL,
    `no_road_access` VARCHAR(191) NULL,
    `width_adequate` VARCHAR(191) NULL,
    `is_dimension_plot_adequate` VARCHAR(191) NULL,
    `is_crz` VARCHAR(191) NULL,
    `is_monument` VARCHAR(191) NULL,
    `other_remark` VARCHAR(191) NULL,
    `atp_recommendation` VARCHAR(191) NULL,
    `attachments` VARCHAR(191) NULL,
    `recommend` BOOLEAN NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `illegal_sqmt` VARCHAR(191) NULL,
    `land_formid` INTEGER NULL,
    `land_stageid` INTEGER NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dealing_hand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file_type` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'UNAUTHORISED', 'CP', 'OC', 'PLINTH', 'MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC', 'BIRTHCERT', 'BIRTHTEOR', 'DEATHCERT', 'DEATHTEOR', 'MARRIAGECERT', 'MARRIAGETEOR', 'MARRIAGEREGISTER', 'TEMPWATERCONNECT', 'TEMPWATERDISCONECT', 'WATERSIZECHANGE', 'NEWWATERCONNECT', 'WATERRECONNECT', 'PERMANENTWATERDISCONNECT', 'DEATHREGISTER', 'BIRTHREGISTER') NOT NULL DEFAULT 'NONE',
    `collector` BOOLEAN NOT NULL DEFAULT false,
    `dycollector` BOOLEAN NOT NULL DEFAULT false,
    `atp` BOOLEAN NOT NULL DEFAULT false,
    `jtp` BOOLEAN NOT NULL DEFAULT false,
    `je` BOOLEAN NOT NULL DEFAULT false,
    `fieldinspector` BOOLEAN NOT NULL DEFAULT false,
    `sitesupervisor` BOOLEAN NOT NULL DEFAULT false,
    `architectassistant` BOOLEAN NOT NULL DEFAULT false,
    `planningdraughtsman` BOOLEAN NOT NULL DEFAULT false,
    `spdraughtsman` BOOLEAN NOT NULL DEFAULT false,
    `stdraughtsman` BOOLEAN NOT NULL DEFAULT false,
    `landsupted` BOOLEAN NOT NULL DEFAULT false,
    `mamlatdar` BOOLEAN NOT NULL DEFAULT false,
    `eocs` BOOLEAN NOT NULL DEFAULT false,
    `dept1` BOOLEAN NOT NULL DEFAULT false,
    `dept2` BOOLEAN NOT NULL DEFAULT false,
    `dept3` BOOLEAN NOT NULL DEFAULT false,
    `dept4` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `form_type` ENUM('NONE', 'PETROLEUM', 'RTI', 'ZONE', 'DEMOLITION', 'OLDCOPY', 'LANDRECORDS', 'UNAUTHORISED', 'CP', 'OC', 'PLINTH', 'MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC', 'BIRTHCERT', 'BIRTHTEOR', 'DEATHCERT', 'DEATHTEOR', 'MARRIAGECERT', 'MARRIAGETEOR', 'MARRIAGEREGISTER', 'TEMPWATERCONNECT', 'TEMPWATERDISCONECT', 'WATERSIZECHANGE', 'NEWWATERCONNECT', 'WATERRECONNECT', 'PERMANENTWATERDISCONNECT', 'DEATHREGISTER', 'BIRTHREGISTER') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `deptuser_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `type1` INTEGER NULL,
    `amount1` INTEGER NULL,
    `type2` INTEGER NULL,
    `amount2` INTEGER NULL,
    `type3` INTEGER NULL,
    `amount3` INTEGER NULL,
    `daycount` INTEGER NULL,
    `paymentamout` INTEGER NULL,
    `reference` VARCHAR(191) NULL,
    `paymentType` ENUM('NONE', 'CASH', 'CHEQUE', 'NETBANKING', 'CCDC', 'UPI') NOT NULL DEFAULT 'NONE',
    `paymentstatus` ENUM('NONE', 'PENDING', 'PAID') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cp_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `architect_name` VARCHAR(191) NULL,
    `architect_license` VARCHAR(191) NULL,
    `valid_upto` DATETIME(3) NULL,
    `applicant_uid` VARCHAR(191) NULL,
    `annexure_two` VARCHAR(191) NULL,
    `annexure_three` VARCHAR(191) NULL,
    `annexure_four` VARCHAR(191) NULL,
    `annexure_five` VARCHAR(191) NULL,
    `na_copoy` VARCHAR(191) NULL,
    `map_copy` VARCHAR(191) NULL,
    `nakal_1_14` VARCHAR(191) NULL,
    `building_plan` VARCHAR(191) NULL,
    `scrutiny_fees` VARCHAR(191) NULL,
    `coast_guard_noc` VARCHAR(191) NULL,
    `fire_noc` VARCHAR(191) NULL,
    `crz_noc` VARCHAR(191) NULL,
    `layout_plan` VARCHAR(191) NULL,
    `revised_plan` VARCHAR(191) NULL,
    `fsi` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `payment_doc` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plinth_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `permission_number` VARCHAR(191) NULL,
    `permission_date` DATETIME(3) NULL,
    `architect_name` VARCHAR(191) NULL,
    `architect_license` VARCHAR(191) NULL,
    `valid_upto` DATETIME(3) NULL,
    `architect_address` VARCHAR(191) NULL,
    `applicant_uid` VARCHAR(191) NULL,
    `annexure_eleven` VARCHAR(191) NULL,
    `copy_construcation_license` VARCHAR(191) NULL,
    `building_plan` VARCHAR(191) NULL,
    `architect_signature` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `payment_doc` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `oc_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `survey_no` VARCHAR(191) NULL,
    `sub_division` VARCHAR(191) NULL,
    `permission_number` VARCHAR(191) NULL,
    `permission_date` DATETIME(3) NULL,
    `architect_name` VARCHAR(191) NULL,
    `architect_license` VARCHAR(191) NULL,
    `valid_upto` DATETIME(3) NULL,
    `completion_date` DATETIME(3) NULL,
    `applicant_uid` VARCHAR(191) NULL,
    `completion_certificate` VARCHAR(191) NULL,
    `construction_permission` VARCHAR(191) NULL,
    `building_plan` VARCHAR(191) NULL,
    `annexure_fourteen` VARCHAR(191) NULL,
    `coast_guard_noc` VARCHAR(191) NULL,
    `fire_noc` VARCHAR(191) NULL,
    `rainwater_harvest` VARCHAR(191) NULL,
    `deviation_plan` VARCHAR(191) NULL,
    `indemnity` VARCHAR(191) NULL,
    `valuation_certificate` VARCHAR(191) NULL,
    `labour_cess` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `attachments` JSON NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `comments_dept` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `payment_doc` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marriage_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `event_name` VARCHAR(191) NULL,
    `event_address` VARCHAR(191) NULL,
    `relation` VARCHAR(191) NULL,
    `witness_1_url` VARCHAR(191) NULL,
    `witness_2_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roadshow_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `event_name` VARCHAR(191) NULL,
    `event_address` VARCHAR(191) NULL,
    `route_info` VARCHAR(191) NULL,
    `relation` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `doc_1_url` VARCHAR(191) NULL,
    `doc_2_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `religious_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `event_name` VARCHAR(191) NULL,
    `event_address` VARCHAR(191) NULL,
    `route_info` VARCHAR(191) NULL,
    `relation` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `doc_1_url` VARCHAR(191) NULL,
    `doc_2_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generic_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `event_name` VARCHAR(191) NULL,
    `event_address` VARCHAR(191) NULL,
    `route_info` VARCHAR(191) NULL,
    `relation` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `doc_1_url` VARCHAR(191) NULL,
    `doc_2_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `temp_water_connect_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `ownership_type` ENUM('OWNERSHIP', 'TENANT') NOT NULL DEFAULT 'OWNERSHIP',
    `ward_number` VARCHAR(191) NULL,
    `muncipal_type` ENUM('PANCHAYAT', 'DMC') NOT NULL DEFAULT 'DMC',
    `diameter` VARCHAR(191) NULL,
    `entity_type` ENUM('RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL') NOT NULL DEFAULT 'RESIDENTIAL',
    `connection_type` ENUM('DOMESTIC', 'NONDOMESTIC') NOT NULL DEFAULT 'DOMESTIC',
    `purpose` VARCHAR(191) NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `house_tax_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `electric_bill_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `new_water_connection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `ownership_type` ENUM('OWNERSHIP', 'TENANT') NOT NULL DEFAULT 'OWNERSHIP',
    `ward_number` VARCHAR(191) NULL,
    `muncipal_type` ENUM('PANCHAYAT', 'DMC') NOT NULL DEFAULT 'DMC',
    `diameter` VARCHAR(191) NULL,
    `entity_type` ENUM('RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL') NOT NULL DEFAULT 'RESIDENTIAL',
    `connection_type` ENUM('DOMESTIC', 'NONDOMESTIC') NOT NULL DEFAULT 'DOMESTIC',
    `purpose` VARCHAR(191) NULL,
    `from_date` DATETIME(3) NULL,
    `house_tax_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `electric_bill_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `temp_water_disconnect` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `ownership_type` ENUM('OWNERSHIP', 'TENANT') NOT NULL DEFAULT 'OWNERSHIP',
    `ward_number` VARCHAR(191) NULL,
    `muncipal_type` ENUM('PANCHAYAT', 'DMC') NOT NULL DEFAULT 'DMC',
    `entity_type` ENUM('RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL') NOT NULL DEFAULT 'RESIDENTIAL',
    `connection_type` ENUM('DOMESTIC', 'NONDOMESTIC') NOT NULL DEFAULT 'DOMESTIC',
    `purpose` VARCHAR(191) NULL,
    `meter_number` VARCHAR(191) NULL,
    `to_date` DATETIME(3) NULL,
    `house_tax_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `electric_bill_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permanent_water_disconnect` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `ownership_type` ENUM('OWNERSHIP', 'TENANT') NOT NULL DEFAULT 'OWNERSHIP',
    `ward_number` VARCHAR(191) NULL,
    `muncipal_type` ENUM('PANCHAYAT', 'DMC') NOT NULL DEFAULT 'DMC',
    `old_diameter` VARCHAR(191) NULL,
    `new_diameter` VARCHAR(191) NULL,
    `entity_type` ENUM('RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL') NOT NULL DEFAULT 'RESIDENTIAL',
    `connection_type` ENUM('DOMESTIC', 'NONDOMESTIC') NOT NULL DEFAULT 'DOMESTIC',
    `purpose` VARCHAR(191) NULL,
    `meter_number` VARCHAR(191) NULL,
    `house_tax_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `electric_bill_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `water_size_change` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `ownership_type` ENUM('OWNERSHIP', 'TENANT') NOT NULL DEFAULT 'OWNERSHIP',
    `ward_number` VARCHAR(191) NULL,
    `muncipal_type` ENUM('PANCHAYAT', 'DMC') NOT NULL DEFAULT 'DMC',
    `old_diameter` VARCHAR(191) NULL,
    `new_diameter` VARCHAR(191) NULL,
    `entity_type` ENUM('RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL') NOT NULL DEFAULT 'RESIDENTIAL',
    `connection_type` ENUM('DOMESTIC', 'NONDOMESTIC') NOT NULL DEFAULT 'DOMESTIC',
    `purpose` VARCHAR(191) NULL,
    `meter_number` VARCHAR(191) NULL,
    `house_tax_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `electric_bill_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `water_reconnect` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `ownership_type` ENUM('OWNERSHIP', 'TENANT') NOT NULL DEFAULT 'OWNERSHIP',
    `ward_number` VARCHAR(191) NULL,
    `muncipal_type` ENUM('PANCHAYAT', 'DMC') NOT NULL DEFAULT 'DMC',
    `entity_type` ENUM('RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL') NOT NULL DEFAULT 'RESIDENTIAL',
    `connection_type` ENUM('DOMESTIC', 'NONDOMESTIC') NOT NULL DEFAULT 'DOMESTIC',
    `purpose_of_disconnection` VARCHAR(191) NULL,
    `purpose_of_reconection` VARCHAR(191) NULL,
    `meter_number` VARCHAR(191) NULL,
    `house_tax_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `electric_bill_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `birth_certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'MALE',
    `date_of_birth` DATETIME(3) NULL,
    `father_name` VARCHAR(191) NULL,
    `mother_name` VARCHAR(191) NULL,
    `registration_number` VARCHAR(191) NULL,
    `date_of_registration` DATETIME(3) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `father_uid_url` VARCHAR(191) NULL,
    `mother_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `birth_teor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'MALE',
    `date_of_birth` DATETIME(3) NULL,
    `father_name` VARCHAR(191) NULL,
    `mother_name` VARCHAR(191) NULL,
    `registration_number` VARCHAR(191) NULL,
    `date_of_registration` DATETIME(3) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `father_uid_url` VARCHAR(191) NULL,
    `mother_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `death_certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'MALE',
    `date_of_birth` DATETIME(3) NULL,
    `date_of_death` DATETIME(3) NULL,
    `place_of_death` VARCHAR(191) NULL,
    `father_name` VARCHAR(191) NULL,
    `mother_name` VARCHAR(191) NULL,
    `husband_name` VARCHAR(191) NULL,
    `registration_number` VARCHAR(191) NULL,
    `date_of_registration` DATETIME(3) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `father_uid_url` VARCHAR(191) NULL,
    `mother_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `death_teor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'MALE',
    `date_of_birth` DATETIME(3) NULL,
    `date_of_death` DATETIME(3) NULL,
    `place_of_death` VARCHAR(191) NULL,
    `father_name` VARCHAR(191) NULL,
    `mother_name` VARCHAR(191) NULL,
    `husband_name` VARCHAR(191) NULL,
    `registration_number` VARCHAR(191) NULL,
    `date_of_registration` DATETIME(3) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `father_uid_url` VARCHAR(191) NULL,
    `mother_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marriage_certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `groom_father_name` VARCHAR(191) NULL,
    `groom_mother_name` VARCHAR(191) NULL,
    `bride_name` VARCHAR(191) NULL,
    `bride_father_name` VARCHAR(191) NULL,
    `bride_mother_name` VARCHAR(191) NULL,
    `registration_number` VARCHAR(191) NULL,
    `date_of_registration` DATETIME(3) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `groom_father_uid_url` VARCHAR(191) NULL,
    `groom_mother_uid_url` VARCHAR(191) NULL,
    `bride_uid_url` VARCHAR(191) NULL,
    `bride_father_uid_url` VARCHAR(191) NULL,
    `bride_mother_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marriage_teor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `groom_father_name` VARCHAR(191) NULL,
    `groom_mother_name` VARCHAR(191) NULL,
    `bride_name` VARCHAR(191) NULL,
    `bride_father_name` VARCHAR(191) NULL,
    `bride_mother_name` VARCHAR(191) NULL,
    `registration_number` VARCHAR(191) NULL,
    `date_of_registration` DATETIME(3) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `groom_father_uid_url` VARCHAR(191) NULL,
    `groom_mother_uid_url` VARCHAR(191) NULL,
    `bride_uid_url` VARCHAR(191) NULL,
    `bride_father_uid_url` VARCHAR(191) NULL,
    `bride_mother_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marriage_register` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `groom_name` VARCHAR(191) NULL,
    `groom_address` VARCHAR(191) NULL,
    `groom_date_of_birth` DATETIME(3) NULL,
    `religion_groom` ENUM('HINDU', 'MUSLIM', 'CHRISTIAN', 'OTHER') NOT NULL DEFAULT 'HINDU',
    `groom_father_name` VARCHAR(191) NULL,
    `groom_mother_name` VARCHAR(191) NULL,
    `bride_name` VARCHAR(191) NULL,
    `bride_address` VARCHAR(191) NULL,
    `bride_date_of_birth` DATETIME(3) NULL,
    `religion_bride` ENUM('HINDU', 'MUSLIM', 'CHRISTIAN', 'OTHER') NOT NULL DEFAULT 'HINDU',
    `bride_father_name` VARCHAR(191) NULL,
    `bride_mother_name` VARCHAR(191) NULL,
    `date_of_marriage` DATETIME(3) NULL,
    `witness_one_details` VARCHAR(191) NULL,
    `witness_two_details` VARCHAR(191) NULL,
    `witness_three_details` VARCHAR(191) NULL,
    `joint_bride_groom_photo_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `bride_uid_url` VARCHAR(191) NULL,
    `bride_url` VARCHAR(191) NULL,
    `witness_one_signature_url` VARCHAR(191) NULL,
    `witness_two_signature_url` VARCHAR(191) NULL,
    `witness_three_signature_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `groom_signature_url` VARCHAR(191) NULL,
    `bride_signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `birth_register` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `user_uid` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `date_of_birth` DATETIME(3) NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'MALE',
    `name_of_child` VARCHAR(191) NULL,
    `father_name` VARCHAR(191) NULL,
    `mother_name` VARCHAR(191) NULL,
    `grandfather_name` VARCHAR(191) NULL,
    `grandmother_name` VARCHAR(191) NULL,
    `birth_place` ENUM('HOME', 'HOSPITAL', 'OTHER') NOT NULL DEFAULT 'HOSPITAL',
    `birth_place_name` VARCHAR(191) NULL,
    `current_address` VARCHAR(191) NULL,
    `permanent_address` VARCHAR(191) NULL,
    `religion_child` ENUM('HINDU', 'MUSLIM', 'CHRISTIAN', 'OTHER') NOT NULL DEFAULT 'HINDU',
    `father_education` VARCHAR(191) NULL,
    `mother_education` VARCHAR(191) NULL,
    `father_occupation` VARCHAR(191) NULL,
    `mother_occupation` VARCHAR(191) NULL,
    `mother_date_of_birth` DATETIME(3) NULL,
    `date_of_marriage` DATETIME(3) NULL,
    `attender_type` ENUM('DOCTOR', 'NOURSE', 'DOMESTICEXPERT', 'OTHER') NOT NULL DEFAULT 'DOCTOR',
    `delivery_method` ENUM('NATURAL', 'CSECTION', 'VACCUM', 'OTHER') NOT NULL DEFAULT 'NATURAL',
    `weight_of_child_at_birth` VARCHAR(191) NULL,
    `previous_child_count` INTEGER NOT NULL DEFAULT 0,
    `number_of_week_of_pregnency` INTEGER NULL,
    `father_uid_url` VARCHAR(191) NULL,
    `mother_uid_url` VARCHAR(191) NULL,
    `authority_letter_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `death_regiser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `name_of_deceased` VARCHAR(191) NULL,
    `deceased_uid` VARCHAR(191) NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL DEFAULT 'MALE',
    `date_of_birth` DATETIME(3) NULL,
    `father_name` VARCHAR(191) NULL,
    `mother_name` VARCHAR(191) NULL,
    `wife_name` VARCHAR(191) NULL,
    `religion_deceased` ENUM('HINDU', 'MUSLIM', 'CHRISTIAN', 'OTHER') NOT NULL DEFAULT 'HINDU',
    `current_address` VARCHAR(191) NULL,
    `permanent_address` VARCHAR(191) NULL,
    `deceased_occupation` VARCHAR(191) NULL,
    `date_of_death` DATETIME(3) NULL,
    `death_place` ENUM('HOME', 'HOSPITAL', 'OTHER') NOT NULL DEFAULT 'HOSPITAL',
    `death_place_name` VARCHAR(191) NULL,
    `death_place_address` VARCHAR(191) NULL,
    `death_certified` BOOLEAN NULL,
    `name_of_disease` VARCHAR(191) NULL,
    `attender_type` ENUM('DOCTOR', 'NOURSE', 'DOMESTICEXPERT', 'OTHER') NOT NULL DEFAULT 'DOCTOR',
    `pregnancy_death` BOOLEAN NULL,
    `smoker_death` BOOLEAN NULL,
    `alcoholic_death` BOOLEAN NULL,
    `deceased_uid_url` VARCHAR(191) NULL,
    `father_uid_url` VARCHAR(191) NULL,
    `authority_letter_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` LONGTEXT NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `survey` ADD CONSTRAINT `survey_villageId_fkey` FOREIGN KEY (`villageId`) REFERENCES `village`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_to_user_id_fkey` FOREIGN KEY (`to_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_from_user_id_fkey` FOREIGN KEY (`from_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `common` ADD CONSTRAINT `common_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rti_form` ADD CONSTRAINT `rti_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `zone_info_form` ADD CONSTRAINT `zone_info_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `zone_info_form` ADD CONSTRAINT `zone_info_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `petroleum_form` ADD CONSTRAINT `petroleum_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `petroleum_form` ADD CONSTRAINT `petroleum_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `old_copy_form` ADD CONSTRAINT `old_copy_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `old_copy_form` ADD CONSTRAINT `old_copy_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `land_section_form` ADD CONSTRAINT `land_section_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_deptuser_id_fkey` FOREIGN KEY (`deptuser_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cp_form` ADD CONSTRAINT `cp_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cp_form` ADD CONSTRAINT `cp_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plinth_form` ADD CONSTRAINT `plinth_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plinth_form` ADD CONSTRAINT `plinth_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `oc_form` ADD CONSTRAINT `oc_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `oc_form` ADD CONSTRAINT `oc_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_form` ADD CONSTRAINT `marriage_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_form` ADD CONSTRAINT `marriage_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roadshow_form` ADD CONSTRAINT `roadshow_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roadshow_form` ADD CONSTRAINT `roadshow_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `religious_form` ADD CONSTRAINT `religious_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `religious_form` ADD CONSTRAINT `religious_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `generic_form` ADD CONSTRAINT `generic_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `generic_form` ADD CONSTRAINT `generic_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `temp_water_connect_form` ADD CONSTRAINT `temp_water_connect_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `temp_water_connect_form` ADD CONSTRAINT `temp_water_connect_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `new_water_connection` ADD CONSTRAINT `new_water_connection_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `new_water_connection` ADD CONSTRAINT `new_water_connection_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `temp_water_disconnect` ADD CONSTRAINT `temp_water_disconnect_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `temp_water_disconnect` ADD CONSTRAINT `temp_water_disconnect_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permanent_water_disconnect` ADD CONSTRAINT `permanent_water_disconnect_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permanent_water_disconnect` ADD CONSTRAINT `permanent_water_disconnect_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `water_size_change` ADD CONSTRAINT `water_size_change_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `water_size_change` ADD CONSTRAINT `water_size_change_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `water_reconnect` ADD CONSTRAINT `water_reconnect_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `water_reconnect` ADD CONSTRAINT `water_reconnect_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `birth_certificate` ADD CONSTRAINT `birth_certificate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `birth_certificate` ADD CONSTRAINT `birth_certificate_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `birth_teor` ADD CONSTRAINT `birth_teor_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `birth_teor` ADD CONSTRAINT `birth_teor_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `death_certificate` ADD CONSTRAINT `death_certificate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `death_certificate` ADD CONSTRAINT `death_certificate_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `death_teor` ADD CONSTRAINT `death_teor_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `death_teor` ADD CONSTRAINT `death_teor_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_certificate` ADD CONSTRAINT `marriage_certificate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_certificate` ADD CONSTRAINT `marriage_certificate_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_teor` ADD CONSTRAINT `marriage_teor_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_teor` ADD CONSTRAINT `marriage_teor_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_register` ADD CONSTRAINT `marriage_register_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_register` ADD CONSTRAINT `marriage_register_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `birth_register` ADD CONSTRAINT `birth_register_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `birth_register` ADD CONSTRAINT `birth_register_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `death_regiser` ADD CONSTRAINT `death_regiser_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `death_regiser` ADD CONSTRAINT `death_regiser_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
