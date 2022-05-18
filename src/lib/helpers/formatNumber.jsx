export const formatNumber = (num) => {
    if (isNaN(num)) {
        return num
    }
    return new Intl.NumberFormat('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2}).format(num).replace(',','.')
}