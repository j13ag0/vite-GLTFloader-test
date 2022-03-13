import './style.css'

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


function run() {
    loadData();
}

run();

function loadData() {
    let gltfLoader = new GLTFLoader();

    let str = "/assets/models/cubeFish.glb";

    gltfLoader.load( str, gltfFishReader, null, null );
}


function gltfFishReader( gltf ) {
    let fishModel = null;

    fishModel = gltf.scene;

    if( fishModel != null ) {
        console.log("cubeFish LOADED !:  " + fishModel );
    } else {
        console.log("Load FAILED.  " ); 
    }
}
