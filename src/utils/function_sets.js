export const getTotalPatientsTotal = (clinicId, patients) => {
    let count = 0
    patients.forEach(patient => {
        if(clinicId === patient.clinicId) {
            count += 1
        }
    })
    return count
}

export const getPatientsToday = (clinicId, patients) => {
    let count = 0
    patients.forEach(patient => {
        if((clinicId === patient.clinicId) && isSameDate(new Date(), new Date(patient.date))) {
            count += 1
        }
    })
    return count
}

export const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

export const getTotalIncomeOfSpecificClinic = (clinicId, payments) => {
    let income = 0
    payments.forEach(payment => {
        if(clinicId === payment.clinicId) {
            income += payment.total
        }
    })
    return income
}

export const getNumberOfCustomers = (clinics) => {
    return clinics.length
}

export const getNewlyRegisteredCustomers = (clinics) => {
    return clinics.filter(clinic => isSameDate(new Date(clinic.createdAt), new Date())).length
}

export const getTodaysIncomeOfSpecificClinic = (clinicId, payments) => {
    let income = 0
    payments.forEach(payment => {
        if((clinicId === payment.clinicId) && isSameDate(new Date(), new Date(payment.date))) {
            income += payment.total
        }
    })
    return income
}

export const getCompanyRevenue = (clinics) => {
    let income = 0
    clinics.forEach(clinic => {
        income += clinic.amount
    })

    return income
}

export const getTodaysCompanyIncome = (clinics) => {
    let income = 0
    clinics.forEach(clinic => {
        if(isSameDate(new Date(clinic.createdAt), new Date())) {
            income += clinic.amount
        }
    })

    return income
}

export const getFormattedDate = (date) => {
    let d = new Date(date)
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
}

export const getNewPatientsClinic = (clinicState) => {
    let count = 0
    let patients = clinicState.clinicInfo.data.patients
    patients.forEach(patient => {
        if(isSameDate(new Date(patient.date), new Date())) {
            count += 1
        }
    })

    return count
}




//new patients
//todays income
//totalIncome

const isSameDate = (date1, date2) => {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getYear() === date2.getYear()
}