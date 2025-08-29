const PlusIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>`;
const DeleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>`;
const SearchIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>`;
const UsersIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm6-11h-1a4 4 0 00-4 4v1a2 2 0 002 2h2a2 2 0 002-2v-1a4 4 0 00-4-4z" /></svg>`;
const RupeeIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8h6m-5 4h5m2 5H7.5a2.5 2.5 0 01-2.5-2.5V8.5A2.5 2.5 0 017.5 6H18" /></svg>`;
const CheckCircleIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
const ExclamationCircleIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
const WalletIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`;
const EditIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>`;
const CalendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`;
const ChevronLeftIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>`;
const ChevronRightIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>`;
const ExportIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`;

// --- UTILS ---
const getFeeStatus = (student) => {
    const { registrationDate, monthlyFee, payments } = student;
    if (!registrationDate || !monthlyFee) {
        return { text: 'N/A', className: 'bg-slate-100 text-slate-800', amountDue: 0 };
    }
    const today = new Date();
    const registration = new Date(registrationDate);
    today.setHours(0, 0, 0, 0);
    registration.setHours(0, 0, 0, 0);
    if (registration > today) {
        return { text: 'Paid', className: 'bg-green-100 text-green-800', amountDue: 0 };
    }
    const yearsElapsed = today.getFullYear() - registration.getFullYear();
    const monthsElapsedInYears = yearsElapsed * 12;
    const monthDiff = today.getMonth() - registration.getMonth();
    const totalMonths = monthsElapsedInYears + monthDiff + 1;
    if (totalMonths <= 0) {
        return { text: 'Paid', className: 'bg-green-100 text-green-800', amountDue: 0 };
    }
    const totalFeeDue = totalMonths * monthlyFee;
    const totalPaid = payments.reduce((acc, p) => acc + p.amount, 0);
    const amountDue = totalFeeDue - totalPaid;
    if (amountDue <= 0) {
        return { text: 'Paid', className: 'bg-green-100 text-green-800', amountDue: 0 };
    }
    return { text: 'Overdue', className: 'bg-red-100 text-red-800', amountDue };
};

// --- STATE MANAGEMENT ---
let state = {
    students: [],
    isFormModalOpen: false,
    editingStudent: null,
    paymentModalStudent: null,
    selectedStudentIds: [],
    searchTerm: '',
    filterStatus: 'all',
};

function setState(newState) {
    state = { ...state, ...newState };
    renderApp();
}

function useLocalStorage(key, initialValue) {
    const get = () => {
        const item = window.localStorage.getItem(key);
        if (item) {
            try {
                return JSON.parse(item);
            } catch (e) {
                return initialValue;
            }
        }
        return initialValue;
    };

    const set = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(get()) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (e) {
            console.error(`Error setting localStorage key “${key}”:`, e);
        }
    };

    if (window.localStorage.getItem(key) === null) {
        set(initialValue);
    }

    return [get, set];
}

const [getStudents, setStudents] = useLocalStorage('students', []);

// --- RENDER FUNCTIONS ---
function renderApp() {
    const root = document.getElementById('root');
    const { students, isFormModalOpen, editingStudent, paymentModalStudent, selectedStudentIds, searchTerm, filterStatus } = state;

    const studentsWithStatus = students
        .map(student => ({
            ...student,
            feeStatus: getFeeStatus(student),
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

    const filteredStudents = studentsWithStatus
        .filter(student => {
            if (filterStatus === 'all') return true;
            return student.feeStatus.text.toLowerCase() === filterStatus;
        })
        .filter(student => {
            const search = searchTerm.toLowerCase();
            return (
                student.name.toLowerCase().includes(search) ||
                student.mobile.includes(search) ||
                student.seatNumber.toLowerCase().includes(search)
            );
        });

    root.innerHTML = `
        <div class="min-h-screen text-slate-800 bg-slate-50">
            ${Header()}
            <main class="container mx-auto p-4 sm:p-6 md:p-8">
                ${Dashboard(studentsWithStatus)}
                <div class="mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                    <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                        <h2 class="text-2xl font-semibold text-slate-700">Student Registry</h2>
                        <div class="flex items-center gap-2 w-full sm:w-auto">
                            ${selectedStudentIds.length > 0 ? `
                                <button id="delete-selected-btn" class="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200">
                                    ${DeleteIcon}
                                    Delete (${selectedStudentIds.length})
                                </button>
                            ` : ''}
                            <button id="add-student-btn" class="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all duration-200">
                                ${PlusIcon}
                                Add New Student
                            </button>
                            <button id="export-csv-btn" class="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200">
                                ${ExportIcon}
                                Export to CSV
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 mb-4">
                        <div class="relative flex-grow">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">${SearchIcon}</span>
                            <input id="search-input" type="text" placeholder="Search by name, seat, or mobile..." value="${searchTerm}" class="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200">
                        </div>
                        <div class="flex items-center gap-2 rounded-md bg-slate-100 p-1">
                            ${['all', 'paid', 'overdue'].map(status => `
                                <button class="filter-status-btn px-3 py-1 text-sm font-medium rounded-md transition-colors capitalize ${filterStatus === status ? 'bg-white text-slate-800 shadow-sm' : 'bg-transparent text-slate-600 hover:bg-slate-200'}" data-status="${status}">
                                    ${status}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    ${StudentTable(filteredStudents, selectedStudentIds)}
                </div>
            </main>
            ${isFormModalOpen ? Modal(editingStudent ? 'Edit Student Details' : 'Add New Student', StudentForm(editingStudent)) : ''}
            ${paymentModalStudent ? PaymentModal(paymentModalStudent) : ''}
        </div>
    `;
    attachEventListeners();
}

function Header() {
    return `
        <header class="bg-white shadow-sm border-b border-slate-200">
            <div class="container mx-auto px-4 md:px-8 py-4">
                <div class="flex flex-col sm:flex-row justify-between sm:items-center">
                    <h1 class="text-2xl sm:text-3xl font-bold text-slate-800">Rama's Library CRM</h1>
                    <p class="text-md text-slate-500 mt-1 sm:mt-0">
                        Managed by <span class="font-semibold">Rekha Saini</span>
                    </p>
                </div>
            </div>
        </header>
    `;
}

function Dashboard(studentsWithStatus) {
    const totalStudents = studentsWithStatus.length;
    const paidStudents = studentsWithStatus.filter(s => s.feeStatus.text === 'Paid').length;
    const overdueStudents = totalStudents - paidStudents;
    const totalDue = studentsWithStatus.reduce((sum, s) => sum + s.feeStatus.amountDue, 0);
    const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(amount);

    return `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            ${StatCard('Total Students', totalStudents, UsersIcon, 'bg-blue-100 text-blue-600')}
            ${StatCard('Paid Students', paidStudents, CheckCircleIcon, 'bg-green-100 text-green-600')}
            ${StatCard('Overdue Students', overdueStudents, ExclamationCircleIcon, 'bg-red-100 text-red-600')}
            ${StatCard('Total Amount Due', formatCurrency(totalDue), RupeeIcon, 'bg-amber-100 text-amber-600')}
        </div>
    `;
}

function StatCard(title, value, icon, color) {
    return `
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm flex items-center gap-4 sm:gap-6">
            <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${color}">
                ${icon}
            </div>
            <div>
                <p class="text-sm text-slate-500 font-medium">${title}</p>
                <p class="text-2xl font-bold text-slate-800">${value}</p>
            </div>
        </div>
    `;
}

function StudentTable(students, selectedStudentIds) {
    if (students.length === 0) {
        return EmptyState('No Students Found', "Try adjusting your search or filter to find what you're looking for.");
    }

    const getLastPaymentDate = (student) => {
        if (student.payments.length === 0) return 'N/A';
        return new Date(student.payments[0].date).toLocaleDateString('en-GB');
    };

    const allVisibleSelected = students.length > 0 && students.every(s => selectedStudentIds.includes(s.id));

    return `
        <div class="overflow-x-auto">
            <table class="w-full text-left responsive-table">
                <thead class="bg-slate-100 border-b border-slate-200">
                    <tr>
                        <th class="p-4 w-4">
                            <input id="select-all-checkbox" type="checkbox" class="h-4 w-4 rounded border-slate-300 text-slate-600 focus:ring-slate-500" ${allVisibleSelected ? 'checked' : ''}>
                        </th>
                        <th class="p-4 font-semibold text-slate-600">Seat No.</th>
                        <th class="p-4 font-semibold text-slate-600">Name</th>
                        <th class="p-4 font-semibold text-slate-600">Mobile Number</th>
                        <th class="p-4 font-semibold text-slate-600">Last Payment</th>
                        <th class="p-4 font-semibold text-slate-600">Fee Status</th>
                        <th class="p-4 font-semibold text-slate-600 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${students.map(student => {
                        const isSelected = selectedStudentIds.includes(student.id);
                        return `
                            <tr key="${student.id}" class="border-b border-slate-200 last:border-b-0 transition-colors ${isSelected ? 'bg-slate-100' : 'hover:bg-slate-50'}" aria-selected="${isSelected}">
                                <td class="p-4 checkbox-cell">
                                    <input type="checkbox" class="select-student-checkbox h-4 w-4 rounded border-slate-300 text-slate-600 focus:ring-slate-500" data-id="${student.id}" ${isSelected ? 'checked' : ''}>
                                </td>
                                <td data-label="Seat No." class="p-4 font-mono text-slate-900 font-semibold">${student.seatNumber}</td>
                                <td data-label="Name" class="p-4 font-medium">${student.name}</td>
                                <td data-label="Mobile" class="p-4 text-slate-600">${student.mobile}</td>
                                <td data-label="Last Payment" class="p-4 text-slate-600">${getLastPaymentDate(student)}</td>
                                <td data-label="Fee Status" class="p-4">
                                    <div class="flex items-center gap-2">
                                        <span aria-hidden="true" class="h-2.5 w-2.5 rounded-full ${student.feeStatus.text === 'Paid' ? 'bg-green-500' : student.feeStatus.text === 'Overdue' ? 'bg-red-500' : 'bg-slate-400'}"></span>
                                        <span class="font-medium text-slate-800">${student.feeStatus.text}</span>
                                    </div>
                                </td>
                                <td class="p-4 actions-cell">
                                    <div class="flex justify-center items-center gap-4">
                                        <button class="view-payments-btn text-slate-500 hover:text-green-600" title="View Payments" data-id="${student.id}">${WalletIcon}</button>
                                        <button class="edit-student-btn text-slate-500 hover:text-blue-600" title="Edit" data-id="${student.id}">${EditIcon}</button>
                                        <button class="delete-student-btn text-slate-500 hover:text-red-600" title="Delete" data-id="${student.id}">${DeleteIcon}</button>
                                    </div>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function EmptyState(title, message) {
    return `
        <div class="text-center py-16 px-6">
            <div class="mx-auto w-16 h-16 flex items-center justify-center bg-slate-100 rounded-full text-slate-400">
                ${UsersIcon}
            </div>
            <h3 class="text-xl font-semibold text-slate-700 mt-4">${title}</h3>
            <p class="text-slate-500 mt-2">${message}</p>
        </div>
    `;
}

function Modal(title, content) {
    return `
        <div id="modal-backdrop" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div class="relative bg-white rounded-lg shadow-xl w-full max-w-lg m-4 transform transition-all duration-300 ease-out">
                <div class="flex justify-between items-center p-4 border-b border-slate-200">
                    <h2 class="text-xl font-semibold text-slate-800">${title}</h2>
                    <button id="modal-close-btn" class="text-slate-400 hover:text-slate-600 focus:outline-none">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div class="p-6">
                    ${content}
                </div>
            </div>
        </div>
    `;
}

function StudentForm(initialData) {
    const formData = initialData ? {
        name: initialData.name,
        mobile: initialData.mobile,
        seatNumber: initialData.seatNumber,
        monthlyFee: initialData.monthlyFee,
        registrationDate: initialData.registrationDate,
    } : {
        name: '',
        mobile: '',
        seatNumber: '',
        monthlyFee: 0,
        registrationDate: new Date().toISOString().slice(0, 10),
    };

    return `
        <form id="student-form" class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" id="name" name="name" value="${formData.name}" required class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 sm:text-sm">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="mobile" class="block text-sm font-medium text-slate-700">Mobile Number</label>
                    <input type="tel" id="mobile" name="mobile" value="${formData.mobile}" required class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 sm:text-sm">
                </div>
                <div>
                    <label for="seatNumber" class="block text-sm font-medium text-slate-700">Seat Number</label>
                    <input type="text" id="seatNumber" name="seatNumber" value="${formData.seatNumber}" required class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 sm:text-sm">
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="monthlyFee" class="block text-sm font-medium text-slate-700">Monthly Fee (₹)</label>
                    <input type="number" id="monthlyFee" name="monthlyFee" value="${formData.monthlyFee}" required min="0" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 sm:text-sm">
                </div>
                <div>
                    <label for="registrationDate" class="block text-sm font-medium text-slate-700">Registration Date</label>
                    <input type="date" id="registrationDate" name="registrationDate" value="${formData.registrationDate}" required class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 sm:text-sm">
                </div>
            </div>
            <div class="flex justify-end gap-4 pt-4">
                <button type="button" id="cancel-form-btn" class="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                    Cancel
                </button>
                <button type="submit" class="px-4 py-2 bg-slate-800 text-white font-semibold rounded-md shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                    ${initialData ? 'Save Changes' : 'Add Student'}
                </button>
            </div>
        </form>
    `;
}

function PaymentModal(student) {
    const formatCurrency = (value) => `₹${value.toLocaleString('en-IN')}`;
    return Modal(`Payments for ${student.name}`, `
        <div class="space-y-6">
            <form id="payment-form" class="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h3 class="text-lg font-medium text-slate-800 mb-3">Add New Payment</h3>
                <div class="flex flex-col sm:flex-row items-end gap-4">
                    <div class="flex-grow w-full">
                        <label for="amount" class="block text-sm font-medium text-slate-700">Amount (₹)</label>
                        <input type="number" id="amount" value="" required min="1" placeholder="${student.monthlyFee}" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200">
                    </div>
                    <div class="flex-grow w-full">
                        <label for="date" class="block text-sm font-medium text-slate-700">Payment Date</label>
                        <input type="date" id="date" value="${new Date().toISOString().slice(0, 10)}" required class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors duration-200 sm:text-sm">
                    </div>
                    <button type="submit" class="w-full sm:w-auto px-4 py-2 bg-slate-800 text-white font-semibold rounded-md shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                        Add
                    </button>
                </div>
            </form>
            <div>
                <h3 class="text-lg font-medium text-slate-800 mb-2">Payment History</h3>
                <div class="max-h-60 overflow-y-auto border border-slate-200 rounded-lg">
                    ${student.payments.length > 0 ? `
                        <ul class="divide-y divide-slate-200">
                            ${student.payments.map(payment => `
                                <li key="${payment.id}" class="p-3 flex justify-between items-center">
                                    <span class="font-medium text-slate-700">${formatCurrency(payment.amount)}</span>
                                    <span class="text-sm text-slate-500">${new Date(payment.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : `<p class="text-center text-slate-500 p-8">No payments recorded yet.</p>`}
                </div>
                ${student.payments.length > 0 ? `
                    <div class="text-right font-bold text-slate-800 mt-2 pr-3">
                        Total Paid: ${formatCurrency(student.payments.reduce((sum, p) => sum + p.amount, 0))}
                    </div>
                ` : ''}
            </div>
        </div>
    `);
}

// --- EVENT HANDLERS & ATTACHMENT ---
function attachEventListeners() {
    document.getElementById('add-student-btn')?.addEventListener('click', openFormModal);
    document.getElementById('export-csv-btn')?.addEventListener('click', exportToCSV);
    document.getElementById('delete-selected-btn')?.addEventListener('click', handleDeleteSelected);
    document.getElementById('search-input')?.addEventListener('input', (e) => setState({ searchTerm: e.target.value }));
    document.querySelectorAll('.filter-status-btn').forEach(btn => btn.addEventListener('click', (e) => setState({ filterStatus: e.currentTarget.dataset.status })));
    document.getElementById('select-all-checkbox')?.addEventListener('change', handleToggleSelectAll);
    document.querySelectorAll('.select-student-checkbox').forEach(cb => cb.addEventListener('change', (e) => handleToggleSelectStudent(e.currentTarget.dataset.id)));
    document.querySelectorAll('.edit-student-btn').forEach(btn => btn.addEventListener('click', (e) => handleEditStudent(e.currentTarget.dataset.id)));
    document.querySelectorAll('.delete-student-btn').forEach(btn => btn.addEventListener('click', (e) => handleDeleteStudent(e.currentTarget.dataset.id)));
    document.querySelectorAll('.view-payments-btn').forEach(btn => btn.addEventListener('click', (e) => openPaymentModal(e.currentTarget.dataset.id)));
    
    // Modal listeners
    document.getElementById('modal-backdrop')?.addEventListener('click', (e) => {
        if (e.target.id === 'modal-backdrop') {
            closeFormModal();
            closePaymentModal();
        }
    });
    document.getElementById('modal-close-btn')?.addEventListener('click', () => {
        closeFormModal();
        closePaymentModal();
    });
    document.getElementById('cancel-form-btn')?.addEventListener('click', closeFormModal);
    document.getElementById('student-form')?.addEventListener('submit', handleSubmit);
    document.getElementById('payment-form')?.addEventListener('submit', handleAddPaymentSubmit);
}

const openFormModal = () => setState({ isFormModalOpen: true });
const closeFormModal = () => setState({ isFormModalOpen: false, editingStudent: null });
const openPaymentModal = (studentId) => {
    const student = state.students.find(s => s.id === studentId);
    setState({ paymentModalStudent: student });
};
const closePaymentModal = () => setState({ paymentModalStudent: null });

function handleAddStudent(studentData) {
    const newStudent = {
        ...studentData,
        id: Date.now().toString(),
        payments: [],
    };
    const students = getStudents();
    const newStudents = [...students, newStudent];
    setStudents(newStudents);
    setState({ students: newStudents, isFormModalOpen: false, editingStudent: null });
}

function handleUpdateStudent(updatedStudent) {
    const students = getStudents();
    const newStudents = students.map(s => (s.id === updatedStudent.id ? updatedStudent : s));
    setStudents(newStudents);
    setState({ students: newStudents, isFormModalOpen: false, editingStudent: null });
}

function handleDeleteStudent(studentId) {
    if (window.confirm('Are you sure you want to delete this student record? This action cannot be undone.')) {
        const students = getStudents();
        const newStudents = students.filter(s => s.id !== studentId);
        setStudents(newStudents);
        setState({
            students: newStudents,
            selectedStudentIds: state.selectedStudentIds.filter(id => id !== studentId)
        });
    }
}

function handleAddPaymentSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const amountInput = form.querySelector('#amount');
    const dateInput = form.querySelector('#date');

    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid payment amount.');
        return;
    }

    const newPayment = {
        id: Date.now().toString(),
        amount,
        date,
    };

    const studentId = state.paymentModalStudent.id;
    const students = getStudents();
    let updatedStudent;
    const newStudents = students.map(s => {
        if (s.id === studentId) {
            updatedStudent = {
                ...s,
                payments: [...s.payments, newPayment].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            };
            return updatedStudent;
        }
        return s;
    });

    setStudents(newStudents);
    setState({ students: newStudents, paymentModalStudent: updatedStudent });
}

function handleEditStudent(studentId) {
    const student = state.students.find(s => s.id === studentId);
    setState({ editingStudent: student, isFormModalOpen: true });
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.monthlyFee = parseFloat(data.monthlyFee);

    if (state.editingStudent) {
        handleUpdateStudent({ ...state.editingStudent, ...data });
    } else {
        handleAddStudent(data);
    }
}

function handleToggleSelectStudent(studentId) {
    const newSelectedIds = state.selectedStudentIds.includes(studentId)
        ? state.selectedStudentIds.filter(id => id !== studentId)
        : [...state.selectedStudentIds, studentId];
    setState({ selectedStudentIds: newSelectedIds });
}

function handleToggleSelectAll() {
    const filteredIds = state.students.map(s => s.id);
    const allSelected = filteredIds.length > 0 && filteredIds.every(id => state.selectedStudentIds.includes(id));
    const newSelectedIds = allSelected
        ? state.selectedStudentIds.filter(id => !filteredIds.includes(id))
        : [...new Set([...state.selectedStudentIds, ...filteredIds])];
    setState({ selectedStudentIds: newSelectedIds });
}

function handleDeleteSelected() {
    if (window.confirm(`Are you sure you want to delete ${state.selectedStudentIds.length} student records? This action cannot be undone.`)) {
        const students = getStudents();
        const newStudents = students.filter(s => !state.selectedStudentIds.includes(s.id));
        setStudents(newStudents);
        setState({ students: newStudents, selectedStudentIds: [] });
    }
}

function exportToCSV() {
    const students = getStudents();
    if (students.length === 0) {
        alert("No student data to export.");
        return;
    }

    const headers = [
        "ID",
        "Name",
        "Mobile",
        "Seat Number",
        "Monthly Fee",
        "Registration Date",
        "Fee Status",
        "Amount Due",
        "Total Paid",
        "Last Payment Date"
    ];

    const csvRows = [headers.join(',')];

    students.forEach(student => {
        const feeStatus = getFeeStatus(student);
        const totalPaid = student.payments.reduce((acc, p) => acc + p.amount, 0);
        const lastPaymentDate = student.payments.length > 0 ? new Date(student.payments[0].date).toLocaleDateString('en-GB') : 'N/A';

        const row = [
            student.id,
            `"${student.name}"`,
            `"${student.mobile}"`,
            `"${student.seatNumber}"`,
            student.monthlyFee,
            student.registrationDate,
            feeStatus.text,
            feeStatus.amountDue,
            totalPaid,
            lastPaymentDate
        ].join(',');

        csvRows.push(row);
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'students.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    setState({ students: getStudents() });
});
