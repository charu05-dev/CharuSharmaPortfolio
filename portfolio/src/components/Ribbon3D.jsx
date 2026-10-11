import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Ribbon3D = ({ 
  className = "w-full h-full", 
  interactive = true, 
  variant = "hero",
  density = "full" 
}) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 800;
    let height = container.clientHeight || 600;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Curve generation for the signature Slush inflatable ribbon
    let points = [];
    if (variant === "hero") {
      // Sweeping 3D loop that wraps behind, over, and through the typography
      points = [
        new THREE.Vector3(-12, -4, -3),
        new THREE.Vector3(-8, 3, 2),
        new THREE.Vector3(-3, 5, -2),
        new THREE.Vector3(2, 2, 4),
        new THREE.Vector3(6, -3, 1),
        new THREE.Vector3(9, -4, -2),
        new THREE.Vector3(12, 1, 3),
        new THREE.Vector3(15, 3, -1)
      ];
    } else if (variant === "compact") {
      points = [
        new THREE.Vector3(-8, -2, -1),
        new THREE.Vector3(-4, 2, 2),
        new THREE.Vector3(0, -1, -2),
        new THREE.Vector3(4, 2, 1),
        new THREE.Vector3(8, -1, 0)
      ];
    } else {
      // Contact section dramatic loop
      points = [
        new THREE.Vector3(-10, -5, -2),
        new THREE.Vector3(-5, 4, 3),
        new THREE.Vector3(0, 0, -4),
        new THREE.Vector3(6, 5, 2),
        new THREE.Vector3(11, -3, -1)
      ];
    }

    const curve = new THREE.CatmullRomCurve3(points);
    curve.curveType = 'centripetal';
    curve.tension = 0.4;

    // Tube geometry for inflatable look
    const tubeRadius = variant === "hero" ? 1.45 : 1.1;
    const geometry = new THREE.TubeGeometry(curve, 120, tubeRadius, 32, false);

    // Slush Electric Blue inflatable material
    // Soft, slightly glossy, inflatable rubber / vinyl feel
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x4da2ff,            // Electric Blue #4da2ff
      emissive: 0x0a3c80,        // Deep blue inner glow
      roughness: 0.16,           // Smooth inflatable sheen
      metalness: 0.04,           // Mostly dielectric
      clearcoat: 0.65,           // Inflatable vinyl shine
      clearcoatRoughness: 0.12,
      reflectivity: 0.8,
      sheen: 0.3,
      sheenColor: 0xdceeff
    });

    const ribbonMesh = new THREE.Mesh(geometry, material);
    scene.add(ribbonMesh);

    // Decorative floating capsules / mini bubbles (subtle inflatable companions)
    const bubblesGroup = new THREE.Group();
    const bubbleGeo = new THREE.SphereGeometry(0.55, 24, 24);
    const bubbleMat = new THREE.MeshPhysicalMaterial({
      color: 0x55db9c, // Mint Pop
      roughness: 0.2,
      clearcoat: 0.8
    });
    
    const bubblePositions = [
      [-6, 4, 1],
      [7, -3, 2],
      [-2, -4, 3],
      [8, 3, -1]
    ];

    bubblePositions.forEach(([x, y, z]) => {
      const bubble = new THREE.Mesh(bubbleGeo, bubbleMat);
      bubble.position.set(x, y, z);
      bubblesGroup.add(bubble);
    });
    scene.add(bubblesGroup);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(10, 15, 12);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x4da2ff, 1.2);
    dirLight2.position.set(-12, -10, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1.8, 30);
    pointLight.position.set(0, 4, 10);
    scene.add(pointLight);

    // Mouse interaction tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouseX = (clientX / width - 0.5) * 2;
      mouseY = (clientY / height - 0.5) * 2;
      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.35;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop
    let clock = new THREE.Clock();
    let animFrameId;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp mouse tracking
      ribbonMesh.rotation.y += (targetRotY - ribbonMesh.rotation.y) * 0.05;
      ribbonMesh.rotation.x += (targetRotX - ribbonMesh.rotation.x) * 0.05;

      // Gentle continuous organic wave
      ribbonMesh.rotation.z = Math.sin(elapsedTime * 0.6) * 0.05;
      ribbonMesh.position.y = Math.sin(elapsedTime * 0.8) * 0.25;

      // Bubbles floating gently
      bubblesGroup.children.forEach((b, i) => {
        b.position.y += Math.sin(elapsedTime * 1.2 + i) * 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 800;
      height = container.clientHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [interactive, variant]);

  return (
    <div 
      ref={mountRef} 
      className={`pointer-events-none ${className}`} 
      aria-hidden="true" 
    />
  );
};
