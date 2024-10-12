"use client";
import { config } from "@/config";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { useCallback, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface Props {
  url?: string;
  name: string;
}

const PortfolioCard: NextPage<Props> = ({
  url = "uploads/images/default-project.png",
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleZoom = useCallback(() => {
    setIsOpen(!isOpen);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [isOpen]);

  const handleZoom = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (!isOpen) return;
      const delta = event.deltaY * -0.01;
      setScale((prevScale) => Math.min(Math.max(1, prevScale + delta), 3));
    },
    [isOpen]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!isOpen || scale === 1 || !containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - left) / width) * 2 - 1;
      const y = ((event.clientY - top) / height) * 2 - 1;
      setPosition({ x: -x * 50, y: -y * 50 });
    },
    [isOpen, scale]
  );

  const urlPatch = `${config.base_url}/${url}`;

  return (
    <div>
      <div onClick={toggleZoom} className="cursor-pointer">
        <Image
          src={urlPatch}
          alt={name}
          className="mb-4 rounded-lg overflow-hidden w-full"
          width={300}
          height={200}
        />
        <p className="text-gray-600 font-semibold text-base leading-relaxed text-center">
          {name}
        </p>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleZoom}
        >
          <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{
              width: "90vw",
              height: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleZoom}
            onMouseMove={handleMouseMove}
          >
            <Image
              src={urlPatch}
              alt={name}
              fill
              style={{
                objectFit: "contain",
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
              }}
              className="transition-transform duration-200 ease-out"
            />
            <button
              onClick={toggleZoom}
              className="absolute top-4 right-4 bg-white rounded-full p-2"
            >
              <FaXmark size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
