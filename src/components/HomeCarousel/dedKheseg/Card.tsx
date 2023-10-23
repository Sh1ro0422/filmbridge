import { forwardRef } from "react";
import { useTransform, useScroll, motion, useDragControls } from "framer-motion";
const Card = forwardRef(({ ugugdul, index, itemIndex, itemSoliyo }: {ugugdul:any, index:any, itemIndex:any, itemSoliyo:Function}, ref:any) => {
    const { scrollY } = useScroll()
    const dragControldyo = useDragControls()
    const y1 = useTransform(scrollY, [0, 1500], [0, 200]);

    const dragMedrey = (dragMedeelel:any) => {
        const draggedDistance = dragMedeelel.offset.x
        const swipeThreshold = 50
        if (draggedDistance > swipeThreshold) {
            itemSoliyo(true)
        } else if (draggedDistance < -swipeThreshold) {
            itemSoliyo(false)
        }
    }

    return (
        <motion.div
            ref={ref}
            className="h-full relative w-full min-w-full scale-150 rounded transition-all duration-500 bg-fixed bg-cover"
            transition={{type: 'spring', duration: 0.4}}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, dragMedeelel) => dragMedrey(dragMedeelel)}
            style={{
                y:y1,
                backgroundImage: `url(${ugugdul.bg})`,
                opacity: itemIndex.get() === index ? 1 : 0.5,
                transform: itemIndex.get() === index ? "scale(1) !important" : "scale(0.9) !important"
            }}
        >
            <div className="absolute z-10 w-full h-full left-0 top-0 bg-[#222222] bg-opacity-60 backdrop-blur"></div>
        </motion.div>
    );
});

Card.displayName = "Card";

export default Card;
