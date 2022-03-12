import './style.css'

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

function run() {
    loadData();
}

run();

function loadData() {
    let gltfLoader = new GLTFLoader();

    // let url = new URL( "../assets/models/cubeFish.glb", import.meta.url );
    // let str = "" + url;

    let str = "/cubeFish.glb";
console.log( "str:  " + str );

    gltfLoader.load( str, gltfFishReader, null, null );
}


function gltfFishReader( gltf ) {
    let fishModel = null;

    fishModel = gltf.scene;

    if( fishModel != null ) {
        console.log("fish loaded:  " + fishModel );
    } else {
        console.log("Load FAILED.  " ); 
    }
}
