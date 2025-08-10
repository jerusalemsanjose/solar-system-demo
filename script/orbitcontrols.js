    
    let isDragging = false;
    let previousMouseX = 0;
    let orbitAngle = 0;
    let targetOrbitAngle = 0;
    let orbitRadius = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
    let targetOrbitRadius = orbitRadius;

    const fixedCameraY = camera.position.y;

    window.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMouseX = event.clientX;
});

    window.addEventListener('mouseup', () => {
    isDragging = false;
});

    window.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaX = event.clientX - previousMouseX;
        previousMouseX = event.clientX;

        targetOrbitAngle += deltaX * 0.003;
    }
});
    window.addEventListener('wheel', (event) => {
    const zoomSpeed = 5;
    targetOrbitRadius += event.deltaY * 0.01 * zoomSpeed;
    targetOrbitRadius = THREE.MathUtils.clamp(targetOrbitRadius, 10, 150);
});

