const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();
loader.load('https://upload.wikimedia.org/wikipedia/commons/2/27/Starsinthesky.jpg', function(texture) {
    scene.background = texture;
});

// Audio Playback // Music by Oleksii Holubiev from Pixabay
window.addEventListener('load', () => {
    const music = document.getElementById('bg-music');
    music.volume = 0.4
    setTimeout(() => {
      music.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }, 8000);
  });

const starGeo = new THREE.BufferGeometry();
const starCount = 1900;
const positions = [];

for (let i = 0; i < starCount; i++) { 
    positions.push((Math.random() - 0.5) * 900); // x
    positions.push((Math.random() - 0.5) * 900); // y
    positions.push((Math.random() - 0.5) * 900); // z
}

starGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
const stars = new THREE.Points(starGeo, starMaterial);
scene.add(stars);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(4, 15, 70);
camera.lookAt(0, 0, 0);

// Sun
const sunTexture = new THREE.TextureLoader().load('asset/suntext.jpg');
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
const sunLight = new THREE.PointLight(0xffffff, 2, 1000);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);

// Lighting
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0, 0, 10);
scene.add(light);

const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);

// Sun glow (lens flare effect)
const spriteMaterial = new THREE.SpriteMaterial({
    map: new THREE.TextureLoader().load('asset/lensflare/lensflare0.png'),
    color: 0xffff00,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
});
const sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(14, 13, 1);
sun.add(sprite);


// Mercury
const planetTexture1 = new THREE.TextureLoader().load('asset/planets/mercury.jpg');
const planetaryGeometry1 = new THREE.SphereGeometry(0.2, 32, 32);
const planetMaterial1 = new THREE.MeshBasicMaterial({ map: planetTexture1 });
const planet1 = new THREE.Mesh(planetaryGeometry1, planetMaterial1);
scene.add(planet1);
// Trail
const maxTrailPoints1 = 280;
const trailPositions1 = new Float32Array(maxTrailPoints1 * 3);
const trailGeometry1 = new THREE.BufferGeometry();
trailGeometry1.setAttribute('position', new THREE.BufferAttribute(trailPositions1, 3));
const trailMaterial1 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
});

const trail1 = new THREE.Line(trailGeometry1, trailMaterial1);
scene.add(trail1);

// Venus
const planetTexture2 = new THREE.TextureLoader().load('asset/planets/venus.jpg');
const planetaryGeometry2 = new THREE.SphereGeometry(0.3, 32, 32);
const planetMaterial2 = new THREE.MeshBasicMaterial({ map: planetTexture2 });
const planet2 = new THREE.Mesh(planetaryGeometry2, planetMaterial2);
scene.add(planet2);
// Trail
const trailPoints2 = [];
const trailGeometry2 = new THREE.BufferGeometry();
const trailMaterial2 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
});
const trail2 = new THREE.Line(trailGeometry2, trailMaterial2);
scene.add(trail2);

// Earth
const planetTexture3 = new THREE.TextureLoader().load('asset/planets/earth.jpg');
const planetaryGeometry3 = new THREE.SphereGeometry(0.25, 32, 32);
const planetMaterial3 = new THREE.MeshStandardMaterial({ map: planetTexture3 });
const planet3 = new THREE.Mesh(planetaryGeometry3, planetMaterial3);
scene.add(planet3);

const trailPoints3 = [];
const trailGeometry3 = new THREE.BufferGeometry();
const trailMaterial3 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
});
const trail3 = new THREE.Line(trailGeometry3, trailMaterial3);
scene.add(trail3);

// Mars
const planetTexture4 = new THREE.TextureLoader().load('asset/planets/mars.jpg');
const planetaryGeometry4 = new THREE.SphereGeometry(0.40, 35, 35);
const planetMaterial4 = new THREE.MeshStandardMaterial({ map: planetTexture4 });
const planet4 = new THREE.Mesh(planetaryGeometry4, planetMaterial4);
scene.add(planet4);

const maxTrailPoints4 = 1900;
const trailPositions4 = new Float32Array(maxTrailPoints4 * 3);
const trailGeometry4 = new THREE.BufferGeometry();
trailGeometry4.setAttribute('position', new THREE.BufferAttribute(trailPositions4, 3));

const trailMaterial4 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
});

const trail4 = new THREE.Line(trailGeometry4, trailMaterial4);
scene.add(trail4);

// Jupiter
const planetTexture5 = new THREE.TextureLoader().load('asset/planets/jupiter.jpg');
const planetaryGeometry5 = new THREE.SphereGeometry(0.8, 42, 37); // scale down from 80 to 0.8
const planetMaterial5 = new THREE.MeshStandardMaterial({ map: planetTexture5 }); // orange
const planet5 = new THREE.Mesh(planetaryGeometry5, planetMaterial5);
scene.add(planet5);

const maxTrailPoints5 = 2100;
const trailPositions5 = new Float32Array(maxTrailPoints5 * 3);
const trailGeometry5 = new THREE.BufferGeometry();
trailGeometry5.setAttribute('position', new THREE.BufferAttribute(trailPositions5, 3));
const trailMaterial5 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
});
const trail5 = new THREE.Line(trailGeometry5, trailMaterial5);
scene.add(trail5);

// Saturn
const planetTexture6 = new THREE.TextureLoader().load('asset/planets/saturn.jpg');
const planetGeometry6 = new THREE.SphereGeometry(0.6, 80, 180);
const planetMaterial6 = new THREE.MeshStandardMaterial({ map: planetTexture6 });
const planet6 = new THREE.Mesh(planetGeometry6, planetMaterial6);
scene.add(planet6);

const maxTrailPoints6 = 2100;
const trailPositions6 = new Float32Array(maxTrailPoints6 * 3);
const trailGeometry6 = new THREE.BufferGeometry();
trailGeometry6.setAttribute('position', new THREE.BufferAttribute(trailPositions6, 3));
const trailMaterial6 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
});
const trail6 = new THREE.Line(trailGeometry6, trailMaterial6);
scene.add(trail6);

// Saturn Rings
const ringGeometry = new THREE.RingGeometry(0.13, 0.2, 64);
const ringTexture = new THREE.TextureLoader().load('asset/saturn_ring.jpg');
const ringMaterial = new THREE.MeshBasicMaterial({map: ringTexture, side: THREE.DoubleSide, transparent: true,});
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.rotation.x = -Math.PI / 2;
scene.add(ring);

// Uranus
const planetTexture7 = new THREE.TextureLoader().load('asset/planets/uranus.jpg');
const planetGeometry7 = new THREE.SphereGeometry(0.9, 90, 185);
const planetMaterial7 = new THREE.MeshStandardMaterial({ map: planetTexture7 });
const planet7 = new THREE.Mesh(planetGeometry7, planetMaterial7);
scene.add(planet7);

const maxTrailPoints7 = 1800;
const trailPositions7 = new Float32Array(maxTrailPoints7 * 3);
const trailGeometry7 = new THREE.BufferGeometry();
trailGeometry7.setAttribute('position', new THREE.BufferAttribute(trailPositions7, 3));
const trailMaterial7 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
});
const trail7 = new THREE.Line(trailGeometry7, trailMaterial7);
scene.add(trail7);

// Orbit variables
let angle1 = 0; // Mercury
let angle2 = 0; // Venus
let angle3 = 0; // Earth
let angle4 = 0; // Mars
let angle5 = 0; // Jupiter
let angle6 = 0; // Ring of Jupiter
let angle7 = 0; // Uranus

const radius1 = 9;   // Mercury
const radius2 = 17;   // Venus
const radius3 = 28;   // Earth
const radius4 = 39;   // Mars
const radius5 = 48;  // Jupiter
const radius6 = 66;  // Saturn
const radius7 = 78; // Uranus

const baseSpeed = 0.005;       // planets orbit speed

const speed1 = baseSpeed / 0.26;    // Mercury
const speed2 = baseSpeed / 0.62;    // Venus
const speed3 = baseSpeed / 1.00;    // Earth
const speed4 = baseSpeed / 1.88;    // Mars
const speed5 = baseSpeed / 3.56;   // Jupiter
const speed6 = baseSpeed / 4.06;   // Saturn
const speed7 = baseSpeed / 5.88;   // Uranus

function updateLabel(labelId, object3D) {
    const label = document.getElementById(labelId);
    if (!label) return;

    const vector = object3D.position.clone();
    vector.project(camera);

    const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;

    label.style.left = `${x}px`;
    label.style.top = `${y}px`;
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Animation
function animate() {
    requestAnimationFrame(animate);

    orbitAngle = THREE.MathUtils.lerp(orbitAngle, targetOrbitAngle, 0.1);
    orbitRadius = THREE.MathUtils.lerp(orbitRadius, targetOrbitRadius, 0.1);

    camera.position.x = Math.sin(orbitAngle) * orbitRadius;
    camera.position.z = Math.cos(orbitAngle) * orbitRadius;
    camera.position.y = fixedCameraY;

    angle1 += speed1;
    planet1.position.x = Math.cos(angle1) * radius1;
    planet1.position.z = Math.sin(angle1) * radius1;
    trailPositions1.copyWithin(0, 3);
    trailPositions1.set([planet1.position.x, planet1.position.y, planet1.position.z], trailPositions1.length - 3);
    trailGeometry1.attributes.position.needsUpdate = true;

    angle2 += speed2;
    planet2.position.x = Math.cos(angle2) * radius2;
    planet2.position.z = Math.sin(angle2) * radius2;
    trailPoints2.push(planet2.position.clone());
if  (trailPoints2.length > 700) {trailPoints2.shift(); 

}
    const positions2 = new Float32Array(trailPoints2.length * 3);
    trailPoints2.forEach((vec, i) => {
    positions2[i * 3] = vec.x;
    positions2[i * 3 + 1] = vec.y;
    positions2[i * 3 + 2] = vec.z;
});
    trailGeometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));
    trailGeometry2.setDrawRange(0, trailPoints3.length);
    trailGeometry2.attributes.position.needsUpdate = true;

    angle3 += speed3;
    planet3.position.x = Math.cos(angle3) * radius3;
    planet3.position.z = Math.sin(angle3) * radius3;
    trailPoints3.push(planet3.position.clone());
if  (trailPoints3.length > 1100) {trailPoints3.shift(); 

}
    const positions3 = new Float32Array(trailPoints3.length * 3);
    trailPoints3.forEach((vec, i) => {
    positions3[i * 3] = vec.x;
    positions3[i * 3 + 1] = vec.y;
    positions3[i * 3 + 2] = vec.z;
});
    trailGeometry3.setAttribute('position', new THREE.BufferAttribute(positions3, 3));
    trailGeometry3.setDrawRange(0, trailPoints3.length);
    trailGeometry3.attributes.position.needsUpdate = true;

    angle4 += speed4;
    planet4.position.x = Math.cos(angle4) * radius4;
    planet4.position.z = Math.sin(angle4) * radius4;
    trailPositions4.copyWithin(0, 3);
    trailPositions4.set([planet4.position.x, planet4.position.y, planet4.position.z], trailPositions4.length - 3);
    trailGeometry4.attributes.position.needsUpdate = true;

    angle5 += speed5;
    planet5.position.x = Math.cos(angle5) * radius5;
    planet5.position.z = Math.sin(angle5) * radius5;
    trailPositions5.copyWithin(0, 3);
    trailPositions5.set([planet5.position.x, planet5.position.y, planet5.position.z], trailPositions5.length - 3);
    trailGeometry5.attributes.position.needsUpdate = true;

    angle6 += speed6;
    planet6.position.x = Math.cos(angle6) * radius6;
    planet6.position.z = Math.sin(angle6) * radius6;
    trailPositions6.copyWithin(0, 3);
    trailPositions6.set([planet6.position.x, planet6.position.y, planet6.position.z], trailPositions6.length - 3);
    trailGeometry6.attributes.position.needsUpdate = true;

    angle7 += speed7;
    planet7.position.x = Math.cos(angle7) * radius7;
    planet7.position.z = Math.sin(angle7) * radius7;
    trailPositions7.copyWithin(0, 3);
    trailPositions7.set([planet7.position.x, planet7.position.y, planet7.position.z], trailPositions7.length - 3);
    trailGeometry7.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);

    updateLabel("label1", planet1);
    updateLabel("label2", planet2);
    updateLabel("label3", planet3);
    updateLabel("label4", planet4);
    updateLabel("label5", planet5);
    updateLabel("label6", planet6);
    updateLabel("label7", planet7);
}

animate();
