import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMeshes, addStandardMesh, addIndependentMesh, addIndependentMeshTwo, addIndependentMeshThree} from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
const scene = new THREE.Scene()
const meshes = {}
const lights = {}

init()
function init() {
	//set up our renderer default settings, add scene/canvas to webpage
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	meshes.default = addBoilerPlateMeshes()
	meshes.standard = addStandardMesh()
	meshes.independent = addIndependentMesh();
	meshes.independenttwo = addIndependentMeshTwo();
	meshes.independentthree = addIndependentMeshThree();

	lights.default = addLight()

	scene.background = new THREE.Color(0x5C4033); //change background color;

	scene.add(lights.default)
	scene.add(meshes.standard)
	scene.add(meshes.default)
	scene.add(meshes.independent);
	scene.add(meshes.independenttwo);
	scene.add(meshes.independentthree);

	camera.position.set(0, 0, 8)
	resize()
	animate()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
    requestAnimationFrame(animate);
    meshes.default.rotation.x += 0.02;
    meshes.default.rotation.y -= 0.03;
	meshes.default.rotation.z -= 0.04;

    meshes.standard.rotation.x -= 0.04;
	meshes.standard.rotation.y -= 0.03;
    meshes.standard.rotation.z -= 0.01;

    meshes.independent.rotation.x += 0.05; 
    meshes.independent.rotation.y += -0.08;
	meshes.independent.rotation.z += -0.08;

	meshes.independenttwo.rotation.x += 0.03; 
    meshes.independenttwo.rotation.y += -0.03;
	meshes.independenttwo.rotation.z += -0.03;

	meshes.independentthree.rotation.x += 0.01; 
    meshes.independentthree.rotation.y += -0.01;
	meshes.independentthree.rotation.z += -0.01;

	const vibrationIntensity = .1;

    meshes.default.position.x += (Math.random() - 0.5) * vibrationIntensity;
    meshes.default.position.y += (Math.random() - 0.5) * vibrationIntensity;
    meshes.default.position.z += (Math.random() - 0.5) * vibrationIntensity;

    meshes.standard.position.x -= (Math.random() - 0.5) * vibrationIntensity;
    meshes.standard.position.y += (Math.random() - 0.5) * vibrationIntensity;
    meshes.standard.position.z += (Math.random() - 0.5) * vibrationIntensity;

    meshes.independent.position.x += (Math.random() - 0.5) * vibrationIntensity;
    meshes.independent.position.y += (Math.random() - 0.5) * vibrationIntensity;
    meshes.independent.position.z += (Math.random() - 0.5) * vibrationIntensity;

	meshes.independenttwo.position.x += (Math.random() - 0.5) * vibrationIntensity;
    meshes.independenttwo.position.y += (Math.random() - 0.5) * vibrationIntensity;
    meshes.independenttwo.position.z += (Math.random() - 0.5) * vibrationIntensity;

	meshes.independentthree.position.x += (Math.random() - 0.5) * vibrationIntensity;
    meshes.independentthree.position.y += (Math.random() - 0.5) * vibrationIntensity;
    meshes.independentthree.position.z += (Math.random() - 0.5) * vibrationIntensity;

    renderer.render(scene, camera);
}