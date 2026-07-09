export function getNextCycle(currentCycle: number): number {
  if (currentCycle === 0 || currentCycle === 8) return currentCycle = 1;
  return currentCycle + 1; 
}
