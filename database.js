// Implementation of DM Tool database and API


/*******************************************************************
 * Initiative Tracker Classes
********************************************************************/

// 5e Player Class
class Player {
  // Private members
  #name;                                  // String - Player name
  #initiative;                            // Number - Player initiative
  #hp;                                    // Number - Player hit points
  #ac;                                    // Number - Player armor class
  #notes;                                 // String - Player notes

  constructor(name, initiative, hp, ac, notes) {
    this.#name = name;
    this.#initiative = initiative;
    this.#hp = hp;
    this.#ac = ac;
    this.#notes = notes;
  }

  // Accessors
  getName() { return this.#name; }
  getInitiative() {return this.#initiative;}
  getHP() { return this.#hp; }
  getAC() { return this.#ac; }
  getNotes() { return this.#notes; }
  // Mutators
  takeDmg(dmg) { this.#hp -= dmg; }
  healDmg(heals) { this.#hp += heals; }
  setNewAC(newAC) { this.#ac = newAC; }
  updateNotes(newNotes) { this.#notes = newNotes; }
  setNewInitiative(newInit) { this.#initiative = newInit; }
}

// Initiative Tracker Class


/*******************************************************************
 * Spell List Classes
********************************************************************/


/*******************************************************************
 * Searchable Monster Classes
********************************************************************/


/*******************************************************************
 * Encounter Tracker Classes
********************************************************************/



/*******************************************************************
 * Exported API Classes
********************************************************************/



