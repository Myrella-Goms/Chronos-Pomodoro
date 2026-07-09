export function formatSecondsToMinutes(seconds: number): string{
    //formtando os sefundos para minutos, para string
    //padStart: se não tiver duas casas decimais, adiciona uma casa 0 no inicio
    const minutesToString = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsToString = String(Math.floor(seconds % 60)).padStart(2, '0');
    return `${minutesToString}:${secondsToString}`
}