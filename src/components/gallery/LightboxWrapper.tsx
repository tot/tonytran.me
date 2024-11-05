import React, { useState, useRef, useEffect } from "react";
import Lightbox, { type Slide } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface LightboxWrapperProps {
    children: React.ReactNode;
    slide: Slide;
    imageId: string;
}

export default function LightboxWrapper({
    children,
    slide,
    imageId,
}: LightboxWrapperProps) {
    const [open, setOpen] = useState(false);
    const zoomRef = useRef(null);

    useEffect(() => {
        const handleToggle = (event: any) => {
            if (event.detail.id === imageId) {
                setOpen(!open);
            }
        };
        document.addEventListener("toggleLightbox", handleToggle);
        return () =>
            document.removeEventListener("toggleLightbox", handleToggle);
    }, [open, imageId]);

    return (
        <>
            <div className="relative border border-stone-700/30 rounded overflow-hidden shadow bg-stone-700/5">
                {children}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[slide]}
                plugins={[Zoom]}
                zoom={{ ref: zoomRef }}
                controller={{
                    closeOnBackdropClick: true,
                }}
                carousel={{
                    finite: true,
                }}
                render={{
                    buttonPrev: () => null,
                    buttonNext: () => null,
                }}
            />
        </>
    );
}
