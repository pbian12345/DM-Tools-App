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


// ADDITIONAL TO-DO:
// - Add save/load mechanics and DM profiles
// - Incorporate monster & spell API Cammy found
// - Add notes classes for DMs to pre-write stuff and record happenings in campaign
//    = Cammy wants to be able to sort by most recently opened
//    = This means will need to have accessible variable for date/time of last viewed &
//      method to set that variable (think about where this set fcn should be called automatically)




