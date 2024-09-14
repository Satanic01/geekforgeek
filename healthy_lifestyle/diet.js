function generateDiet() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let disease = document.getElementById('disease').value;
    
    let diet = '';

    if (weight && height) {
        // Basic diet plan based on weight and height
        if (weight < 60) {
            diet += '<p>Include high-protein foods such as lean meats, beans, and nuts. Ensure sufficient calorie intake with healthy fats and carbs.</p>';
        } else if (weight >= 60 && weight <= 80) {
            diet += '<p>Balanced diet with a mix of protein, healthy fats, and complex carbs. Focus on whole grains, vegetables, and fruits.</p>';
        } else {
            diet += '<p>Low-carb, high-fiber foods are recommended. Focus on lean protein sources and reduce sugar intake.</p>';
        }

        // Adjust diet based on health condition
        if (disease === 'diabetes') {
            diet += '<p><b>Note:</b> Include foods with a low glycemic index like leafy greens, whole grains, and avoid sugary foods.</p>';
        } else if (disease === 'hypertension') {
            diet += '<p><b>Note:</b> Reduce salt intake and focus on potassium-rich foods like bananas, potatoes, and leafy greens.</p>';
        } else if (disease === 'heart-disease') {
            diet += '<p><b>Note:</b> Avoid saturated fats. Focus on heart-healthy foods such as salmon, flaxseeds, and almonds.</p>';
        } else {
            diet += '<p><b>Note:</b> No specific health conditions reported. Follow the general diet plan based on your weight and height.</p>';
        }
    } else {
        diet = '<p>Please provide both weight and height to generate a diet plan.</p>';
    }

    document.getElementById('diet').innerHTML = diet;
}