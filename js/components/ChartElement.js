/* global Chart */

class ChartElement {
  constructor(element) {
    this.init(element);
  }

  init(element) {
    const ctx = element.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      options: {
        legend: {
          labels: {
            padding: 20,
            fontSize: 16
          }
        }
      },
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
          label: 'Signups',
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          hidden: true,
        }]
      },
    });
  }
}

export default ChartElement;