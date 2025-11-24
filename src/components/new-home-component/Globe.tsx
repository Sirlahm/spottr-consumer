import React, { useState, useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import globeImage from "../../assets/map1.jpeg";

interface WorldGlobeProps {
  width?: number;
  height?: number;
  autoRotate?: boolean;
  rotateSpeed?: number;
}

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string[];
}

interface PointData {
  lat: number;
  lng: number;
  size: number;
}

const WorldGlobe: React.FC<WorldGlobeProps> = ({
  width = 500,
  height = 500,
  autoRotate = true,
  rotateSpeed = 0.7,
}) => {
  const [arcsData, setArcsData] = useState<ArcData[]>([]);
  const [points, setPoints] = useState<PointData[]>([]);
  const globeEl = useRef<GlobeMethods>(); // ✅ no null, matches Globe’s ref type

  // Generate random arcs and points
  useEffect(() => {
    const arcs: ArcData[] = Array.from({ length: 20 }, () => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["#ff4d4d", "#ff4d4d"],
        ["#66ff66", "#66ff66"],
        ["#ff66ff", "#ff66ff"],
        ["#3399ff", "#3399ff"],
      ][Math.floor(Math.random() * 4)],
    }));

    const dots: PointData[] = Array.from({ length: 800 }, () => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: 0.5,
    }));

    setArcsData(arcs);
    setPoints(dots);
  }, []);

  // Configure controls
  useEffect(() => {
    if (!globeEl.current) return;
    const controls = globeEl.current.controls();

    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = rotateSpeed;
    controls.enableZoom = false;
  }, [autoRotate, rotateSpeed]);

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
      }}
    >
      <Globe
        ref={globeEl}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={false}
        globeImageUrl={globeImage}
        arcsData={arcsData}
        arcColor={"color"}
        arcStroke={0.5}
        arcDashLength={0.8}
        arcDashGap={2}
        arcDashInitialGap={() => Math.random() * 5}
        arcDashAnimateTime={4000}
        pointsData={points}
        pointColor={() => "rgba(200,200,200,0.8)"}
        pointAltitude={0.01}
        pointRadius={0.3}
      />
    </div>
  );
};

export default WorldGlobe;
