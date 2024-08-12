import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.7/croot.js";
import { id, backend } from "../../../url/config.js";
import { Chart, registerables } from 'https://cdn.skypack.dev/chart.js';


Chart.register(...registerables);

export async function main() {
    
    getJSON(
        backend.sender.rekap,
        "login",
        getCookie("login"),
        getResponseFunction
      );

}


function getResponseFunction(result) {
    const canvas = document.getElementById('messageChart');
    var ctx = canvas.getContext('2d');
    var messageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Messages Sent', 'Messages Queued'],
            datasets: [{
                label: 'Messages',
                data: [result.data.done, result.data.todo], // Ganti dengan data yang sesuai
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
    // Ensure the canvas has width and height set
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

}