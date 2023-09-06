import { getCurrentDate } from "./GetCurrentDate";

describe('getCurrentDate', ()=> {
    
    it('should return a string with two digits representing the current day of the month', () => {
      const currentDate = getCurrentDate();
      expect(currentDate.day.length).toBe(2);
      expect(Number(currentDate.day)).toBeGreaterThanOrEqual(1);
      expect(Number(currentDate.day)).toBeLessThanOrEqual(31);
    });
})