type CycleType = "workTime" | "shortBreakTime" | "longBreakTime";
export function getNextCycleType(currentCycle: number): CycleType {
  if (currentCycle % 8 === 0) return "longBreakTime";
  return currentCycle % 2 === 0 ? "shortBreakTime" : "workTime";
}
