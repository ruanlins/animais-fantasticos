export default class Workingdays {
  constructor(workingtime, activeCLass) {
    this.workingtime = document.querySelector(workingtime);
    this.activeCLass = activeCLass;
  }

  workingData() {
    this.weekDays = this.workingtime.dataset.semana.split(',').map(Number);
    this.weekHour = this.workingtime.dataset.horario.split(',').map(Number);
  }

  todayData() {
    this.dateNow = new Date();
    this.todayDate = this.dateNow.getDay();
    this.todayHour = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const openDay = this.weekDays.indexOf(this.todayDate) !== -1;
    const openHour = (this.todayHour >= this.weekHour[0] && this.todayHour < this.weekHour[1]);

    return openDay && openHour;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.workingtime.classList.add(this.activeCLass);
    }
  }

  init() {
    if (this.workingtime) {
      this.workingData();
      this.todayData();
      this.activeOpen();
    }
  }
}
