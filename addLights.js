import { DirectionalLight } from 'three'

export const addLight = () => {
	let light = new DirectionalLight(0xffffff, 1)
	light.position.set(1, 2, 1)
	return light
}