
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    NONE = "NONE",
    SYSTEM = "SYSTEM",
    ADMIN = "ADMIN",
    COLLECTOR = "COLLECTOR",
    DYCOLLECTOR = "DYCOLLECTOR",
    ATP = "ATP",
    JTP = "JTP",
    MAMLATDAR = "MAMLATDAR",
    FIRE = "FIRE",
    LANDSUPTD = "LANDSUPTD",
    JE = "JE",
    SITESUPERVISOR = "SITESUPERVISOR",
    ARCHITECTASST = "ARCHITECTASST",
    PLANNINGDRAUGHTSMAN = "PLANNINGDRAUGHTSMAN",
    ARCHDRAUGHTSMANSP = "ARCHDRAUGHTSMANSP",
    ARCHDRAUGHTSMANST = "ARCHDRAUGHTSMANST",
    SUPERINTENDENT = "SUPERINTENDENT",
    LDC = "LDC",
    UDC = "UDC",
    SHO = "SHO",
    HEADCLERK = "HEADCLERK",
    USER = "USER"
}

export enum Department {
    NONE = "NONE",
    PDA = "PDA",
    EOCS = "EOCS",
    LAND = "LAND",
    MAMLATDAR = "MAMLATDAR",
    COLLECTOR = "COLLECTOR",
    DYCOLLECTOR = "DYCOLLECTOR",
    FIRE = "FIRE",
    COASTGUARD = "COASTGUARD",
    EST = "EST",
    DMC = "DMC",
    CRSR = "CRSR",
    PWD = "PWD"
}

export enum Status {
    NONE = "NONE",
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum NocType {
    NONE = "NONE",
    NOCTYPEONE = "NOCTYPEONE",
    NOCTYPETWO = "NOCTYPETWO",
    NOCTYPETHREE = "NOCTYPETHREE"
}

export enum ClassType {
    NONE = "NONE",
    CLASSTYPEONE = "CLASSTYPEONE",
    CLASSTYPETWO = "CLASSTYPETWO",
    CLASSTYPETHREE = "CLASSTYPETHREE"
}

export enum OutletType {
    NONE = "NONE",
    OUTLETTYPEONE = "OUTLETTYPEONE",
    OUTLETTYPETWO = "OUTLETTYPETWO",
    OUTLETTYPETHREE = "OUTLETTYPETHREE"
}

export enum Agree {
    NONE = "NONE",
    YES = "YES",
    NO = "NO"
}

export enum FormType {
    NONE = "NONE",
    PETROLEUM = "PETROLEUM",
    RTI = "RTI",
    ZONE = "ZONE",
    DEMOLITION = "DEMOLITION",
    OLDCOPY = "OLDCOPY",
    LANDRECORDS = "LANDRECORDS",
    UNAUTHORISED = "UNAUTHORISED",
    CP = "CP",
    OC = "OC",
    PLINTH = "PLINTH",
    MARRIAGE = "MARRIAGE",
    RELIGIOUS = "RELIGIOUS",
    ROADSHOW = "ROADSHOW",
    GENERIC = "GENERIC",
    BIRTHCERT = "BIRTHCERT",
    BIRTHTEOR = "BIRTHTEOR",
    DEATHCERT = "DEATHCERT",
    DEATHTEOR = "DEATHTEOR",
    MARRIAGECERT = "MARRIAGECERT",
    MARRIAGETEOR = "MARRIAGETEOR",
    MARRIAGEREGISTER = "MARRIAGEREGISTER",
    TEMPWATERCONNECT = "TEMPWATERCONNECT",
    TEMPWATERDISCONNECT = "TEMPWATERDISCONNECT",
    WATERSIZECHANGE = "WATERSIZECHANGE",
    NEWWATERCONNECT = "NEWWATERCONNECT",
    WATERRECONNECT = "WATERRECONNECT",
    PERMANENTWATERDISCONNECT = "PERMANENTWATERDISCONNECT",
    DEATHREGISTER = "DEATHREGISTER",
    BIRTHREGISTER = "BIRTHREGISTER"
}

export enum queryStatus {
    NONE = "NONE",
    SUBMIT = "SUBMIT",
    INPROCESS = "INPROCESS",
    PAYMENT = "PAYMENT",
    QUERYRAISED = "QUERYRAISED",
    APPROVED = "APPROVED",
    REJCTED = "REJCTED",
    CERTIFICATEGRANT = "CERTIFICATEGRANT",
    COMPLETED = "COMPLETED"
}

export enum QueryType {
    NONE = "NONE",
    INTRA = "INTRA",
    INTER = "INTER",
    PUBLIC = "PUBLIC"
}

export enum QueryStatus {
    NONE = "NONE",
    SENT = "SENT",
    RECEIVED = "RECEIVED",
    REPLIED = "REPLIED",
    RESOLVED = "RESOLVED"
}

export enum PaymentType {
    NONE = "NONE",
    CASH = "CASH",
    CHEQUE = "CHEQUE",
    NETBANKING = "NETBANKING",
    CCDC = "CCDC",
    UPI = "UPI"
}

export enum PaymentStatus {
    NONE = "NONE",
    PENDING = "PENDING",
    PAID = "PAID"
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export enum BirthPlace {
    HOME = "HOME",
    HOSPITAL = "HOSPITAL",
    OTHER = "OTHER"
}

export enum Religion {
    HINDU = "HINDU",
    MUSLIM = "MUSLIM",
    CHRISTIAN = "CHRISTIAN",
    OTHER = "OTHER"
}

export enum AttendentType {
    DOCTOR = "DOCTOR",
    NURSE = "NURSE",
    DOMESTICEXPERT = "DOMESTICEXPERT",
    OTHER = "OTHER"
}

export enum DeliveryMethod {
    NATURAL = "NATURAL",
    CSECTION = "CSECTION",
    VACCUM = "VACCUM",
    OTHER = "OTHER"
}

export enum TypeOfInfo {
    NONE = "NONE",
    CP = "CP",
    OC = "OC",
    MAPS = "MAPS"
}

export enum OwnerShipType {
    OWNERSHIP = "OWNERSHIP",
    TENANT = "TENANT"
}

export enum MuncipalType {
    PANCHAYAT = "PANCHAYAT",
    DMC = "DMC"
}

export enum EntityType {
    RESIDENTIAL = "RESIDENTIAL",
    COMMERCIAL = "COMMERCIAL",
    INDUSTRIAL = "INDUSTRIAL"
}

export enum ConnectionType {
    DOMESTIC = "DOMESTIC",
    NONDOMESTIC = "NONDOMESTIC"
}

export enum UserType {
    USER = "USER",
    DEPARTMENT = "DEPARTMENT"
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface MobileLoginInput {
    contact?: Nullable<string>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
}

export interface SearchCommonInput {
    form_id?: Nullable<number>;
    user_id?: Nullable<number>;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village?: Nullable<string>;
    name?: Nullable<string>;
    number?: Nullable<string>;
    event_date?: Nullable<DateTime>;
    form_status?: Nullable<number>;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface FilterCommonInput {
    user_type?: Nullable<UserType>;
    user_id: number;
    form_type?: Nullable<FormType>;
}

export interface SendFileLandsectionInput {
    stageId: string;
    formRefId: string;
    documentUrl: string;
}

export interface SearchDealinghandInput {
    file_type: string;
    collector: boolean;
    dycollector: boolean;
    atp: boolean;
    jtp: boolean;
    je: boolean;
    fieldinspector: boolean;
    sitesupervisor: boolean;
    architectassistant: boolean;
    planningdraughtsman: boolean;
    spdraughtsman: boolean;
    stdraughtsman: boolean;
    landsupted: boolean;
    mamlatdar: boolean;
    eocs: boolean;
    dept1: boolean;
    dept2: boolean;
    dept3: boolean;
    dept4: boolean;
}

export interface SearchSurveyInput {
    villageId?: Nullable<number>;
    survey_no?: Nullable<string>;
    sub_division?: Nullable<string>;
    owner_name?: Nullable<string>;
}

export interface SearchQueryInput {
    stage: FormType;
    form_id: number;
    user_id?: Nullable<number>;
    status?: Nullable<Status>;
    query_type?: Nullable<QueryType>;
}

export interface SearchPaymentInput {
    form_id?: Nullable<number>;
    deptuser_id?: Nullable<number>;
    user_id?: Nullable<number>;
    type1?: Nullable<number>;
    amount1?: Nullable<number>;
    type2?: Nullable<number>;
    amount2?: Nullable<number>;
    type3?: Nullable<number>;
    amount3?: Nullable<number>;
    daycount?: Nullable<number>;
    paymentamout?: Nullable<number>;
    form_type?: Nullable<FormType>;
    paymentstatus?: Nullable<PaymentStatus>;
    id?: Nullable<number>;
    reference?: Nullable<string>;
    paymentType?: Nullable<PaymentType>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateRtiInput {
    userId: number;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    user_uid?: Nullable<string>;
    subject_info: string;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    description: string;
    information?: Nullable<string>;
    proverty_line_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    signature_url?: Nullable<string>;
    remarks?: Nullable<string>;
    attachments?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateRtiInput {
    userId?: Nullable<number>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    user_uid?: Nullable<string>;
    subject_info?: Nullable<string>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    description?: Nullable<string>;
    information?: Nullable<string>;
    proverty_line_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    signature_url?: Nullable<string>;
    remarks?: Nullable<string>;
    attachments?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    contact?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_kay?: Nullable<string>;
    role?: Nullable<Role>;
    department?: Nullable<Department>;
    address?: Nullable<string>;
    otp?: Nullable<string>;
    user_uid?: Nullable<string>;
    status?: Nullable<Status>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreatePetroleumInput {
    name: string;
    userId: number;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    company_name?: Nullable<string>;
    company_region?: Nullable<string>;
    designation?: Nullable<string>;
    noc_type?: Nullable<NocType>;
    class_type?: Nullable<ClassType>;
    outlet_type?: Nullable<OutletType>;
    capacity?: Nullable<number>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    noc_fire_url?: Nullable<string>;
    na_order_url?: Nullable<string>;
    sanad_url?: Nullable<string>;
    coastguard_url?: Nullable<string>;
    plan_url?: Nullable<string>;
    explosive_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdatePetroleumInput {
    name?: Nullable<string>;
    userId?: Nullable<number>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    company_name?: Nullable<string>;
    company_region?: Nullable<string>;
    designation?: Nullable<string>;
    noc_type?: Nullable<NocType>;
    class_type?: Nullable<ClassType>;
    outlet_type?: Nullable<OutletType>;
    capacity?: Nullable<number>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    noc_fire_url?: Nullable<string>;
    na_order_url?: Nullable<string>;
    sanad_url?: Nullable<string>;
    coastguard_url?: Nullable<string>;
    plan_url?: Nullable<string>;
    explosive_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    user_uid?: Nullable<string>;
    location_address?: Nullable<string>;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateZoneinfoInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    nakel_url_1_14: string;
    remarks?: Nullable<string>;
    nakal_url_1_14?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateZoneinfoInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    nakel_url_1_14?: Nullable<string>;
    remarks?: Nullable<string>;
    nakal_url_1_14?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateOldcopyInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    prev_application_date?: Nullable<DateTime>;
    prev_application_number?: Nullable<string>;
    type_of_information?: Nullable<TypeOfInfo>;
    information_needed?: Nullable<string>;
    aadhar_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateOldcopyInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    prev_application_date?: Nullable<DateTime>;
    prev_application_number?: Nullable<string>;
    type_of_information?: Nullable<TypeOfInfo>;
    information_needed?: Nullable<string>;
    aadhar_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface SignUpUserInput {
    name: string;
    contact: string;
    password: string;
}

export interface CreateCommonInput {
    form_id: number;
    user_id: number;
    auth_user_id: string;
    focal_user_id: string;
    intra_user_id: string;
    inter_user_id: string;
    village: string;
    name: string;
    number: string;
    event_date?: Nullable<DateTime>;
    form_status: number;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
}

export interface UpdateCommonInput {
    form_id?: Nullable<number>;
    user_id?: Nullable<number>;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village?: Nullable<string>;
    name?: Nullable<string>;
    number?: Nullable<string>;
    event_date?: Nullable<DateTime>;
    form_status?: Nullable<number>;
    form_type?: Nullable<FormType>;
    query_status?: Nullable<queryStatus>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateLandsectionInput {
    userId: number;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    area?: Nullable<string>;
    na_type?: Nullable<string>;
    zone?: Nullable<string>;
    road_access?: Nullable<string>;
    no_road_access?: Nullable<string>;
    width_adequate?: Nullable<string>;
    is_dimension_plot_adequate?: Nullable<string>;
    is_crz?: Nullable<string>;
    is_monument?: Nullable<string>;
    other_remark?: Nullable<string>;
    atp_recommendation?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateLandsectionInput {
    userId?: Nullable<number>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    area?: Nullable<string>;
    na_type?: Nullable<string>;
    zone?: Nullable<string>;
    road_access?: Nullable<string>;
    no_road_access?: Nullable<string>;
    width_adequate?: Nullable<string>;
    is_dimension_plot_adequate?: Nullable<string>;
    is_crz?: Nullable<string>;
    is_monument?: Nullable<string>;
    other_remark?: Nullable<string>;
    atp_recommendation?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    is_mounment?: Nullable<string>;
    illegal_sqmt?: Nullable<string>;
    attachments?: Nullable<string>;
    recommend?: Nullable<boolean>;
    deletedAt?: Nullable<DateTime>;
}

export interface OutsideLandsectionInput {
    form_id: number;
    stage_id: number;
    village_id: number;
    name: string;
    survey_no: string;
    area: string;
    purpose: string;
    number: string;
}

export interface CreateDealinghandInput {
    file_type: FormType;
    collector?: Nullable<boolean>;
    dycollector?: Nullable<boolean>;
    atp?: Nullable<boolean>;
    jtp?: Nullable<boolean>;
    je?: Nullable<boolean>;
    fieldinspector?: Nullable<boolean>;
    sitesupervisor?: Nullable<boolean>;
    architectassistant?: Nullable<boolean>;
    planningdraughtsman?: Nullable<boolean>;
    spdraughtsman?: Nullable<boolean>;
    stdraughtsman?: Nullable<boolean>;
    landsupted?: Nullable<boolean>;
    mamlatdar?: Nullable<boolean>;
    eocs?: Nullable<boolean>;
    dept1?: Nullable<boolean>;
    dept2?: Nullable<boolean>;
    dept3?: Nullable<boolean>;
    dept4?: Nullable<boolean>;
}

export interface UpdateDealinghandInput {
    file_type?: Nullable<FormType>;
    collector?: Nullable<boolean>;
    dycollector?: Nullable<boolean>;
    atp?: Nullable<boolean>;
    jtp?: Nullable<boolean>;
    je?: Nullable<boolean>;
    fieldinspector?: Nullable<boolean>;
    sitesupervisor?: Nullable<boolean>;
    architectassistant?: Nullable<boolean>;
    planningdraughtsman?: Nullable<boolean>;
    spdraughtsman?: Nullable<boolean>;
    stdraughtsman?: Nullable<boolean>;
    landsupted?: Nullable<boolean>;
    mamlatdar?: Nullable<boolean>;
    eocs?: Nullable<boolean>;
    dept1?: Nullable<boolean>;
    dept2?: Nullable<boolean>;
    dept3?: Nullable<boolean>;
    dept4?: Nullable<boolean>;
    id: number;
}

export interface CreateQueryInput {
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateQueryInput {
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    deletedAt?: Nullable<DateTime>;
}

export interface CreatePaymentInput {
    form_id: number;
    deptuser_id: number;
    user_id: number;
    type1?: Nullable<number>;
    amount1?: Nullable<number>;
    type2?: Nullable<number>;
    amount2?: Nullable<number>;
    type3?: Nullable<number>;
    amount3?: Nullable<number>;
    daycount?: Nullable<number>;
    paymentamout?: Nullable<number>;
    form_type: FormType;
    paymentstatus: PaymentStatus;
}

export interface UpdatePaymentInput {
    form_id?: Nullable<number>;
    deptuser_id?: Nullable<number>;
    user_id?: Nullable<number>;
    type1?: Nullable<number>;
    amount1?: Nullable<number>;
    type2?: Nullable<number>;
    amount2?: Nullable<number>;
    type3?: Nullable<number>;
    amount3?: Nullable<number>;
    daycount?: Nullable<number>;
    paymentamout?: Nullable<number>;
    form_type?: Nullable<FormType>;
    paymentstatus?: Nullable<PaymentStatus>;
    id: number;
    reference?: Nullable<string>;
    paymentType?: Nullable<PaymentType>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateCpInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    applicant_uid?: Nullable<string>;
    annexure_two?: Nullable<string>;
    annexure_three?: Nullable<string>;
    annexure_four?: Nullable<string>;
    annexure_five?: Nullable<string>;
    na_copoy?: Nullable<string>;
    map_copy?: Nullable<string>;
    nakal_1_14?: Nullable<string>;
    building_plan?: Nullable<string>;
    scrutiny_fees?: Nullable<string>;
    coast_guard_noc?: Nullable<string>;
    fire_noc?: Nullable<string>;
    crz_noc?: Nullable<string>;
    layout_plan?: Nullable<string>;
    revised_plan?: Nullable<string>;
    fsi?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateCpInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    applicant_uid?: Nullable<string>;
    annexure_two?: Nullable<string>;
    annexure_three?: Nullable<string>;
    annexure_four?: Nullable<string>;
    annexure_five?: Nullable<string>;
    na_copoy?: Nullable<string>;
    map_copy?: Nullable<string>;
    nakal_1_14?: Nullable<string>;
    building_plan?: Nullable<string>;
    scrutiny_fees?: Nullable<string>;
    coast_guard_noc?: Nullable<string>;
    fire_noc?: Nullable<string>;
    crz_noc?: Nullable<string>;
    layout_plan?: Nullable<string>;
    revised_plan?: Nullable<string>;
    fsi?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreatePlinthInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    permission_number?: Nullable<string>;
    permission_date?: Nullable<DateTime>;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    architect_address?: Nullable<string>;
    applicant_uid?: Nullable<string>;
    annexure_eleven?: Nullable<string>;
    copy_construcation_license?: Nullable<string>;
    building_plan?: Nullable<string>;
    architect_signature?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdatePlinthInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    permission_number?: Nullable<string>;
    permission_date?: Nullable<DateTime>;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    architect_address?: Nullable<string>;
    applicant_uid?: Nullable<string>;
    annexure_eleven?: Nullable<string>;
    copy_construcation_license?: Nullable<string>;
    building_plan?: Nullable<string>;
    architect_signature?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateOcInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    permission_number?: Nullable<string>;
    permission_date?: Nullable<DateTime>;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    completion_date?: Nullable<DateTime>;
    applicant_uid?: Nullable<string>;
    completion_certificate?: Nullable<string>;
    construction_permission?: Nullable<string>;
    building_plan?: Nullable<string>;
    annexure_fourteen?: Nullable<string>;
    coast_guard_noc?: Nullable<string>;
    fire_noc?: Nullable<string>;
    rainwater_harvest?: Nullable<string>;
    deviation_plan?: Nullable<string>;
    indemnity?: Nullable<string>;
    valuation_certificate?: Nullable<string>;
    labour_cess?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateOcInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    permission_number?: Nullable<string>;
    permission_date?: Nullable<DateTime>;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    completion_date?: Nullable<DateTime>;
    applicant_uid?: Nullable<string>;
    completion_certificate?: Nullable<string>;
    construction_permission?: Nullable<string>;
    building_plan?: Nullable<string>;
    annexure_fourteen?: Nullable<string>;
    coast_guard_noc?: Nullable<string>;
    fire_noc?: Nullable<string>;
    rainwater_harvest?: Nullable<string>;
    deviation_plan?: Nullable<string>;
    indemnity?: Nullable<string>;
    valuation_certificate?: Nullable<string>;
    labour_cess?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateMarriageInput {
    userId: number;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    from_date: DateTime;
    to_date?: Nullable<DateTime>;
    event_name: string;
    event_address: string;
    relation?: Nullable<string>;
    witness_1_url?: Nullable<string>;
    witness_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateMarriageInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    relation?: Nullable<string>;
    witness_1_url?: Nullable<string>;
    witness_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateRoadshowInput {
    userId: number;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    from_date: DateTime;
    to_date?: Nullable<DateTime>;
    event_name: string;
    event_address: string;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateRoadshowInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateReligiousInput {
    userId: number;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    from_date: DateTime;
    to_date?: Nullable<DateTime>;
    event_name: string;
    event_address: string;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateReligiousInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateBirthRegisterInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    date_of_birth: DateTime;
    gender: Gender;
    name_of_child: string;
    father_name: string;
    mother_name: string;
    grandfather_name: string;
    grandmother_name: string;
    birth_place: BirthPlace;
    birth_place_name: string;
    current_address: string;
    permanent_address: string;
    religion_child: Religion;
    father_education: string;
    mother_education: string;
    father_occupation: string;
    mother_occupation: string;
    mother_date_of_birth: DateTime;
    date_of_marriage: DateTime;
    attender_type: AttendentType;
    delivery_method: DeliveryMethod;
    weight_of_child_at_birth: string;
    previous_child_count: number;
    number_of_week_of_pregnency: number;
    father_uid_url: string;
    mother_uid_url: string;
    authority_letter_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateBirthRegisterInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    date_of_birth?: Nullable<DateTime>;
    gender?: Nullable<Gender>;
    name_of_child?: Nullable<string>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    grandfather_name?: Nullable<string>;
    grandmother_name?: Nullable<string>;
    birth_place?: Nullable<BirthPlace>;
    birth_place_name?: Nullable<string>;
    current_address?: Nullable<string>;
    permanent_address?: Nullable<string>;
    religion_child?: Nullable<Religion>;
    father_education?: Nullable<string>;
    mother_education?: Nullable<string>;
    father_occupation?: Nullable<string>;
    mother_occupation?: Nullable<string>;
    mother_date_of_birth?: Nullable<DateTime>;
    date_of_marriage?: Nullable<DateTime>;
    attender_type?: Nullable<AttendentType>;
    delivery_method?: Nullable<DeliveryMethod>;
    weight_of_child_at_birth?: Nullable<string>;
    previous_child_count?: Nullable<number>;
    number_of_week_of_pregnency?: Nullable<number>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    authority_letter_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateDeathRegiserInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    date_of_birth: DateTime;
    gender: Gender;
    name_of_deceased: string;
    date_of_death: DateTime;
    father_name: string;
    mother_name: string;
    wife_name: string;
    death_place: BirthPlace;
    death_place_name: string;
    current_address: string;
    permanent_address: string;
    death_place_address: string;
    death_certified: boolean;
    name_of_disease: boolean;
    pregnancy_death: boolean;
    smoker_death: boolean;
    alcoholic_death: boolean;
    religion_deceased: Religion;
    date_of_marriage: DateTime;
    attender_type: AttendentType;
    deceased_uid_url: string;
    father_uid_url: string;
    authority_letter_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateDeathRegiserInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    date_of_birth?: Nullable<DateTime>;
    gender?: Nullable<Gender>;
    name_of_deceased?: Nullable<string>;
    date_of_death: DateTime;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    wife_name?: Nullable<string>;
    death_place?: Nullable<BirthPlace>;
    death_place_name?: Nullable<string>;
    current_address?: Nullable<string>;
    permanent_address?: Nullable<string>;
    death_place_address?: Nullable<string>;
    death_certified?: Nullable<boolean>;
    name_of_disease?: Nullable<boolean>;
    pregnancy_death?: Nullable<boolean>;
    smoker_death?: Nullable<boolean>;
    alcoholic_death?: Nullable<boolean>;
    religion_deceased?: Nullable<Religion>;
    date_of_marriage?: Nullable<DateTime>;
    attender_type?: Nullable<AttendentType>;
    deceased_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    authority_letter_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateTempWaterConnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    ownership_type: OwnerShipType;
    ward_number: string;
    muncipal_type: MuncipalType;
    diameter: string;
    entity_type: EntityType;
    connection_type: ConnectionType;
    purpose: string;
    from_date: DateTime;
    to_date: DateTime;
    house_tax_url: string;
    applicant_uid_url: string;
    electric_bill_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateTempWaterConnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    diameter?: Nullable<string>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateNewWaterConnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    ownership_type: OwnerShipType;
    ward_number: string;
    muncipal_type: MuncipalType;
    diameter: string;
    entity_type: EntityType;
    connection_type: ConnectionType;
    purpose: string;
    from_date: DateTime;
    house_tax_url: string;
    applicant_uid_url: string;
    electric_bill_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateNewWaterConnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    diameter?: Nullable<string>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    from_date?: Nullable<DateTime>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateTempWaterDisconnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    ownership_type: OwnerShipType;
    ward_number: string;
    muncipal_type: MuncipalType;
    entity_type: EntityType;
    connection_type: ConnectionType;
    purpose: string;
    to_date: DateTime;
    meter_number: string;
    house_tax_url: string;
    applicant_uid_url: string;
    electric_bill_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateTempWaterDisconnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    to_date?: Nullable<DateTime>;
    meter_number?: Nullable<string>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreatePermanentWaterDisconnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    ownership_type: OwnerShipType;
    ward_number: string;
    muncipal_type: MuncipalType;
    entity_type: EntityType;
    connection_type: ConnectionType;
    purpose: string;
    to_date: DateTime;
    meter_number: string;
    house_tax_url: string;
    applicant_uid_url: string;
    electric_bill_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdatePermanentWaterDisconnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    to_date?: Nullable<DateTime>;
    meter_number?: Nullable<string>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateWaterSizeChangeInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    ownership_type: OwnerShipType;
    ward_number: string;
    muncipal_type: MuncipalType;
    old_diameter: string;
    new_diameter: string;
    entity_type: EntityType;
    connection_type: ConnectionType;
    purpose: string;
    to_date: DateTime;
    meter_number: string;
    house_tax_url: string;
    applicant_uid_url: string;
    electric_bill_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateWaterSizeChangeInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    old_diameter?: Nullable<string>;
    new_diameter?: Nullable<string>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    to_date?: Nullable<DateTime>;
    meter_number?: Nullable<string>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateWaterReconnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    ownership_type: OwnerShipType;
    ward_number: string;
    muncipal_type: MuncipalType;
    entity_type: EntityType;
    connection_type: ConnectionType;
    purpose: string;
    purpose_of_disconnection: string;
    purpose_of_reconection: string;
    meter_number: string;
    house_tax_url: string;
    applicant_uid_url: string;
    electric_bill_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateWaterReconnectInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    purpose_of_disconnection?: Nullable<string>;
    purpose_of_reconection?: Nullable<string>;
    meter_number?: Nullable<string>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateBirthCertificateInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    gender: Gender;
    date_of_birth: DateTime;
    father_name: string;
    mother_name: string;
    registration_number: string;
    date_of_registration: string;
    applicant_uid_url: string;
    father_uid_url: string;
    mother_uid_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateBirthCertificateInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    gender?: Nullable<Gender>;
    date_of_birth?: Nullable<DateTime>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateBirthTeorInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    gender: Gender;
    date_of_birth: DateTime;
    father_name: string;
    mother_name: string;
    registration_number: string;
    date_of_registration: string;
    applicant_uid_url: string;
    father_uid_url: string;
    mother_uid_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateBirthTeorInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    gender?: Nullable<Gender>;
    date_of_birth?: Nullable<DateTime>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateDeathCertificateInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    gender: Gender;
    date_of_birth: DateTime;
    date_of_death: DateTime;
    place_of_death: string;
    father_name: string;
    mother_name: string;
    husband_name: string;
    registration_number: string;
    date_of_registration: string;
    applicant_uid_url: string;
    father_uid_url: string;
    mother_uid_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateDeathCertificateInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    gender?: Nullable<Gender>;
    date_of_birth?: Nullable<DateTime>;
    date_of_death?: Nullable<DateTime>;
    place_of_death?: Nullable<string>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    husband_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateDeathTeorInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    gender: Gender;
    date_of_birth: DateTime;
    date_of_death: DateTime;
    place_of_death: string;
    father_name: string;
    mother_name: string;
    husband_name: string;
    registration_number: string;
    date_of_registration: string;
    applicant_uid_url: string;
    father_uid_url: string;
    mother_uid_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateDeathTeorInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    gender?: Nullable<Gender>;
    date_of_birth?: Nullable<DateTime>;
    date_of_death?: Nullable<DateTime>;
    place_of_death?: Nullable<string>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    husband_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateMarriageCertificateInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    groom_father_name: string;
    groom_mother_name: string;
    bride_name: string;
    bride_father_name: string;
    bride_mother_name: string;
    registration_number: string;
    date_of_registration: DateTime;
    applicant_uid_url: string;
    groom_father_uid_url: string;
    groom_mother_uid_url: string;
    bride_uid_url: string;
    bride_father_uid_url: string;
    bride_mother_uid_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateMarriageCertificateInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    groom_father_name?: Nullable<string>;
    groom_mother_name?: Nullable<string>;
    bride_name?: Nullable<string>;
    bride_father_name?: Nullable<string>;
    bride_mother_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<DateTime>;
    applicant_uid_url?: Nullable<string>;
    groom_father_uid_url?: Nullable<string>;
    groom_mother_uid_url?: Nullable<string>;
    bride_uid_url?: Nullable<string>;
    bride_father_uid_url?: Nullable<string>;
    bride_mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateMarriageTeorInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    groom_father_name: string;
    groom_mother_name: string;
    bride_name: string;
    bride_father_name: string;
    bride_mother_name: string;
    registration_number: string;
    date_of_registration: DateTime;
    applicant_uid_url: string;
    groom_father_uid_url: string;
    groom_mother_uid_url: string;
    bride_uid_url: string;
    bride_father_uid_url: string;
    bride_mother_uid_url: string;
    undertaking_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateMarriageTeorInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    groom_father_name?: Nullable<string>;
    groom_mother_name?: Nullable<string>;
    bride_name?: Nullable<string>;
    bride_father_name?: Nullable<string>;
    bride_mother_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<DateTime>;
    applicant_uid_url?: Nullable<string>;
    groom_father_uid_url?: Nullable<string>;
    groom_mother_uid_url?: Nullable<string>;
    bride_uid_url?: Nullable<string>;
    bride_father_uid_url?: Nullable<string>;
    bride_mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateMarriageRegisterInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    mobile: string;
    email?: Nullable<string>;
    village_id: number;
    groom_name: string;
    groom_address: string;
    groom_date_of_birth: DateTime;
    religion_groom: Religion;
    groom_father_name: string;
    groom_mother_name: string;
    bride_name: string;
    bride_address: string;
    bride_date_of_birth: DateTime;
    religion_bride: Religion;
    bride_father_name: string;
    bride_mother_name: string;
    date_of_marriage: DateTime;
    witness_one_details: string;
    witness_two_details: string;
    witness_three_details: string;
    joint_bride_groom_photo_url: string;
    applicant_uid_url: string;
    bride_uid_url: string;
    bride_url: string;
    witness_one_signature_url: string;
    witness_two_signature_url: string;
    witness_three_signature_url: string;
    undertaking_url: string;
    groom_signature_url: string;
    bride_signature_url: string;
    signature_url: string;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
}

export interface UpdateMarriageRegisterInput {
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    groom_name?: Nullable<string>;
    groom_address?: Nullable<string>;
    groom_date_of_birth?: Nullable<DateTime>;
    religion_groom?: Nullable<Religion>;
    groom_father_name?: Nullable<string>;
    groom_mother_name?: Nullable<string>;
    bride_name?: Nullable<string>;
    bride_address?: Nullable<string>;
    bride_date_of_birth?: Nullable<DateTime>;
    religion_bride?: Nullable<Religion>;
    bride_father_name?: Nullable<string>;
    bride_mother_name?: Nullable<string>;
    date_of_marriage?: Nullable<DateTime>;
    witness_one_details?: Nullable<string>;
    witness_two_details?: Nullable<string>;
    witness_three_details?: Nullable<string>;
    joint_bride_groom_photo_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    bride_uid_url?: Nullable<string>;
    bride_url?: Nullable<string>;
    witness_one_signature_url?: Nullable<string>;
    witness_two_signature_url?: Nullable<string>;
    witness_three_signature_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    groom_signature_url?: Nullable<string>;
    bride_signature_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    id: number;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
}

export interface User {
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    otp?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_kay?: Nullable<string>;
    role: Role;
    department: Department;
    address?: Nullable<string>;
    user_uid?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Petroleum {
    id?: Nullable<number>;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    company_name?: Nullable<string>;
    company_region?: Nullable<string>;
    designation?: Nullable<string>;
    location_address?: Nullable<string>;
    noc_type?: Nullable<NocType>;
    class_type?: Nullable<ClassType>;
    outlet_type?: Nullable<OutletType>;
    capacity?: Nullable<number>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    noc_fire_url?: Nullable<string>;
    na_order_url?: Nullable<string>;
    sanad_url?: Nullable<string>;
    coastguard_url?: Nullable<string>;
    plan_url?: Nullable<string>;
    explosive_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Auth {
    token: string;
    id: number;
    design_point_id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
    contact?: Nullable<string>;
    otp?: Nullable<string>;
    pic_url?: Nullable<string>;
    access_kay?: Nullable<string>;
    role: Role;
    department: Department;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Common {
    id: number;
    form_id: number;
    user_id: number;
    auth_user_id?: Nullable<string>;
    focal_user_id?: Nullable<string>;
    intra_user_id?: Nullable<string>;
    inter_user_id?: Nullable<string>;
    village: string;
    name: string;
    number: string;
    event_date?: Nullable<DateTime>;
    form_status: number;
    form_type: FormType;
    query_status: queryStatus;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt: DateTime;
}

export interface FileCount {
    RTI: number;
    ZONE: number;
    OLDCOPY: number;
    PETROLEUM: number;
    UNAUTHORIZED: number;
    LANDRECORDS: number;
    MAMLATDAR: number;
    DEMOLITION: number;
    OC: number;
    CP: number;
    PLINTH: number;
}

export interface VillageCount {
    count: number;
    village: string;
}

export interface OfficerCount {
    count: number;
    auth_user_id: string;
}

export interface FileProgressDetails {
    pending: number;
    completed: number;
    rejected: number;
}

export interface FileProgress {
    RTI: FileProgressDetails;
    ZONE: FileProgressDetails;
    OLDCOPY: FileProgressDetails;
    PETROLEUM: FileProgressDetails;
    UNAUTHORIZED: FileProgressDetails;
    LANDRECORDS: FileProgressDetails;
    MAMLATDAR: FileProgressDetails;
    DEMOLITION: FileProgressDetails;
    OC: FileProgressDetails;
    CP: FileProgressDetails;
    PLINTH: FileProgressDetails;
}

export interface VillageProgressDetails {
    formType: string;
    count: number;
}

export interface VillageProgress {
    village: string;
    fileCounts: VillageProgressDetails[];
}

export interface Village {
    id: number;
    name: string;
}

export interface Survey {
    id: number;
    villageId: number;
    survey_no: string;
    sub_division?: Nullable<string>;
    owner_name: string;
    area: string;
    zone: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface QueryData {
    id: number;
    stage: FormType;
    form_id: number;
    form_status: number;
    from_user_id: number;
    to_user_id: number;
    query_type: QueryType;
    query_status: QueryStatus;
    remark: string;
    doc_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    from_user?: Nullable<User>;
    to_user?: Nullable<User>;
}

export interface Dealinghand {
    id: number;
    file_type: string;
    collector: boolean;
    dycollector: boolean;
    atp: boolean;
    jtp: boolean;
    je: boolean;
    fieldinspector: boolean;
    sitesupervisor: boolean;
    architectassistant: boolean;
    planningdraughtsman: boolean;
    spdraughtsman: boolean;
    stdraughtsman: boolean;
    landsupted: boolean;
    mamlatdar: boolean;
    eocs: boolean;
    dept1: boolean;
    dept2: boolean;
    dept3: boolean;
    dept4: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Payment {
    id: number;
    form_id: number;
    deptuser_id: number;
    user_id: number;
    type1?: Nullable<number>;
    amount1?: Nullable<number>;
    type2?: Nullable<number>;
    amount2?: Nullable<number>;
    type3?: Nullable<number>;
    amount3?: Nullable<number>;
    daycount?: Nullable<number>;
    paymentamout?: Nullable<number>;
    reference?: Nullable<string>;
    form_type: FormType;
    paymentType: PaymentType;
    paymentstatus: PaymentStatus;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface DeathRegiser {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    date_of_birth?: Nullable<DateTime>;
    gender?: Nullable<Gender>;
    name_of_deceased?: Nullable<string>;
    date_of_death: DateTime;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    wife_name?: Nullable<string>;
    death_place?: Nullable<BirthPlace>;
    death_place_name?: Nullable<string>;
    current_address?: Nullable<string>;
    permanent_address?: Nullable<string>;
    death_place_address?: Nullable<string>;
    death_certified?: Nullable<boolean>;
    name_of_disease?: Nullable<boolean>;
    pregnancy_death?: Nullable<boolean>;
    smoker_death?: Nullable<boolean>;
    alcoholic_death?: Nullable<boolean>;
    religion_deceased?: Nullable<Religion>;
    date_of_marriage?: Nullable<DateTime>;
    attender_type?: Nullable<AttendentType>;
    deceased_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    authority_letter_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface BirthRegister {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    date_of_birth?: Nullable<DateTime>;
    gender?: Nullable<Gender>;
    name_of_child?: Nullable<string>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    grandfather_name?: Nullable<string>;
    grandmother_name?: Nullable<string>;
    birth_place?: Nullable<BirthPlace>;
    birth_place_name?: Nullable<string>;
    current_address?: Nullable<string>;
    permanent_address?: Nullable<string>;
    religion_child?: Nullable<Religion>;
    father_education?: Nullable<string>;
    mother_education?: Nullable<string>;
    father_occupation?: Nullable<string>;
    mother_occupation?: Nullable<string>;
    mother_date_of_birth?: Nullable<DateTime>;
    date_of_marriage?: Nullable<DateTime>;
    attender_type?: Nullable<AttendentType>;
    delivery_method?: Nullable<DeliveryMethod>;
    weight_of_child_at_birth?: Nullable<string>;
    previous_child_count?: Nullable<number>;
    number_of_week_of_pregnency?: Nullable<number>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    authority_letter_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface Marriage {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    relation?: Nullable<string>;
    witness_1_url?: Nullable<string>;
    witness_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Roadshow {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Religious {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    event_name?: Nullable<string>;
    event_address?: Nullable<string>;
    route_info?: Nullable<string>;
    relation?: Nullable<string>;
    doc_1_url?: Nullable<string>;
    doc_2_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Rti {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<number>;
    subject_info?: Nullable<string>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    description?: Nullable<string>;
    information?: Nullable<string>;
    proverty_line_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    attachments?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Zoneinfo {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    survey_no?: Nullable<string>;
    sub_division?: Nullable<string>;
    nakel_url_1_14?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    attachments?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<Status>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Oldcopy {
    id: number;
    userId: number;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    village_id?: Nullable<number>;
    survey_no?: Nullable<string>;
    sub_division?: Nullable<string>;
    prev_application_date?: Nullable<DateTime>;
    prev_application_number?: Nullable<string>;
    type_of_information: TypeOfInfo;
    information_needed?: Nullable<string>;
    aadhar_url?: Nullable<string>;
    iagree: Agree;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Landsection {
    id?: Nullable<number>;
    userId?: Nullable<number>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    area?: Nullable<string>;
    na_type?: Nullable<string>;
    zone?: Nullable<string>;
    road_access?: Nullable<string>;
    no_road_access?: Nullable<string>;
    width_adequate?: Nullable<string>;
    is_dimension_plot_adequate?: Nullable<string>;
    is_crz?: Nullable<string>;
    is_monument?: Nullable<string>;
    other_remark?: Nullable<string>;
    atp_recommendation?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    land_formid?: Nullable<string>;
    land_stageid?: Nullable<string>;
    illegal_sqmt?: Nullable<string>;
    attachments?: Nullable<string>;
    recommend?: Nullable<boolean>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Cp {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    applicant_uid?: Nullable<string>;
    annexure_two?: Nullable<string>;
    annexure_three?: Nullable<string>;
    annexure_four?: Nullable<string>;
    annexure_five?: Nullable<string>;
    na_copoy?: Nullable<string>;
    map_copy?: Nullable<string>;
    nakal_1_14?: Nullable<string>;
    building_plan?: Nullable<string>;
    scrutiny_fees?: Nullable<string>;
    coast_guard_noc?: Nullable<string>;
    fire_noc?: Nullable<string>;
    crz_noc?: Nullable<string>;
    layout_plan?: Nullable<string>;
    revised_plan?: Nullable<string>;
    fsi?: Nullable<string>;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Plinth {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    survey_no?: Nullable<string>;
    village_id?: Nullable<number>;
    sub_division?: Nullable<string>;
    permission_number?: Nullable<string>;
    permission_date?: Nullable<DateTime>;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    architect_address?: Nullable<string>;
    applicant_uid?: Nullable<string>;
    annexure_eleven?: Nullable<string>;
    copy_construcation_license?: Nullable<string>;
    building_plan?: Nullable<string>;
    architect_signature?: Nullable<string>;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Oc {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name: string;
    address: string;
    mobile: string;
    email?: Nullable<string>;
    survey_no: string;
    village_id: number;
    sub_division: string;
    permission_number?: Nullable<string>;
    permission_date?: Nullable<DateTime>;
    architect_name?: Nullable<string>;
    architect_license?: Nullable<string>;
    valid_upto?: Nullable<DateTime>;
    completion_date?: Nullable<DateTime>;
    applicant_uid?: Nullable<string>;
    completion_certificate?: Nullable<string>;
    construction_permission?: Nullable<string>;
    building_plan?: Nullable<string>;
    annexure_fourteen?: Nullable<string>;
    coast_guard_noc?: Nullable<string>;
    fire_noc?: Nullable<string>;
    rainwater_harvest?: Nullable<string>;
    deviation_plan?: Nullable<string>;
    indemnity?: Nullable<string>;
    valuation_certificate?: Nullable<string>;
    labour_cess?: Nullable<string>;
    remarks?: Nullable<string>;
    signature_url?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    comments_dept?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    payment_doc?: Nullable<string>;
    iagree?: Nullable<Agree>;
    status?: Nullable<Status>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface TempWaterConnect {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    diameter?: Nullable<string>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    from_date?: Nullable<DateTime>;
    to_date?: Nullable<DateTime>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface NewWaterConnect {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    diameter?: Nullable<string>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    from_date?: Nullable<DateTime>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface TempWaterDisconnect {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    meter_number?: Nullable<string>;
    to_date?: Nullable<DateTime>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface PermanentWaterDisconnect {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    meter_number?: Nullable<string>;
    to_date?: Nullable<DateTime>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface WaterSizeChange {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    old_diameter?: Nullable<string>;
    new_diameter?: Nullable<string>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    meter_number?: Nullable<string>;
    to_date?: Nullable<DateTime>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface WaterReconnect {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    ownership_type?: Nullable<OwnerShipType>;
    ward_number?: Nullable<string>;
    muncipal_type?: Nullable<MuncipalType>;
    entity_type?: Nullable<EntityType>;
    connection_type?: Nullable<ConnectionType>;
    purpose?: Nullable<string>;
    purpose_of_disconnection?: Nullable<string>;
    purpose_of_reconection?: Nullable<string>;
    meter_number?: Nullable<string>;
    house_tax_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    electric_bill_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface BirthCertificate {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    gender?: Nullable<Gender>;
    date_of_birth?: Nullable<DateTime>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface BirthTeor {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    gender?: Nullable<Gender>;
    date_of_birth?: Nullable<DateTime>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface DeathCertificate {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    gender?: Nullable<Gender>;
    date_of_birth?: Nullable<DateTime>;
    date_of_death?: Nullable<DateTime>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    husband_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface DeathTeor {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    gender?: Nullable<Gender>;
    date_of_birth?: Nullable<DateTime>;
    date_of_death?: Nullable<DateTime>;
    father_name?: Nullable<string>;
    mother_name?: Nullable<string>;
    husband_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    father_uid_url?: Nullable<string>;
    mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface MarriageCertificate {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    groom_father_name?: Nullable<string>;
    groom_mother_name?: Nullable<string>;
    bride_name?: Nullable<string>;
    bride_father_name?: Nullable<string>;
    bride_mother_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<DateTime>;
    applicant_uid_url?: Nullable<string>;
    groom_father_uid_url?: Nullable<string>;
    groom_mother_uid_url?: Nullable<string>;
    bride_uid_url?: Nullable<string>;
    bride_father_uid_url?: Nullable<string>;
    bride_mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface MarriageTeor {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    name?: Nullable<string>;
    address?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    groom_father_name?: Nullable<string>;
    groom_mother_name?: Nullable<string>;
    bride_name?: Nullable<string>;
    bride_father_name?: Nullable<string>;
    bride_mother_name?: Nullable<string>;
    registration_number?: Nullable<string>;
    date_of_registration?: Nullable<DateTime>;
    applicant_uid_url?: Nullable<string>;
    groom_father_uid_url?: Nullable<string>;
    groom_mother_uid_url?: Nullable<string>;
    bride_uid_url?: Nullable<string>;
    bride_father_uid_url?: Nullable<string>;
    bride_mother_uid_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface MarriageRegister {
    id: number;
    userId?: Nullable<number>;
    user_uid?: Nullable<string>;
    mobile?: Nullable<string>;
    email?: Nullable<string>;
    village_id?: Nullable<number>;
    groom_name?: Nullable<string>;
    groom_address?: Nullable<string>;
    groom_date_of_birth?: Nullable<DateTime>;
    religion_groom?: Nullable<Religion>;
    groom_father_name?: Nullable<string>;
    groom_mother_name?: Nullable<string>;
    bride_name?: Nullable<string>;
    bride_address?: Nullable<string>;
    bride_date_of_birth?: Nullable<DateTime>;
    religion_bride?: Nullable<Religion>;
    bride_father_name?: Nullable<string>;
    bride_mother_name?: Nullable<string>;
    date_of_marriage?: Nullable<DateTime>;
    witness_one_details?: Nullable<string>;
    witness_two_details?: Nullable<string>;
    witness_three_details?: Nullable<string>;
    joint_bride_groom_photo_url?: Nullable<string>;
    applicant_uid_url?: Nullable<string>;
    bride_uid_url?: Nullable<string>;
    bride_url?: Nullable<string>;
    witness_one_signature_url?: Nullable<string>;
    witness_two_signature_url?: Nullable<string>;
    witness_three_signature_url?: Nullable<string>;
    undertaking_url?: Nullable<string>;
    groom_signature_url?: Nullable<string>;
    bride_signature_url?: Nullable<string>;
    signature_url?: Nullable<string>;
    iagree?: Nullable<Agree>;
    remarks?: Nullable<string>;
    other_remarks?: Nullable<string>;
    rejection_reason?: Nullable<string>;
    condition_to_follow?: Nullable<string>;
    certificate_id?: Nullable<string>;
    certificate_date?: Nullable<DateTime>;
    certificate_url?: Nullable<string>;
    status?: Nullable<Status>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
}

export interface IQuery {
    getAllRti(): Rti[] | Promise<Rti[]>;
    getAllRtiById(id: number): Rti | Promise<Rti>;
    getUserById(id: number): User | Promise<User>;
    getAllPetroleum(): Petroleum[] | Promise<Petroleum[]>;
    getPetroleumById(id: number): Petroleum | Promise<Petroleum>;
    getAllZone(): Zoneinfo[] | Promise<Zoneinfo[]>;
    getAllZoneById(id: number): Zoneinfo | Promise<Zoneinfo>;
    getAllOldCopy(): Oldcopy[] | Promise<Oldcopy[]>;
    getOldCopyById(id: number): Oldcopy | Promise<Oldcopy>;
    signin(loginUserInput: LoginUserInput): Auth | Promise<Auth>;
    verifyOtp(mobileLoginInput: MobileLoginInput): Auth | Promise<Auth>;
    getAllCommon(): Common[] | Promise<Common[]>;
    getAllCommonById(id: number): Common | Promise<Common>;
    searchCommon(searchCommonInput: SearchCommonInput): Common[] | Promise<Common[]>;
    filterCommon(filterCommonInput: FilterCommonInput): Common[] | Promise<Common[]>;
    getFileCount(): FileCount | Promise<FileCount>;
    villageFileCount(): VillageCount[] | Promise<VillageCount[]>;
    officerFileCount(): OfficerCount[] | Promise<OfficerCount[]>;
    officerFileProgress(): FileProgress | Promise<FileProgress>;
    villageFileProgress(): VillageProgress[] | Promise<VillageProgress[]>;
    getAllLand(): Landsection[] | Promise<Landsection[]>;
    getAllLandById(id: number): Landsection | Promise<Landsection>;
    sendFileOutside(sendFileLandsectionInput: SendFileLandsectionInput): boolean | Promise<boolean>;
    sendFileOutsideillegal(sendFileLandsectionInput: SendFileLandsectionInput): boolean | Promise<boolean>;
    getAllDealingHand(): Dealinghand[] | Promise<Dealinghand[]>;
    getDealingHandById(id: number): Dealinghand | Promise<Dealinghand>;
    searchDealingHand(searchDealinghandInput: SearchDealinghandInput): Dealinghand[] | Promise<Dealinghand[]>;
    getuserid(filetype: string): number | Promise<number>;
    getAllVillage(): Village[] | Promise<Village[]>;
    getAllVillageById(id: number): Village | Promise<Village>;
    getAllSurvey(): Survey[] | Promise<Survey[]>;
    getAllSurveyById(id: number): Survey | Promise<Survey>;
    getSurveyNumber(searchSurveyInput: SearchSurveyInput): Survey[] | Promise<Survey[]>;
    getSubDivision(searchSurveyInput: SearchSurveyInput): Survey[] | Promise<Survey[]>;
    getAllQuery(): QueryData[] | Promise<QueryData[]>;
    getQueryById(id: number): QueryData | Promise<QueryData>;
    searchQuery(searchQueryInput: SearchQueryInput): QueryData[] | Promise<QueryData[]>;
    getAllPayment(): Payment[] | Promise<Payment[]>;
    getAllPaymentById(id: number): Payment | Promise<Payment>;
    searchPayment(searchPaymentInput: SearchPaymentInput): Payment[] | Promise<Payment[]>;
    getAllCp(): Cp[] | Promise<Cp[]>;
    getCpById(id: number): Cp | Promise<Cp>;
    getAllPlinth(): Plinth[] | Promise<Plinth[]>;
    getPlinthById(id: number): Plinth | Promise<Plinth>;
    getAllOc(): Oc[] | Promise<Oc[]>;
    getOcById(id: number): Oc | Promise<Oc>;
    getAllMarriage(): Marriage[] | Promise<Marriage[]>;
    getMarriageById(id: number): Marriage | Promise<Marriage>;
    getAllRoadshow(): Roadshow[] | Promise<Roadshow[]>;
    getRoadshowById(id: number): Roadshow | Promise<Roadshow>;
    getAllReligious(): Religious[] | Promise<Religious[]>;
    getReligiousById(id: number): Religious | Promise<Religious>;
    getAllBirthRegister(): BirthRegister[] | Promise<BirthRegister[]>;
    getBirthRegisterById(id: number): BirthRegister | Promise<BirthRegister>;
    getAllDeathRegister(): DeathRegiser[] | Promise<DeathRegiser[]>;
    getDeathRegisterById(id: number): DeathRegiser | Promise<DeathRegiser>;
    getAllTempWaterConnect(): TempWaterConnect[] | Promise<TempWaterConnect[]>;
    getTempWaterConnectById(id: number): TempWaterConnect | Promise<TempWaterConnect>;
    getAllNewWaterConnect(): NewWaterConnect[] | Promise<NewWaterConnect[]>;
    getNewWaterConnectById(id: number): NewWaterConnect | Promise<NewWaterConnect>;
    getAllTempWaterDisconnect(): TempWaterDisconnect[] | Promise<TempWaterDisconnect[]>;
    getTempWaterDisconnectById(id: number): TempWaterDisconnect | Promise<TempWaterDisconnect>;
    getAllPermanentWaterDisconnect(): PermanentWaterDisconnect[] | Promise<PermanentWaterDisconnect[]>;
    getPermanentWaterDisconnectById(id: number): PermanentWaterDisconnect | Promise<PermanentWaterDisconnect>;
    getAllWaterSizeChange(): WaterSizeChange[] | Promise<WaterSizeChange[]>;
    getWaterSizeChangeById(id: number): WaterSizeChange | Promise<WaterSizeChange>;
    getAllWaterReconnect(): WaterReconnect[] | Promise<WaterReconnect[]>;
    getWaterReconnectById(id: number): WaterReconnect | Promise<WaterReconnect>;
    getAllBirthCertificate(): BirthCertificate[] | Promise<BirthCertificate[]>;
    getBirthCertificateById(id: number): BirthCertificate | Promise<BirthCertificate>;
    getAllBirthTeor(): BirthTeor[] | Promise<BirthTeor[]>;
    getBirthTeorById(id: number): BirthTeor | Promise<BirthTeor>;
    getAllDeathCertificate(): DeathCertificate[] | Promise<DeathCertificate[]>;
    getDeathCertificateById(id: number): DeathCertificate | Promise<DeathCertificate>;
    getAllDeathTeor(): DeathTeor[] | Promise<DeathTeor[]>;
    getDeathTeorById(id: number): DeathTeor | Promise<DeathTeor>;
    getAllMarriageCertificate(): MarriageCertificate[] | Promise<MarriageCertificate[]>;
    getMarriageCertificateById(id: number): MarriageCertificate | Promise<MarriageCertificate>;
    getAllMarriageTeor(): MarriageTeor[] | Promise<MarriageTeor[]>;
    getMarriageTeorById(id: number): MarriageTeor | Promise<MarriageTeor>;
    getAllMarriageRegister(): MarriageRegister[] | Promise<MarriageRegister[]>;
    getMarriageRegisterById(id: number): MarriageRegister | Promise<MarriageRegister>;
}

export interface IMutation {
    createRti(createRtiInput: CreateRtiInput): Rti | Promise<Rti>;
    updateRtiById(updateRtiInput: UpdateRtiInput): Rti | Promise<Rti>;
    deleteRtiById(updateRtiInput: UpdateRtiInput): Rti | Promise<Rti>;
    updateUserById(updateUserInput: UpdateUserInput): User | Promise<User>;
    createPetroleum(createPetroleumInput: CreatePetroleumInput): Petroleum | Promise<Petroleum>;
    updatePetroleumById(updatePetroleumInput: UpdatePetroleumInput): Petroleum | Promise<Petroleum>;
    deletePetroleumById(updatePetroleumInput: UpdatePetroleumInput): Petroleum | Promise<Petroleum>;
    createZone(createZoneinfoInput: CreateZoneinfoInput): Zoneinfo | Promise<Zoneinfo>;
    updateZoneById(updateZoneinfoInput: UpdateZoneinfoInput): Zoneinfo | Promise<Zoneinfo>;
    deleteZoneById(updateZoneinfoInput: UpdateZoneinfoInput): Zoneinfo | Promise<Zoneinfo>;
    createOldCopy(createOldcopyInput: CreateOldcopyInput): Oldcopy | Promise<Oldcopy>;
    updateOldCopyById(updateOldcopyInput: UpdateOldcopyInput): Oldcopy | Promise<Oldcopy>;
    deleteOldCopyById(updateOldcopyInput: UpdateOldcopyInput): Oldcopy | Promise<Oldcopy>;
    signup(signUpUserInput: SignUpUserInput): Auth | Promise<Auth>;
    mobileLogin(mobileLoginInput: MobileLoginInput): Auth | Promise<Auth>;
    createCommon(createCommonInput: CreateCommonInput): Common | Promise<Common>;
    updateCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    deleteCommonById(updateCommonInput: UpdateCommonInput): Common | Promise<Common>;
    createLand(createLandsectionInput: CreateLandsectionInput): Landsection | Promise<Landsection>;
    updateLandById(updateLandsectionInput: UpdateLandsectionInput): Landsection | Promise<Landsection>;
    deleteLandById(updateLandsectionInput: UpdateLandsectionInput): Landsection | Promise<Landsection>;
    getFromOutside(outsideLandsectionInput: OutsideLandsectionInput): Common | Promise<Common>;
    createDealingHand(createDealinghandInput: CreateDealinghandInput): Dealinghand | Promise<Dealinghand>;
    updateDealingHandById(updateDealinghandInput: UpdateDealinghandInput): Dealinghand | Promise<Dealinghand>;
    createQuery(createQueryInput: CreateQueryInput): QueryData | Promise<QueryData>;
    updateQueryById(updateQueryInput: UpdateQueryInput): QueryData | Promise<QueryData>;
    deleteQueryById(updateQueryInput: UpdateQueryInput): QueryData | Promise<QueryData>;
    createPayment(createPaymentInput: CreatePaymentInput): Payment | Promise<Payment>;
    updatePaymentById(updatePaymentInput: UpdatePaymentInput): Payment | Promise<Payment>;
    deletePaymentById(updatePaymentInput: UpdatePaymentInput): Payment | Promise<Payment>;
    createCp(createCpInput: CreateCpInput): Cp | Promise<Cp>;
    updateCpById(updateCpInput: UpdateCpInput): Cp | Promise<Cp>;
    deleteCpById(updateCpInput: UpdateCpInput): Cp | Promise<Cp>;
    createPlinth(createPlinthInput: CreatePlinthInput): Plinth | Promise<Plinth>;
    updatePlinthById(updatePlinthInput: UpdatePlinthInput): Plinth | Promise<Plinth>;
    deletePlinthById(updatePlinthInput: UpdatePlinthInput): Plinth | Promise<Plinth>;
    createOc(createOcInput: CreateOcInput): Oc | Promise<Oc>;
    updateOcById(updateOcInput: UpdateOcInput): Oc | Promise<Oc>;
    deleteOcById(updateOcInput: UpdateOcInput): Oc | Promise<Oc>;
    createMarriage(createMarriageInput: CreateMarriageInput): Marriage | Promise<Marriage>;
    updateMarriageById(updateMarriageInput: UpdateMarriageInput): Marriage | Promise<Marriage>;
    deleteMarriageById(updateMarriageInput: UpdateMarriageInput): Marriage | Promise<Marriage>;
    createRoadshow(createRoadshowInput: CreateRoadshowInput): Roadshow | Promise<Roadshow>;
    updateRoadshowById(updateRoadshowInput: UpdateRoadshowInput): Roadshow | Promise<Roadshow>;
    deleteRoadshowById(updateRoadshowInput: UpdateRoadshowInput): Roadshow | Promise<Roadshow>;
    createReligious(createReligiousInput: CreateReligiousInput): Religious | Promise<Religious>;
    updateReligiousById(updateReligiousInput: UpdateReligiousInput): Religious | Promise<Religious>;
    deleteReligiousById(updateReligiousInput: UpdateReligiousInput): Religious | Promise<Religious>;
    createBirthRegister(createBirthRegisterInput: CreateBirthRegisterInput): BirthRegister | Promise<BirthRegister>;
    updateBirthRegisterById(updateBirthRegisterInput: UpdateBirthRegisterInput): BirthRegister | Promise<BirthRegister>;
    deleteBirthRegisterById(updateBirthRegisterInput: UpdateBirthRegisterInput): BirthRegister | Promise<BirthRegister>;
    createDeathRegister(createDeathRegiserInput: CreateDeathRegiserInput): DeathRegiser | Promise<DeathRegiser>;
    updateDeathRegisterById(updateDeathRegiserInput: UpdateDeathRegiserInput): DeathRegiser | Promise<DeathRegiser>;
    deleteDeathRegisterById(updateDeathRegiserInput: UpdateDeathRegiserInput): DeathRegiser | Promise<DeathRegiser>;
    createTempWaterConnect(createTempWaterConnectInput: CreateTempWaterConnectInput): TempWaterConnect | Promise<TempWaterConnect>;
    updateTempWaterConnectById(updateTempWaterConnectInput: UpdateTempWaterConnectInput): TempWaterConnect | Promise<TempWaterConnect>;
    deleteTempWaterConnectById(updateTempWaterConnectInput: UpdateTempWaterConnectInput): TempWaterConnect | Promise<TempWaterConnect>;
    createNewWaterConnect(createNewWaterConnectInput: CreateNewWaterConnectInput): NewWaterConnect | Promise<NewWaterConnect>;
    updateNewWaterConnectById(updateNewWaterConnectInput: UpdateNewWaterConnectInput): NewWaterConnect | Promise<NewWaterConnect>;
    deleteNewWaterConnectById(updateNewWaterConnectInput: UpdateNewWaterConnectInput): NewWaterConnect | Promise<NewWaterConnect>;
    createTempWaterDisconnect(createTempWaterDisconnectInput: CreateTempWaterDisconnectInput): TempWaterDisconnect | Promise<TempWaterDisconnect>;
    updateTempWaterDisconnectById(updateTempWaterDisconnectInput: UpdateTempWaterDisconnectInput): TempWaterDisconnect | Promise<TempWaterDisconnect>;
    deleteTempWaterDisconnectById(updateTempWaterDisconnectInput: UpdateTempWaterDisconnectInput): TempWaterDisconnect | Promise<TempWaterDisconnect>;
    createPermanentWaterDisconnect(createPermanentWaterDisconnectInput: CreatePermanentWaterDisconnectInput): PermanentWaterDisconnect | Promise<PermanentWaterDisconnect>;
    updatePermanentWaterDisconnectById(updatePermanentWaterDisconnectInput: UpdatePermanentWaterDisconnectInput): PermanentWaterDisconnect | Promise<PermanentWaterDisconnect>;
    deletePermanentWaterDisconnectById(updatePermanentWaterDisconnectInput: UpdatePermanentWaterDisconnectInput): PermanentWaterDisconnect | Promise<PermanentWaterDisconnect>;
    createWaterSizeChange(createWaterSizeChangeInput: CreateWaterSizeChangeInput): WaterSizeChange | Promise<WaterSizeChange>;
    updateWaterSizeChangeById(updateWaterSizeChangeInput: UpdateWaterSizeChangeInput): WaterSizeChange | Promise<WaterSizeChange>;
    deleteWaterSizeChangeById(updateWaterSizeChangeInput: UpdateWaterSizeChangeInput): WaterSizeChange | Promise<WaterSizeChange>;
    createWaterReconnect(createWaterReconnectInput: CreateWaterReconnectInput): WaterReconnect | Promise<WaterReconnect>;
    updateWaterReconnectById(updateWaterReconnectInput: UpdateWaterReconnectInput): WaterReconnect | Promise<WaterReconnect>;
    deleteWaterReconnectById(updateWaterReconnectInput: UpdateWaterReconnectInput): WaterReconnect | Promise<WaterReconnect>;
    createBirthCertificate(createBirthCertificateInput: CreateBirthCertificateInput): BirthCertificate | Promise<BirthCertificate>;
    updateBirthCertificateById(updateBirthCertificateInput: UpdateBirthCertificateInput): BirthCertificate | Promise<BirthCertificate>;
    deleteBirthCertificateById(updateBirthCertificateInput: UpdateBirthCertificateInput): BirthCertificate | Promise<BirthCertificate>;
    createBirthTeor(createBirthTeorInput: CreateBirthTeorInput): BirthTeor | Promise<BirthTeor>;
    updateBirthTeorById(updateBirthTeorInput: UpdateBirthTeorInput): BirthTeor | Promise<BirthTeor>;
    deleteBirthTeorById(updateBirthTeorInput: UpdateBirthTeorInput): BirthTeor | Promise<BirthTeor>;
    createDeathCertificate(createDeathCertificateInput: CreateDeathCertificateInput): DeathCertificate | Promise<DeathCertificate>;
    updateDeathCertificateById(updateDeathCertificateInput: UpdateDeathCertificateInput): DeathCertificate | Promise<DeathCertificate>;
    deleteDeathCertificateById(updateDeathCertificateInput: UpdateDeathCertificateInput): DeathCertificate | Promise<DeathCertificate>;
    createDeathTeor(createDeathTeorInput: CreateDeathTeorInput): DeathTeor | Promise<DeathTeor>;
    updateDeathTeorById(updateDeathTeorInput: UpdateDeathTeorInput): DeathTeor | Promise<DeathTeor>;
    deleteDeathTeorById(updateDeathTeorInput: UpdateDeathTeorInput): DeathTeor | Promise<DeathTeor>;
    createMarriageCertificate(createMarriageCertificateInput: CreateMarriageCertificateInput): MarriageCertificate | Promise<MarriageCertificate>;
    updateMarriageCertificateById(updateMarriageCertificateInput: UpdateMarriageCertificateInput): MarriageCertificate | Promise<MarriageCertificate>;
    deleteMarriageCertificateById(updateMarriageCertificateInput: UpdateMarriageCertificateInput): MarriageCertificate | Promise<MarriageCertificate>;
    createMarriageTeor(createMarriageTeorInput: CreateMarriageTeorInput): MarriageTeor | Promise<MarriageTeor>;
    updateMarriageTeorById(updateMarriageTeorInput: UpdateMarriageTeorInput): MarriageTeor | Promise<MarriageTeor>;
    deleteMarriageTeorById(updateMarriageTeorInput: UpdateMarriageTeorInput): MarriageTeor | Promise<MarriageTeor>;
    createMarriageRegister(createMarriageRegisterInput: CreateMarriageRegisterInput): MarriageRegister | Promise<MarriageRegister>;
    updateMarriageRegisterById(updateMarriageRegisterInput: UpdateMarriageRegisterInput): MarriageRegister | Promise<MarriageRegister>;
    deleteMarriageRegisterById(updateMarriageRegisterInput: UpdateMarriageRegisterInput): MarriageRegister | Promise<MarriageRegister>;
}

export type DateTime = any;
type Nullable<T> = T | null;
