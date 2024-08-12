import { addCSSIn } from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import { id, backend } from "../../../url/config.js";


export async function main() {
    await addCSSIn("assets/css/report.css", id.content);

    // Step 4: Run after all loaded
    window.addEventListener('load', (event) => {

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
        messageChart.update();
    
    //This includes after-all assets like images, scripts, and CSS files.
    //Loaded
    console.log('The page has fully loaded');
    });
    

}


