var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 2;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#e5e5e5");
document.body.appendChild( renderer.domElement );


window.addEventListener('resize', () => {
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
} )


var geometry = new THREE.SphereGeometry( 1, 2, 800 );
var material = new THREE.MeshLambertMaterial( { color: 0x115666 } );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

var light = new THREE.PointLight( 0xffffff, 4, 500 );
light.position.set( 10, 0, 25 );
scene.add( light );

function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
    cube.rotation.x += 0.08;
    cube.rotation.y += 0.01;
    cube.position.x += 0.02;
}

animate();

renderer.render(scene, camera);