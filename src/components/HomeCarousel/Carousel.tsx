'use client'
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { clone, isNullOrUndefined } from "../utilities/utility";
import Durs from "../Durs/Durs";
import Card from "./dedKheseg/Card";
import Image from "next/image";
interface Props {
    jagsaalt: any[]
}
const itemKhoroondiinZai = 0;
const hoosonRefJagsaalt:any[] = []
let interval:any = undefined
const Carousel = (props:Props) => {

    const {jagsaalt = []} = props
    const frameRef = useRef(null);
    const [frameSize, setFrameSize] = useState(0);
    const itemsRefs = useRef(clone(hoosonRefJagsaalt));
    const [itemKhemjee, setItemKhemjee] = useState(0);

    const [startOffset, setStartOffset] = useState(0);

    const itemIndex = useMotionValue(0);

    function intevalUusgey() {
        clearInterval(interval)
        interval = setInterval(() => {
            itemSoliyo(false)
        }, 4000)
    }



    itemIndex.on("change", (index) => {
        let startOffsetValue =
        (frameSize - itemKhemjee) / 2 -
        (itemKhemjee + itemKhoroondiinZai) * index -
        (frameSize - itemKhemjee) / 2;
        setStartOffset(startOffsetValue);
    });
    
    useLayoutEffect(() => {
        if (!frameRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setFrameSize(entry.contentRect.width);
            }
        });
        observer.observe(frameRef.current);
        return () => observer.disconnect();
    }, [props]);

    intevalUusgey()
    useLayoutEffect(() => {
        const observer = new ResizeObserver((entries) => {
        const itemWidths = entries.map((entry) => entry.contentRect.width);
        setItemKhemjee(Math.max(...itemWidths));
        });

        itemsRefs.current.forEach((ref:any) => {
        if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [props]);

    const itemSoliyo = (umnukhEsekh:boolean = false) => {
        if(umnukhEsekh) {
            if(itemIndex.get() === 0) itemIndex.set(jagsaalt.length - 1)
            else itemIndex.set(itemIndex.get() - 1) 
        } else {
            if(itemIndex.get() === jagsaalt.length - 1) itemIndex.set(0)
            else itemIndex.set(itemIndex.get() + 1)
        }
        intevalUusgey()
    }

    return (
        <div
            className="relative w-full overflow-hidden flex items-center !bg-[#333333] justify-center select-none"
            ref={frameRef}
            style={{}}
        >
            {/* <motion.div className='absolute flex justify-between w-full px-5 z-50'>
                <motion.div 
                    className="bg-[#00000080] backdrop-blur p-2 cursor-pointer" 
                    whileHover={{scale: 1.1}} 
                    onClick={() => itemSoliyo(true)}
                >
                    <Durs icon="fluent:arrow-left-24-filled" className="text-[2rem] text-gray-100"/>
                </motion.div>
                <motion.div 
                    className="bg-[#00000080] backdrop-blur p-2 cursor-pointer" 
                    whileHover={{scale: 1.1}} 
                    onClick={() => itemSoliyo(false)}
                >
                    <Durs icon="fluent:arrow-right-24-filled" className="text-[2rem] text-gray-100"/>
                </motion.div>
            </motion.div> */}
            <motion.div
                className={`relative top-0 w-screen h-screen left-0 flex flex-nowrap will-change-transform`}
                animate={{
                    x: startOffset
                }}
                transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
                style={{
                    gap: `${itemKhoroondiinZai}px`
                }}
                >
                {jagsaalt.map((x, i) => (
                    <Card
                        key={i}
                        ref={(element) => {
                            itemsRefs.current[i] = element;
                        }}
                        itemSoliyo={(utga:boolean) => itemSoliyo(utga)}
                        ugugdul={x}
                        index={i}
                        itemIndex={itemIndex}
                    />
                ))}
            </motion.div>
            <div className="flex flex-col absolute z-50 bottom-4 gap-3 items-center">
                <div className="flex flex-row gap-1">
                    {
                        jagsaalt.map((x, i) => {
                            return <motion.div key={i} className="w-[200px] shadow-slate-600 h-[100px] rounded overflow-hidden cursor-pointer backdrop-blur" animate={{scale: itemIndex.get() !== i ? 0.9 : 1.1, opacity: itemIndex.get() !== i ? 0.6 : 1}} onClick={() => {
                                itemIndex.set(i)
                            }}>
                                <Image src={x.bg} width={200} height={200} alt={""}/>
                            </motion.div>
                        })
                    }
                </div>
                <div className="flex text-xl font-serif">
                    <svg width="20px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'round',strokeLinejoin:'round',strokeMiterlimit:1.5}}>
                        <path id="wheel" d="M123.359,79.775l0,72.843" style={{fill:'none',stroke:'#fff',strokeWidth:20}}/>
                        <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{fill:'none',stroke:'#fff',strokeWidth:20}}/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
