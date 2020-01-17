//Variables for setup



var bd = document.body;
var suns = document.querySelector("#card")

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
	container = document.querySelector(".scene");

	//Create scene
	scene = new THREE.Scene();
	const fov = 50;
	const aspect = container.clientWidth / container.clientHeight;
	const near = 1;
	const far = 2000;

	//Camera setup
	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(0, 40, 350);

	const ambient = new THREE.AmbientLight(0xfcfcfc, 1.1);
	scene.add(ambient);

	const light = new THREE.DirectionalLight(0x000000, 1);
	light.position.set(50, 50, 10);
	scene.add(light);

	const plight = new THREE.PointLight( 0x6ce0ff, 2, 100 );
	plight.position.set( 50, 50, 50 );
	scene.add( plight );

	//Renderer
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(container.clientWidth, container.clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	container.appendChild(renderer.domElement);

	//Load Model
	let loader = new THREE.GLTFLoader();
	loader.load("./models/drone/scene.gltf", function(gltf) {
		scene.add(gltf.scene);
		house = gltf.scene.children[0];
		animate();
	});
}



function animate() {
	requestAnimationFrame(animate);
	house.rotation.z += 0.007;
	renderer.render(scene, camera);
}
init();


function onWindowResize() {
	// camera.aspect = container.clientWidth / container.clientHeight;
	// camera.updateProjectionMatrix();
	//
	// renderer.setSize(container.clientWidth, container.clientHeight);
}
window.addEventListener("resize", onWindowResize);





function getSuns(event) {
    var w = window.innerWidth / 2;
    var x = event.clientX;
    if (x > w + 100) {
        suns.style.transform = "perspective(1000px) rotateY(3deg)";
    }
    if (x > w - 100 && x < w + 100) {
        suns.style.transform = "perspective(1000px) rotateY(0deg)";
    }
    if (x < w - 100) {
        suns.style.transform = "perspective(1000px) rotateY(-3deg)";
    }
}
bd.addEventListener("mousemove", getSuns);
