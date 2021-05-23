export interface Student {
    name: string;
    national_or_passport_number: number;
    place_of_birth: string;
    date_of_birth: number;
    gender: string;
    nationality: string;
    religion: string;

    mailing_address: string;
    email: string;
    phone: number;
    telephone_fix: number;
    fax: number;

    breadwinner_name: string;
    relative_relation: string;
    breadwinner_national_or_passport_number: string;
    breadwinner_phone: number;

    knowen_people_one_name: string;
    knowen_people_one_phone: number;
    knowen_people_two_name: string;
    knowen_people_two_phone: number;

    high_school_country: string;
    high_school_name: string;
    high_school_branch: string;
    high_school_average: number;
    high_school_year: number;

    bridging_country: string;
    bridging_major: string;
    bridging_average: number;
    bridging_year: number;
    bridging_collage_name: string;

    transfer_country: string;
    transfer_major: string;
    transfer_average: number;
    transfer_year: number;
    transfer_collage_name: string;

    degree_and_major_required_degree: string;
    degree_and_major_major: string;
    degree_and_major_semester: string;
    degree_and_major_academic_year: number;

    document_one: File;
    document_two: File;
    document_three: File;
    document_four: File;
}