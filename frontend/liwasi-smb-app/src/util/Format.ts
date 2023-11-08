function formatNumber(num: number): string {
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });

    return formatter.format(num);
}
export default formatNumber;