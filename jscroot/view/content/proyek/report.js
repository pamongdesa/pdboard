import { addCSSIn } from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import { id, backend } from "../../../url/config.js";
import { Chart, registerables } from 'https://cdn.skypack.dev/chart.js';


Chart.register(...registerables);

let messageChart;

export async function main() {
    await addCSSIn("assets/css/report.css", id.content);
    
    var ctx = document.getElementById('messageChart').getContext('2d');
    var messageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Messages Sent', 'Messages Queued'],
            datasets: [{
                label: 'Messages',
                data: [50, 30], // Ganti dengan data yang sesuai
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    //messageChart.update();

}


