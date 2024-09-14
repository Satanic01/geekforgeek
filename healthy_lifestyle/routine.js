function generateRoutine() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let disease = document.getElementById('disease').value;
    
    let routine = '';

    if (weight && height) {
        // Basic routine based on weight and height
        if (weight < 60) {
            routine += '<p>Light exercises like yoga, walking, and body-weight exercises are recommended.</p>';
        } else if (weight >= 60 && weight <= 80) {
            routine += '<p>A mix of cardio, strength training, and flexibility exercises is ideal.</p>';
        } else {
            routine += '<p>Low-impact exercises like swimming or cycling with moderate strength training is advisable.</p>';
        }

        // Adjust routine based on health condition
        if (disease === 'diabetes') {
            routine += '<p><b>Note:</b> Include moderate-intensity aerobic exercises and muscle-strengthening activities.</p>';
        } else if (disease === 'hypertension') {
            routine += '<p><b>Note:</b> Avoid heavy lifting; focus on cardio and flexibility exercises.</p>';
        } else if (disease === 'heart-disease') {
            routine += '<p><b>Note:</b> Light activities such as walking or light cycling are recommended. Avoid strenuous exercises.</p>';
        } else {
            routine += '<p><b>Note:</b> No specific health conditions reported. Follow the general routine based on your weight and height.</p>';
        }
    } else {
        routine = '<p>Please provide both weight and height to generate an exercise routine.</p>';
    }

    document.getElementById('routine').innerHTML = routine;
}