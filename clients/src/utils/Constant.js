const fullmonthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fullNumberMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

export const SUPERADMIN = 1;
export const ADMIN = 2;
export const USER = 3;
export const roleTypes = [
    { label: "Admin", value: ADMIN },
    { label: "Super Admin", value: SUPERADMIN },
    { label: "User", value: USER },
];

export const cashbookTypes = [
    { label: "DEBIT", value: "DEBIT" },
    { label: "CREDIT", value: "CREDIT" }
];

export function userRole(role) {
    return roleTypes.find((e) => e.value === role);
}

export function createdAtDateFormate(date) {
    var event = new Date(date);
    let month = fullNumberMonth[event.getMonth()];
    let day = event.getDate();
    let year = event.getFullYear();
    return `${year}-${month}-${day} `;
}