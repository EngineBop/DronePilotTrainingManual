import * as THREE from "three";
import {STLLoader} from "three/addons/loaders/STLLoader.js";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const stage=document.querySelector("#target-viewer-stage"),status=document.querySelector("#target-viewer-status");
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.outputColorSpace=THREE.SRGBColorSpace;
stage.prepend(renderer.domElement);

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(35,1,0.1,3000);
camera.up.set(0,0,1);
const controls=new OrbitControls(camera,renderer.domElement);
controls.enableDamping=false;
controls.minDistance=180;
controls.maxDistance=1100;
controls.addEventListener("change",render);

scene.add(new THREE.HemisphereLight(0xffffff,0x38505c,2.25));
const key=new THREE.DirectionalLight(0xffffff,3.2);key.position.set(-250,-300,420);scene.add(key);
const fill=new THREE.DirectionalLight(0xffe6c7,1.2);fill.position.set(300,160,180);scene.add(fill);

const group=new THREE.Group();scene.add(group);
const parts=[];
const loader=new STLLoader();
const files=[
  ["base","boprc-survey-control-target-base-290mm.stl?v=lettering-1",0x37434a,0],
  ["dark","boprc-survey-control-target-dark-inlays-290mm.stl?v=lettering-1",0x111315,1],
  ["light","boprc-survey-control-target-light-inlays-290mm.stl?v=lettering-1",0xf4f1df,2]
];

function render(){renderer.render(scene,camera)}
function resize(){const width=stage.clientWidth,height=renderer.domElement.clientHeight||460;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();render()}
function resetView(){camera.position.set(320,-370,300);controls.target.set(0,0,0);controls.update();render()}

Promise.all(files.map(([name,url,colour,order])=>new Promise((resolve,reject)=>loader.load(url,geometry=>{
  geometry.computeVertexNormals();
  const material=new THREE.MeshStandardMaterial({color:colour,roughness:.62,metalness:.04,side:THREE.DoubleSide});
  const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.userData.order=order;group.add(mesh);parts.push(mesh);resolve();
},undefined,reject)))).then(()=>{
  const box=new THREE.Box3().setFromObject(group),centre=box.getCenter(new THREE.Vector3());
  parts.forEach(mesh=>{mesh.position.sub(centre);mesh.userData.homeZ=mesh.position.z});
  const grid=new THREE.GridHelper(420,14,0x78909c,0x78909c);grid.rotation.x=Math.PI/2;grid.position.z=-centre.z-2;grid.material.opacity=.2;grid.material.transparent=true;scene.add(grid);
  status.hidden=true;resetView();resize();
}).catch(error=>{console.error(error);status.textContent="The interactive model could not load. The STL download buttons below are still available."});

document.querySelector("#target-view-reset").addEventListener("click",resetView);
document.querySelector("#target-view-explode").addEventListener("change",event=>{const exploded=event.currentTarget.checked;parts.forEach(mesh=>{mesh.position.z=mesh.userData.homeZ+(exploded?mesh.userData.order*18:0)});render()});
new ResizeObserver(resize).observe(stage);
resize();
