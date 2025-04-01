function displayPrice(cubeType) {
    let priceElement;

    if (cubeType === '3x3') {
        priceElement = document.getElementById('price-3x3');
        priceElement.textContent = "Price: $10";
    } else if (cubeType === '4x4') {
        priceElement = document.getElementById('price-4x4');
        priceElement.textContent = "Price: $15";
    } else if (cubeType === 'big') {
        priceElement = document.getElementById('price-big');
        priceElement.textContent = "Price: $20";
    }
}
