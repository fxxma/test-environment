export function generateId(): string {
  return `acc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}
