let updateDate = (dayOrMonth) => {
    if(dayOrMonth.length === 1) return ('0' + dayOrMonth);
    return dayOrMonth;
}

export default updateDate;