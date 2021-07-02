let sceneForest, rendererForest, cameraForest;
let modelForest;

function loadForest() {
    const width = 350,
        height = 400;

    sceneForest = new THREE.Scene();
    sceneForest.background = new THREE.Color('#ffffff');

    const container = document.getElementById('forest');

    rendererForest = new THREE.WebGLRenderer({
        antialias: true,
    });
    rendererForest.gammaOutput = true;

    container.appendChild(rendererForest.domElement);

    rendererForest.setSize(width, height);

    cameraForest = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    cameraForest.position.set(0, 50, 200);

    // Create Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, .2);
    sceneForest.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    sceneForest.add(directionalLight);

    // Load Forest GLTF Model
    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/forest.gltf', (gltf) => {
        modelForest = gltf.scene;
        modelForest.scale.set(4, 4, 4);
        modelForest.rotation.x = Math.PI / 6.5;

        sceneForest.add(modelForest);
    });
}

loadForest();

let sceneSamurai, rendererSamurai, cameraSamurai;
let mixerSamurai, modelSamurai;

function loadSamurai() {
    const width = 300,
        height = 350;

    sceneSamurai = new THREE.Scene();
    sceneSamurai.background = new THREE.Color('#ffffff');

    const container = document.getElementById('samurai');

    rendererSamurai = new THREE.WebGLRenderer({
        antialias: true,
    });
    rendererSamurai.gammaOutput = true;

    container.appendChild(rendererSamurai.domElement);

    rendererSamurai.setSize(width, height);

    cameraSamurai = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    cameraSamurai.position.set(0, 90, 160);

    // Create Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, .2);
    sceneSamurai.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    sceneSamurai.add(directionalLight);

    // Load Samurai GLTF Model
    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/samurai.gltf', (gltf) => {
        modelSamurai = gltf.scene;
        modelSamurai.scale.set(100, 100, 100);

        // Animations
        mixerSamurai = new THREE.AnimationMixer(modelSamurai);
        const animation = mixerSamurai.clipAction(gltf.animations[0]);
        animation.play();

        sceneSamurai.add(modelSamurai);
    });
}

loadSamurai();

let sceneFox, rendererFox, cameraFox;
let mixerFox, modelFox;

function loadFox() {
    const width = 300,
        height = 300;

    sceneFox = new THREE.Scene();
    sceneFox.background = new THREE.Color('#ffffff');

    const container = document.getElementById('fox');

    rendererFox = new THREE.WebGLRenderer({
        antialias: true,
    });
    rendererFox.gammaOutput = true;

    container.appendChild(rendererFox.domElement);

    rendererFox.setSize(width, height);

    cameraFox = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    cameraFox.position.set(0, 40, 120);

    // Create Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, .2);
    sceneFox.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    sceneFox.add(directionalLight);

    // Load Fox GLTF Model
    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/fox.gltf', (gltf) => {
        modelFox = gltf.scene;
        modelFox.scale.set(100, 100, 100);

        // Animations
        mixerFox = new THREE.AnimationMixer(modelFox);
        const foxAnimation = mixerFox.clipAction(gltf.animations[0]);
        foxAnimation.play();

        sceneFox.add(modelFox);
    });
}

loadFox();

// Keep Track of Time
const clockSamurai = new THREE.Clock();
const clockFox = new THREE.Clock();

animate();

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    // Forest Rotation
    if (modelForest) {
        modelForest.rotation.y += Math.PI * .001;
    }

    // Animate in Real Time
    if (mixerSamurai) {
        // modelSamurai.rotation.y += Math.PI * .001;
        mixerSamurai.update(clockSamurai.getDelta());
    }
    if (mixerFox) {
        // modelFox.rotation.y += Math.PI * .001;
        mixerFox.update(clockFox.getDelta());
    }

    rendererForest.render(sceneForest, cameraForest);
    rendererSamurai.render(sceneSamurai, cameraSamurai);
    rendererFox.render(sceneFox, cameraFox);
}