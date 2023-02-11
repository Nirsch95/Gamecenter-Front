export interface ProductI {
  id: string;
  name: string;
  description: string;
  inInventory: number;
  enabled: boolean;
  min: number;
  max: number;
  image: string;
  state: boolean;
}
