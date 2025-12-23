const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const data = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        type: 'success',
        expected: '/inventory.html',
        firstName: 'John',
        lastName: 'Doe',
        postalCode: '54000',
        itemTotal: 'Item total: $29.99',
        tax: 'Tax: $2.40',
        total: 'Total: $32.39'
    },
    { username: 'locked_out_user', password: 'secret_sauce', type: 'error', expected: 'Epic sadface: Sorry, this user has been locked out.' },
    { username: 'problem_user', password: 'secret_sauce', type: 'success', expected: '/inventory.html' }
];

const ws = XLSX.utils.json_to_sheet(data);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Users");

const dir = path.join(__dirname, 'data');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

XLSX.writeFile(wb, path.join(dir, 'users.xlsx'));
console.log('Excel file created successfully.');
