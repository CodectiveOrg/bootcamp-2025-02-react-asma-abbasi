import { reverseArray } from "./task-2/reverse-array";
import { countNumbers } from "./task-2/count-numbers";
import { Entity } from "./task-2/entities";
import { sortEntities } from "./task-2/sort-entities";

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

function testSortEntities(): void {
  const entities: Entity[] = [
    {
      createAt: "2025-02-11T00:00:00.000Z",
      name: "asma",
    },
    {
      createAt: "2025-01-31T00:00:00.000Z",
      modifiedAt: "2025-02-10T00:00:00.000Z",
    },
  ];

  const sortedEntities = sortEntities(entities);
  console.log(sortedEntities);
}

function main(): void {
  testReverseArray();
  testCountNumber();
  testSortEntities();
}

main();
