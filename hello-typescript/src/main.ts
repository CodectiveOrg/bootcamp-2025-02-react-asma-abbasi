import { reverseArray } from "./task-2/reverse-array";
import { countNumbers } from "./task-2/count-numbers";

function testReverseArray(): void {
  const items = [1, 2, 3];
  const reversedItems = reverseArray(items);
  console.log(reversedItems);
}

function testCountNumber(): void {
  const items = [1, "asma", 2, "abbasi", 3];
  const count = countNumbers(items);
  console.log(count);
}

function main(): void {
  testReverseArray();
  testCountNumber();
}

main();
