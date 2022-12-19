(function(){
    let container, camera, renderer, scene, room, controls
    const pov = 10

    const init = () => {
        const aspect = window.innerWidth / window.innerHeight
    	container = document.querySelector(".scene")
    	//Create scene
    	scene = new THREE.Scene()
        scene.translateY(-2)
        camera = new THREE.OrthographicCamera( pov * aspect / - 2, pov * aspect / 2, pov / 2, pov / - 2, 0-500, 1000 );
        camera.position.set( 50, 20, 45 )

        //Colors
        const bg = 0xF7D6E0
        const mainBG = 0xEFF7F6
        const windowBG = 0xEFF7F6
        const windowBG2 = 0xB2F7EF
        const pointBG = 0xF7D6E0

        //Lights
        const ambientLight = new THREE.AmbientLight(mainBG, .6)
        scene.add(ambientLight)

        const hLight = new THREE.HemisphereLight( windowBG, windowBG, .15 );
        scene.add( hLight )

        const mainLight = new THREE.DirectionalLight( mainBG, .75 )
        mainLight.position.set( 0, 8, 0 )
        scene.add( mainLight )

        const windowLight = new THREE.RectAreaLight( windowBG, 80,  7.5, 3.75)
        windowLight.position.set(-4, 3.9, 0 )
        windowLight.rotation.y = -4.7125
        scene.add( windowLight )

        const windowLight3 = new THREE.RectAreaLight( windowBG, 100,  7.5, 3.75)
        windowLight3.position.set(-4.2, 3.9, 0)
        windowLight3.rotation.y = -1.575
        scene.add( windowLight3 )

        const windowLight2 = new THREE.RectAreaLight( windowBG2, 100,  7.5, 3.75)
        windowLight2.position.set(6, 2.75, 3)
        windowLight2.rotation.y = -2.25
        windowLight2.rotation.x = -.1
        windowLight2.translateY(2)
        scene.add( windowLight2 )

        //Floor
        const geometryFloor = new THREE.PlaneBufferGeometry(container.clientWidth * 2, container.clientHeight * 2)
        const materialFloor = new THREE.MeshStandardMaterial({
            color: 0xf7f2ff,
            roughness: .5,
            // metalness: .5,
            // reflectivity: true,
        });

        const floor = new THREE.Mesh(geometryFloor, materialFloor)
        floor.rotation.x = -Math.PI / 2.0
        floor.position.set(0, -.15, 0)
        scene.add(floor)

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
    	renderer.setSize(container.clientWidth, container.clientHeight)
    	renderer.setPixelRatio(window.devicePixelRatio)

        //Controls
        const controls = new THREE.OrbitControls( camera, renderer.domElement )
        controls.minDistance = 2
        controls.maxDistance = 10
        controls.maxPolarAngle = Math.PI / 2
        controls.target.set( 0, 0, - 0.2 )
        controls.update()
        container.appendChild(renderer.domElement)

    	//Load Model
    	const loader = new THREE.GLTFLoader()
    	loader.load("room.glb", function(gltf) {
            scene.add(gltf.scene)
    		room = gltf.scene.children[0]
    		animate()
    	})
    }

    const animate = () => {
    	requestAnimationFrame(animate)
        scene.rotation.y += 0.005
    	renderer.render(scene, camera)
    }

    const onWindowResize = () => {
        let aspect = window.innerWidth / window.innerHeight
        camera.left = pov * aspect / - 2;
        camera.right = pov * aspect / 2;
        camera.top = pov / 2;
        camera.bottom = - pov / 2;

        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    /*****************/
    window.addEventListener("resize", onWindowResize)
    init()
})()
