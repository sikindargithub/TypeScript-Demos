// union types
interface Mobile {
  charging: () => void;
  call(): void;
}

interface Laptop {
  charging: () => void;
  work(): void;
}

// for understanding
class MobielImpl implements Mobile {
  charging = (): void => {
    console.log(`Charging...`);
  };

  call(): void {
    console.log(`Calling...`);
  }
}

// this method return an interface reference
let gadgetDet = (): Mobile => {
  return new MobielImpl();
};

let mob: Mobile = gadgetDet();
mob.call();
mob.charging();

// this method returns union of inteface reference
let itemDetails = (): Mobile | Laptop => {
  return {
    charging: () => console.log(`charging...`),
    call: () => console.log(`calling...`),
    work: () => console.log(`working`),
  };
};

let mob1: any = itemDetails();
mob1.call();
mob1.work();
mob1.charging();
