$(document).ready(function () {

	//	resize canvas
	var aspectRatio = 16 / 9;
	var canvasWidth, canvasHeight;

	if ($(window).outerWidth() / $(window).outerHeight() >= aspectRatio) {
		canvasWidth = $(window).outerHeight() * aspectRatio;
		canvasHeight = $(window).outerHeight();
	} else {
		canvasWidth = $(window).outerWidth();
		canvasHeight = $(window).outerWidth() / aspectRatio;
	}

	// start experiment
	var renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.shadowMapEnabled = true;
	document.body.appendChild(renderer.domElement);

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(
		35, // Field of view
		aspectRatio, // Aspect ratio
		0.1, // Near plane
		10000           // Far plane
	);
	camera.position.set(5, 5, -20);
	camera.lookAt(scene.position);

	scene.add(camera);

	var plane = new THREE.Mesh(
		new THREE.PlaneGeometry(50, 50),
		new THREE.MeshLambertMaterial({color:0xffffff})
	);
	plane.rotation.x = -Math.PI/2;
	plane.position.y = -5;
	plane.castShadow = true;
	plane.receiveShadow = true;

	var cube = new THREE.Mesh(
		new THREE.CubeGeometry(5, 5, 5),
		new THREE.MeshLambertMaterial({ color:0xFF0000 })
	);
	cube.castShadow = true;
	cube.receiveShadow = true;

	var cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry(3, 3, 6, 40),
		new THREE.MeshLambertMaterial({ color:0x00ff00 })
	);
	cylinder.castShadow = true;
	cylinder.receiveShadow = true;

	scene.add(plane);
	scene.add(cube);
	scene.add(cylinder);

	var light = new THREE.PointLight(0xFFFFFF);
	light.intensity = 1.2;
	light.castShadow = true;
	light.position.set(10, 20, -20);
	scene.add(light);

	var spotLight = new THREE.SpotLight(0xFF0000);
	spotLight.intensity = 4.9;
	spotLight.castShadow = true;
	spotLight.position.set(-10, 30 ,-20);
	spotLight.lookAt(scene.position);
	scene.add(spotLight);

	renderer.render(scene, camera);

});
