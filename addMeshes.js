import {
	BoxGeometry,
	MeshBasicMaterial,
	// MeshStandardMaterial,
	Mesh,
} from 'three'

function getRandomOpacity(min = 0.75, max = 1) {
    return Math.random() * (max - min) + min;
}

export const addBoilerPlateMeshes = () => {
	const box = new BoxGeometry(1, 0.01, 1)
	const boxMaterial = new MeshBasicMaterial({ color: 0xff007f, opacity: getRandomOpacity(), transparent: true })
	const boxMesh = new Mesh(box, boxMaterial)
	boxMesh.position.set(0.01, 0, 7)
	return boxMesh
}

export const addStandardMesh = () => {
	const box = new BoxGeometry(1, 1, 0.01)
	const boxMaterial = new MeshBasicMaterial({ color: 0x89cff0, opacity: getRandomOpacity(), transparent: true })
	const boxMesh = new Mesh(box, boxMaterial)
	boxMesh.position.set(0, 0.01, 7.2)
	return boxMesh
}

export const addIndependentMesh = () => {
    const geometry = new BoxGeometry(0.01, 1, 1); 
    const material = new MeshBasicMaterial({ color: 0xffffff, opacity: getRandomOpacity(), transparent: true }); 
    const mesh = new Mesh(geometry, material);
    mesh.position.set(-0.1, 0, 6.9); 
    return mesh;
}

export const addIndependentMeshTwo = () => {
    const geometry = new BoxGeometry(0.01, -1, 1); 
    const material = new MeshBasicMaterial({ color: 0xFA6800, opacity: getRandomOpacity(), transparent: true }); 
    const mesh = new Mesh(geometry, material);
    mesh.position.set(0.01, 0.01, 7); 
    return mesh;
}

export const addIndependentMeshThree = () => {
    const geometry = new BoxGeometry(0.01, -1, 1); 
    const material = new MeshBasicMaterial({ color: 0x000000, opacity: 0.25, transparent: true }); 
    const mesh = new Mesh(geometry, material);
    mesh.position.set(0.03, 0.02, 7.5); 
    return mesh;
}