abstract class Sports {
  constructor(public name: string, public noOfPlayers: number) {}

  printDetails = () => {
    console.log(`name:${this.name},no of players:${this.noOfPlayers}`);
  };
  abstract groundType(): void;
}

class Cricket extends Sports {
  constructor(
    public name: string,
    public noOfPlayers: number,
    public coach: string,
    public tournamentName: Tournament,
    public origin?: string
  ) {
    super(name, noOfPlayers);
  }
  groundType(): void {
    console.log(`Ground is in oval shape`);
  }
}

class Football extends Sports {
  constructor(
    public name: string,
    public noOfPlayers: number,
    public sponser: string,
    public matchName: Tournament
  ) {
    super(name, noOfPlayers);
  }
  groundType(): void {
    console.log(`Ground is in square shape`);
  }
}
enum Tournament {
  IPL = "IPL",
  T20 = "T20",
  LALIGA = "Laliga",
  BUNDESLIGA = "Bundesliga",
}

var cricket = new Cricket("Superkings", 11, "Malya", Tournament.IPL, "England");
cricket.printDetails();
cricket.groundType();

var football = new 