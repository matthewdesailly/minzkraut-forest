let sceneSamurai, rendererSamurai, cameraSamurai;
let samuraiMixer;

function loadSamurai() {
    const width = 200,
        height = 250;

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
    cameraSamurai.position.set(0, 80, 160);

    const ambientLight = new THREE.AmbientLight(0xffffff, .2);
    sceneSamurai.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    sceneSamurai.add(directionalLight);

    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/samurai.gltf', (gltf) => {
        const model = gltf.scene;
        model.scale.set(100, 100, 100);

        // Animations
        samuraiMixer = new THREE.AnimationMixer(model);
        const animation = samuraiMixer.clipAction(gltf.animations[0]);
        animation.play();

        sceneSamurai.add(model);
    });
}

loadSamurai();

let sceneFox, rendererFox, cameraFox;
let foxMixer;

function loadFox() {
    const width = 200,
        height = 200;

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

    const ambientLight = new THREE.AmbientLight(0xffffff, .2);
    sceneFox.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    sceneFox.add(directionalLight);

    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/fox.gltf', (gltf) => {
        const foxModel = gltf.scene;
        foxModel.scale.set(100, 100, 100);

        // Animations
        foxMixer = new THREE.AnimationMixer(foxModel);
        const foxAnimation = foxMixer.clipAction(gltf.animations[0]);
        foxAnimation.play();

        sceneFox.add(foxModel);
    });
}

loadFox();

let clockSamurai = new THREE.Clock();
let clockFox = new THREE.Clock();

function update() {

    if (samuraiMixer) {
        samuraiMixer.update(clockSamurai.getDelta());
    }
    if (foxMixer) {
        foxMixer.update(clockFox.getDelta());
    }

    rendererSamurai.render(sceneSamurai, cameraSamurai);
    rendererFox.render(sceneFox, cameraFox);
    requestAnimationFrame(update);

}

update();