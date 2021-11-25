export interface Hero {
  id: number;
  name: string;
  powerStats: [
    {combat: number},
    {strength: number},
    {endurance: number},
    {healing?: boolean},
  ],
  overallRating: Function;
}
