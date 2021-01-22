const Employee = require('./employee');
const Util = require('./util');

class Manager extends Employee {
  #bonuses = 2000;
  get bonuses() {
    return Util.formatCurrency(this.#bonuses);
  }

  get netPay() {
    const netPay = Util.unFormatCurrency(super.netPay);
    const bonuses = Util.unFormatCurrency(this.bonuses);
    return Util.formatCurrency(netPay + bonuses);
  }
}

module.exports = Manager;
